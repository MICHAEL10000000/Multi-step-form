import React, { useEffect, useState } from "react";
import Arcade from "./assets/images/icon-arcade.svg";
import Advance from "./assets/images/icon-advanced.svg";
import pro from "./assets/images/icon-pro.svg";
import checkmark from "./assets/images/icon-checkmark.svg";
const Selection = () => {
  localStorage.clear;
  const Monthly = ["$9/mo", "$12/mo", "$15/mo"];
  const Yearly = ["$90/yr", "$120/yr", "$150/yr"];

  const [timeframe, settimeframe] = useState(() => {
    const localdata = localStorage.getItem("timesetter");
    if (localdata) {
      return JSON.parse(localdata);
    } else {
      return Monthly;
    }
  });
  useEffect(() => {
    const localdata = localStorage.getItem("timesetter");

    if (localdata) {
      console.log(JSON.parse(localdata));
    }
    const changeDeterminer = document.querySelector(".button");
    const handleChanger = localStorage.getItem("handlePosition");
    if (handleChanger) {
      changeDeterminer?.classList.add(handleChanger);
    } else {
      changeDeterminer?.classList.add("justify-start");
    }

    const selectedFocus = localStorage.getItem("selectedFocus");
    if (selectedFocus) {
      const selectedFocusList = JSON.parse(selectedFocus);
      if (selectedFocusList[0] === "Pro") {
        const options = document.querySelectorAll(".option");
        options[2].classList.add("selectedFocus");
      }
    }
  }, []);

  const changeshandler = () => {
    const changeDeterminer = document.querySelector(".button");
    const timeDeterminer = document.querySelectorAll(".timedeterminer");

    changeDeterminer?.classList.toggle("justify-start");
    changeDeterminer?.classList.toggle("justify-end");

    if (changeDeterminer?.classList.contains("justify-start")) {
      localStorage.setItem("handlePosition", "justify-start");
      localStorage.setItem("timesetter", JSON.stringify(Monthly));
      settimeframe(() => {
        const localdata = localStorage.getItem("timesetter");
        if (localdata) {
          return JSON.parse(localdata);
        }
      });
    } else if (changeDeterminer?.classList.contains("justify-end")) {
      localStorage.setItem("handlePosition", "justify-end");
      localStorage.setItem("timesetter", JSON.stringify(Yearly));
      settimeframe(() => {
        const localdata = localStorage.getItem("timesetter");
        if (localdata) {
          return JSON.parse(localdata);
        }
      });
    }
    timeDeterminer[0].classList.add;
    timeDeterminer.forEach((item) => {
      item.classList.toggle("text-Coolgray");
      item.classList.toggle("text-Marineblue");
    });
  };
  useEffect(() => {
    const timeDeterminer = document.querySelectorAll(".timedeterminer");
    const changeDeterminer = document.querySelector(".button");
    if (changeDeterminer?.classList.contains("justify-start")) {
      timeDeterminer[0].classList.remove("text-Coolgray");
      timeDeterminer[0].classList.add("text-Marineblue");
      timeDeterminer[1].classList.remove("text-Marineblue");
      timeDeterminer[1].classList.add("text-Coolgray");
    } else {
      timeDeterminer[0].classList.add("text-Coolgray");
      timeDeterminer[0].classList.remove("text-Marineblue");
      timeDeterminer[1].classList.add("text-Marineblue");
      timeDeterminer[1].classList.remove("text-Coolgray");
    }
  });
  const SelectedFocus = () => {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((item) => {
          item.classList.remove("selectedFocus");
        });
        option.classList.add("selectedFocus");
        let selectedArray = [
          option.lastChild?.firstChild?.textContent,
          option.lastChild?.lastChild?.textContent,
        ];
        console.log(selectedArray);
        localStorage.setItem("selectedFocus", JSON.stringify(selectedArray));
      });
    });
  };

  return (
    <div className="">
      <div className="md:flex items-center md:justify-between lg:gap-4 lg:mt-14">
        <div
          className="option flex md:flex-col md:items-start gap-4 items-center border-solid border-Coolgray border pl-4 rounded-lg py-4 md:pr-11 lg:py-8 "
          onClick={SelectedFocus}
        >
          <img src={Arcade} alt="" />
          <div>
            <h2 className="font-Ubuntu-Bold">Arcade</h2>
            <p className="font-Ubuntu-Medium text-Coolgray">{timeframe[0]}</p>
          </div>
        </div>
        <div
          onClick={SelectedFocus}
          className="lg:py-8 option flex  md:flex-col md:mt-0 md:items-start  gap-4 items-center border-solid border-Coolgray border pl-4 rounded-lg py-4 mt-4 md:pr-10"
        >
          <img src={Advance} alt="" />
          <div>
            <h2 className="font-Ubuntu-Bold">Advance</h2>
            <p className="font-Ubuntu-Medium text-Coolgray">{timeframe[1]}</p>
          </div>
        </div>
        <div
          onClick={SelectedFocus}
          className="lg:py-8 option flex  md:mt-0  md:flex-col md:items-start gap-4 items-center border-solid border-Coolgray border pl-4 rounded-lg py-4 mt-4 md:pr-10"
        >
          <img src={pro} alt="" />
          <div>
            <h2 className="font-Ubuntu-Bold">Pro</h2>
            <p className="font-Ubuntu-Medium text-Coolgray">{timeframe[2]}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4 lg:mt-14 font-Ubuntu-Bold text-base justify-center items-center py-3 rounded-md bg-purple-50 ">
        <h4 className="timedeterminer ">Monthly</h4>
        <div
          className="rounded-full bg-Marineblue py-1 w-1/4 pl-1 flex  pr-1 button"
          onClick={changeshandler}
        >
          <div className="bg-white rounded-full py-3 w-6"></div>
        </div>
        <h4 className="timedeterminer text-Coolgray">Yearly</h4>
      </div>
    </div>
  );
};

export default Selection;
