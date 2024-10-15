import React from "react";
import "..//..//Components/Row/Row.css";
import Card from "..//..//Components/Card/Card";

const List = ({ title, data }) => {
  return (
    <div className="result-padding">
      <h1 className="result-heading">{title}</h1>
      <div className="wish-list-items">
        {data?.map((item) => (
          <Card movie={item} />
        ))}
      </div>
    </div>
  );
};

export default List;