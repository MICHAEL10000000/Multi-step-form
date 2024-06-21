import React, { useEffect } from "react";
import { useState } from "react";

const AddOns = ({ Addon }) => {
  const focushandler = (event: { target: any }) => {
    let EventTarget = event.target;
    if (EventTarget.classList) {
      let classes = EventTarget.classList;
      classes.toggle("focusAddon");
      console.log(classes);
      console.log(event);
    }
  };
  const [focusDeterminer, setfocusDeterminer] = useState(() => {});
  const Checkfocushandler = (event: { classList: any }) => {
    if (event.classList) {
      let classes = event.classList;
      classes.toggle("focusAddon");
      console.log(classes);
      console.log(event);
      const focusAddonsArray = document.querySelectorAll(".focusAddon");
      const focusArrayData: (string | null | undefined)[][] = [];
      focusAddonsArray.forEach((item) => {
        let focusArray = [
          item.children[1].firstChild?.textContent,
          item.lastChild?.textContent,
        ];
        focusArrayData.push(focusArray);
        console.log(focusArray);
      });
      console.log(focusArrayData);
      localStorage.setItem("focusArray", JSON.stringify(focusArrayData));
      /* localStorage.removeItem("focusArray"); */
    }
  };
  useEffect(() => {
    const localdata = localStorage.getItem("focusArray");
    if (localdata) {
      const localdataArray = JSON.parse(localdata);
      console.log(localdataArray);
      localdataArray.forEach((item: string[]) => {
        const AddonMain = document.querySelector(".AddonMain");
        console.log(item);
        const checkboxes = document.querySelectorAll("#checkbox");
        if (item[0] === "Online service") {
          AddonMain?.children[0].classList.add("focusAddon");
          checkboxes[0].checked = true;
          /* AddonMain?.children[0].firstChild.checked = true; */
        }
        if (item[0] === "Larger storage") {
          AddonMain?.children[1].classList.add("focusAddon");
          checkboxes[1].checked = true;
        }
        if (item[0] === "Customizable profile") {
          AddonMain?.children[2].classList.add("focusAddon");
          checkboxes[2].checked = true;
        }
      });
    }
  });
  ``;

  return (
    <div className="flex flex-col gap-4 AddonMain">
      <div className="flex items-center justify-center rounded-md border border-solid  py-4 px-8">
        <input
          type="checkbox"
          name="Check"
          id="checkbox"
          className=" size-4 md:mr-4"
          onClick={(event) => {
            Checkfocushandler(event.target.parentNode);
          }}
        />
        <div className="md:mr-4 ">
          <h3 className=" font-Ubuntu-Bold text-base">Online service</h3>
          <p className=" font-Ubuntu-Medium text-nowrap text-sm text-Coolgray">
            Access to multiplayer games
          </p>
        </div>
        <p className=" text-Purplishblue text-sm font-Ubuntu-Regular">
          {Addon.online}
        </p>
      </div>
      <div className="flex items-center justify-center rounded-md border border-solid  py-4 px-8 pl-6">
        <input
          type="checkbox"
          name="Check"
          id="checkbox"
          className=" size-4 md:mr-4"
          onClick={(event) => {
            Checkfocushandler(event.target.parentNode);
          }}
        />
        <div className="md:mr-4 ">
          <h3 className=" font-Ubuntu-Bold text-base">Larger storage</h3>
          <p className=" font-Ubuntu-Medium text-nowrap text-sm text-Coolgray">
            Extra 1TB of cloud save
          </p>
        </div>
        <p className=" text-Purplishblue text-sm font-Ubuntu-Regular ml-7">
          {Addon.storage}
        </p>
      </div>
      <div className="flex items-center justify-center rounded-md border border-solid  py-4 px-8">
        <input
          type="checkbox"
          name="Check"
          id="checkbox"
          className=" size-4 md:mr-4"
          onClick={(event) => {
            Checkfocushandler(event.target.parentNode);
          }}
        />
        <div className="md:mr-4 ">
          <h3 className="font-Ubuntu-Bold text-base">Customizable profile</h3>
          <p className=" font-Ubuntu-Medium text-nowrap text-sm text-Coolgray">
            custom theme on your profile
          </p>
        </div>
        <p className=" text-Purplishblue text-sm font-Ubuntu-Regular">
          {Addon.profile}
        </p>
      </div>
    </div>
  );
};

export default AddOns;
