import React, { useEffect, useState } from "react";
import db from "../firebase";
import { query, collection, getDocs } from "firebase/firestore";
import Course from "../components/Course";
import Select from "react-dropdown-select";
import { useSelector, useDispatch } from "react-redux";
import { setCoursesDetails } from "../features/courseSlice";

const Home = () => {
  const [value, setValue] = useState(1);
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(true);

  console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK");
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course);

  console.log("Object Type >> ", course);

  // Get a list of courses from your database
  const getData = async () => {
    const q = query(collection(db, "CourseModel"));
    const querySnapshot = await getDocs(q);
    console.log("QUErrryyyyyyyy ", querySnapshot);
    dispatch(setCoursesDetails(querySnapshot));
  };

  useEffect(() => {
    return () => {
      console.log("+++++++++++++++++++++++");
      getData();
    };
  }, []);

  const options = [
    {
      value: 1,
      label: "Course Name",
    },
    {
      value: 2,
      label: "Instructor",
    },
  ];

  const actionHandler = () => {
    console.log("Droup down>> ", value[0].value);
    console.log("Infor >> ", info);
  };

  return (
    <div className="container">
      <div className="margin-bottom-10vh">
        <Select options={options} onChange={(values) => setValue(values)} />
        <input value={info} onChange={(e) => setInfo(e.target.value)} />
        <button onClick={actionHandler}>Go</button>
      </div>
      {course.map((res, index) => (
        <Course data={res} key={index} />
      ))}
    </div>
  );
};

export default Home;
