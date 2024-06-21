import React from "react";
interface Title_descProps {
  title: any;
  dsc: any;
}

const Title_des: React.FC<Title_descProps> = ({ title, dsc }) => {
  return (
    <div className="title">
      <h1 className="mb-2 pt-6 text-2xl font-Ubuntu-Bold">{title}</h1>
      <p className="text-Coolgray font-Ubuntu-Regular mb-4 ">{dsc}</p>
    </div>
  );
};

export default Title_des;
