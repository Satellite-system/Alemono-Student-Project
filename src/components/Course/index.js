import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Course = ({ data }) => {
  const navigate = useNavigate();
  // console.log("Inside Course >> ", data);

  const handleClick = () => {
    navigate("/course", { state: JSON.stringify(data) });
  };

  return (
    <div className="course" onClick={handleClick}>
      <img
        src={data.thumbnail}
        alt="course_img "
        className="course_thumbnail"
      />
      <p className="course_title">{data.name}</p>
      <p className="course_duration">Duration: {data.duration}</p>
      <p className="course_location">Location: {data.location}</p>
    </div>
  );
};

export default Course;
