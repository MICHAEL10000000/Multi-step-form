import React from "react";
import checkmark from "./assets/images/icon-thank-you.svg";

const final = () => {
  return (
    <div className="py-10 text-center">
      <div>
        <div className="flex justify-center mb-6 mt-12">
          <img src={checkmark} alt="" className="w-16" />
        </div>

        <h1 className=" font-Ubuntu-Bold text-3xl">Thank you!</h1>
        <p className=" font-Ubuntu-Medium text-Coolgray">
          Thanks for confirming your subscribption!
        </p>
        <p className=" font-Ubuntu-Medium text-Coolgray">
          We hope you have fun using our
        </p>
        <p
          className=" font-Ubuntu-Medium text-Coolgray "
          style={{ width: "40ch" }}
        >
          platform. If you ever need support, please feel free to email us at
          support@loremgaming.com
        </p>
      </div>
    </div>
  );
};

export default final;
