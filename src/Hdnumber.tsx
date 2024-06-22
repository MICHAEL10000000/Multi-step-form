import React from "react";
import { NavLink } from "react-router-dom";

interface HdnumberProps {
  firstFunction: any;
  secondFunction: any;
  thirdFunction: any;
  fourthFunction: any;
}

const Hdnumber: React.FC<HdnumberProps> = ({
  firstFunction,
  secondFunction,
  thirdFunction,
  fourthFunction,
}) => {
  const linkList = [
    "/Multi-step-form",
    "./Selection",
    "./AddOns",
    "./Finishing",
  ];

  return (
    <div className=" Header mb-8 flex justify-center items-center  text-white top-6  ">
      <ol className="flex gap-4 md:flex-col">
        <li className="flex items-center gap-4">
          <NavLink
            to={linkList[0]}
            className="border-white border-solid border round flex justify-center items-center w-10 p-2 hover:bg-Lightblue hover:border-none hover:text-black"
            onClick={(e) => {
              firstFunction(e);
            }}
          >
            1
          </NavLink>
          <div className="hidden md:block">
            <p className=" text-Coolgray">STEP 1</p>
            <h1 className="font-Ubuntu-Bold">YOUR INFO</h1>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <NavLink
            to={linkList[1]}
            className="border-white border-solid border round flex justify-center items-center w-10 p-2 hover:bg-Lightblue hover:border-none hover:text-black"
            onClick={(e) => {
              secondFunction(e);
            }}
          >
            2
          </NavLink>
          <div className="hidden md:block">
            <p className=" text-Coolgray">STEP 2</p>
            <h1 className="font-Ubuntu-Bold">SELECT PLAN</h1>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <NavLink
            to={linkList[2]}
            className="border-white border-solid border round flex justify-center items-center w-10 p-2 hover:bg-Lightblue hover:border-none hover:text-black"
            onClick={(e) => {
              thirdFunction(e);
            }}
          >
            3
          </NavLink>
          <div className="hidden md:block">
            <p className=" text-Coolgray"> STEP 3</p>
            <h1 className="font-Ubuntu-Bold">ADD-ONS</h1>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <NavLink
            to={linkList[3]}
            className="border-white border-solid border round flex justify-center items-center w-10 p-2 hover:bg-Lightblue hover:border-none hover:text-black"
            onClick={(e) => {
              fourthFunction(e);
            }}
          >
            4
          </NavLink>
          <div className="hidden md:block">
            <p className=" text-Coolgray">STEP 4</p>
            <h1 className="font-Ubuntu-Bold">SUMMARY</h1>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Hdnumber;
