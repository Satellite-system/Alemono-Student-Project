import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Expandable from "../components/Expandable";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

const CoursePage = () => {
  const location = useLocation();
  const data = JSON.parse(location.state);
  const [syllabus, setSyllabus] = useState([]);
  // console.log(">>>> Next Page >> ", location.state);

  const getSyllabusList = async () => {
    // console.log("------- Inside FXn ---------");
    const q = query(collection(db, "syllabus"));

    const querySnapshot = await getDocs(q);
    var index = 0;
    querySnapshot.forEach((doc) => {
      console.log(":::: Syllabus-Data >>>", doc.data());
      data.syllabus[index] = doc.data();
      console.log(">> Syll :: ", data.syllabus[index]);
      console.log("Index >> ", index);
      index++;

      setSyllabus((data) => [...data, doc.data()]);
    });
  };

  useEffect(() => {
    return () => {
      getSyllabusList();
    };
  }, []);

  return (
    <div className="container">
      <p className="header_txt">{data.name}</p>
      <img src={data.thumbnail} alt="thumbnail" className="container_img" />
      <div className="horizontal-center">
        <span className="subHeader_txt margin-right-10">Instructor:</span>
        <span>{data.instructor}</span>
      </div>
      <p>{data.description}</p>
      <div className="space-between margin-horizontal-20vw">
        <span>Location: {data.location}</span>
        <span>
          Status : {data.enrollmentStatus} | {data.duration}
        </span>
      </div>
      <p className="margin-horizontal-20vw">
        <b>Schedule:</b> {data.schedule}
      </p>
      <strong>Followings are prerequisites: </strong>
      <ul className="margin-horizontal-50vw">
        {data?.prerequisites?.map((res) => (
          <li>{res}</li>
        ))}
      </ul>
      {/* Expandable */}
      <div className="margin-horizontal-20vw flex-start margin-bottom-10vh">
        <p>Syllabus: </p>
        {syllabus.map((res) => (
          <Expandable data={res} />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
