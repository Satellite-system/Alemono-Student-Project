import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { query, collection, getDocs, doc, getDoc } from "firebase/firestore";
import db from "../firebase";
import { getUserDetails, toggleCourseCompletion } from "../features/userSlice";
import CompletedBtn from "../components/CompleteBtn";

const Profile = () => {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getUserData = async () => {
    const docRef = doc(db, "user", "18PVK7ttMLgPaa8aOADK");
    const docSnap = await getDoc(docRef);

    // console.log("rrryyyyyyyy ", docSnap.data());

    const colRef = collection(db, "user", "18PVK7ttMLgPaa8aOADK", "course");
    const colSnap = await getDocs(colRef);

    dispatch(getUserDetails({ data: docSnap.data(), course: colSnap }));
  };

  useEffect(() => {
    return () => {
      // console.log("UUUUUUUUUUUUUUUUUUUUUUU");
      getUserData();
    };
  }, []);


  return (
    <div className="container">
      <p className="header_txt">{data.data.name}</p>
      <span>{data.data.email}</span>
      <p className="subHeader_txt">Courses Enrolled: </p>
      {data.course.map((res, key) => (
        <div key={key}>
          <img src={res.thumbnail} alt="" className="container_img" />
          <p>{res.name}</p>
          <p>Instructor: {res.instructor}</p>
          <p>Due Date: {res.due_date}</p>
          <p>Progress: {res.progress_bar}/100</p>
          <CompletedBtn completed={res.completed} id={res.id} res={res}/>
          
        </div>
      ))}
    </div>
  );
};

export default Profile;
