import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const data = useSelector((state) => state.user);

  return (
    <div className="container">
      <p className="header_txt">{data.name}</p>
      <span>{data.email}</span>
      <p className="subHeader_txt">Courses Enrolled: </p>
      {data.course.map((res, key) => (
        <div>
          <img src={res.thumbnail} alt="" className="container_img" />
          <p>{res.name}</p>
          <p>Instructor: {res.instructor}</p>
          <p>Due Date: {res.due_date}</p>
          <p>Progress: {res.progress_bar}/100</p>
          {res.completed ? "Completed" : <button>Mark As Completed</button>}
        </div>
      ))}
    </div>
  );
};

export default Profile;
