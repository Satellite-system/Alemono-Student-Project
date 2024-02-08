import React from "react";
import { useCollapse } from "react-collapsed";
import "./style.css";

const Expandable = ({ data }) => {
  const { getCollapseProps, getToggleProps } = useCollapse();

  return (
    <div className="expandable">
      <button {...getToggleProps()} className="expandable_btn">
        {data.week}. {data.topic}
      </button>
      <section {...getCollapseProps()}>{data.content}</section>
    </div>
  );
};

export default Expandable;
