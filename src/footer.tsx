import React from "react";
import { NavLink } from "react-router-dom";
/* import Selection from "./Selection"; */

interface FooterProps {
  nextLink: any;
  linkFunction: any;
  previousPage: any;
  previousLink: any;
}

const footer: React.FC<FooterProps> = ({
  nextLink,
  linkFunction,
  previousPage,
  previousLink,
}) => {
  const linkList = ["./Selection", "./AddOns", "./Finishing"];

  return (
    <div className="footer bg-white py-4 flex justify-between items-center mt-8 pr-4">
      <div className="pl-5 text-xl text-Coolgray previous invisible">
        <NavLink
          to={previousLink}
          onClick={(e) => {
            previousPage(e);
          }}
        >
          Go back
        </NavLink>
      </div>
      <div className=" font-Ubuntu-Medium bg-Marineblue flex justify-center text-xl w-32 py-4 px-2 mr-1 rounded-md text-white">
        <NavLink
          className="nextbutton"
          to={nextLink}
          onClick={(e) => {
            linkFunction(e);
          }}
        >
          Next Step
        </NavLink>
      </div>
    </div>
  );
};

export default footer;
