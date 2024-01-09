import React from "react";

const Stats = ({ title, number }) => {
  return (
    <div className="stats">
      <h2>{title}</h2>
      <p>{number}</p>
    </div>
  );
};

export default Stats;
