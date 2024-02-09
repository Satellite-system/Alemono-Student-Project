import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCourseCompletion } from "../../features/userSlice";
import { doc, updateDoc } from "firebase/firestore";
import { db, realTimedatabase } from "../../firebase";
import "./Style.css";
import { ref, update } from "firebase/database";

const ActionBtn = ({ completed, id, res, like }) => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(completed);
  var noOfLikes = like[res.name]?.like;
  // console.log(">>>> Likes ::: ", like);
  // console.log("ZZZZZZ  ::: ", noOfLikes);
  // console.log(">>> Resoirse", res);

  const UpdateLikeFxn = () => {
    console.log("BTN CLICKED---");
    const usersRef = ref(realTimedatabase, "courses/" + res.name);
    update(usersRef, { like: noOfLikes + 1 }).then(() => {
      console.log("Sucess!!!!!");
    });
  };

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
    <div className="completeBtn">
      {clicked ? (
        "Completed"
      ) : (
        <button onClick={() => clickHandler()}>Mark As Completed</button>
      )}
      <div className="ActionBtn_div">
        Likes: {noOfLikes}
        {/* {like[res.name].like} */}
        <button onClick={() => UpdateLikeFxn()} className="completeBtn_btn">
          Like
        </button>
      </div>
    </div>
  );
};

export default ActionBtn;
