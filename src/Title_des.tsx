import React from "react";

const Title_des = ({ title, dsc }) => {
  return (
    <div className="title">
      <h1 className="mb-2 pt-6 text-2xl font-Ubuntu-Bold">{title}</h1>
      <p className="text-Coolgray font-Ubuntu-Regular mb-4 ">{dsc}</p>
    </div>
  );
};

export default Title_des;
