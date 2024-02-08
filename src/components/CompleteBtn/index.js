import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCourseCompletion } from "../../features/userSlice";
import { collection, doc, updateDoc } from "firebase/firestore";
import db from "../../firebase";

const CompletedBtn = ({ completed, id, res }) => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(completed);
  console.log(">>> Resoirse", res);

  const clickHandler = async () => {
    console.log("<<< ", id);
    const tsest = { ...res, completed: true };
    delete tsest._id;

    const colRef = doc(db, "user", "18PVK7ttMLgPaa8aOADK", "course", res._id);
    await updateDoc(colRef, tsest);

    console.log("Updated One>>> ", tsest);

    dispatch(toggleCourseCompletion(id));
    setClicked(true);
  };

  return (
    <div>
      {clicked ? (
        "Completed"
      ) : (
        <button onClick={() => clickHandler()}>Mark As Completed</button>
      )}
    </div>
  );
};

export default CompletedBtn;
