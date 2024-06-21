import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface FinishingProps {
  changeNavLink: any;
}
const Finishing: React.FC<FinishingProps> = ({ changeNavLink }) => {
  const [selectedSelection, setselectedSelection] = useState(() => {
    const previousSelection = localStorage.getItem("selectedFocus");
    if (previousSelection) {
      return JSON.parse(previousSelection);
    } else {
      return ["Select a plan below", []];
    }
  });
  const [selectedAddon, setselectedAddon] = useState(() => {
    const localdata = localStorage.getItem("focusArray");
    if (localdata) {
      return JSON.parse(localdata);
    } else {
      return [];
    }
  });
  const [timeframeSet, settimeframeSet] = useState(() => {
    const timeSet = localStorage.getItem("handlePosition");
    if (timeSet) {
      const setter = localStorage.getItem("handlePosition");
      if (setter === "justify-start") {
        return "Monthly";
      } else {
        return "Yearly";
      }
    }
  });
  const [timePeriod, settimePeriod] = useState("");
  const [perTime, setperTime] = useState("");
  const [result, setresult] = useState(0);
  useEffect(() => {
    let intialSum = result + parseInt(selectedSelection[1][1]);
    console.log(intialSum);
    selectedAddon.forEach((item: string[][]) => {
      console.log(item[1][2]);
      intialSum = intialSum + parseInt(item[1][2]);
    });
    console.log(intialSum);
    if (intialSum) {
      setresult(intialSum);
    } else {
      setresult(0);
    }

    if (timeframeSet === "Monthly") {
      settimePeriod("mo");
      setperTime("month");
    } else {
      settimePeriod("yr");
      setperTime("year");
    }
  }, []);

  return (
    <div>
      <div className="  bg-Magnolia py-6 px-3 rounded-md">
        <div className="flex justify-between items-center border-b-2 pb-3 mb-2">
          <div>
            <h1 className="font-Ubuntu-Bold">
              {selectedSelection[0]} (<span>{timeframeSet}</span>)
            </h1>
            <NavLink
              to="/Selection"
              onClick={changeNavLink}
              className="font-Ubuntu-Regular text-Coolgray underline"
            >
              Change
            </NavLink>
          </div>

          <p className="font-Ubuntu-Bold">{selectedSelection[1]}</p>
        </div>
        <div>
          {selectedAddon.map(
            (
              item: (
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined
              )[],
              index: React.Key | null | undefined
            ) => (
              <div key={index} className="flex justify-between py-1">
                <p className=" text-Coolgray font-Ubuntu-Medium"> {item[0]}</p>
                <p className=" font-Ubuntu-Medium">{item[1]}</p>
              </div>
            )
          )}
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <p className=" text-Coolgray font-Ubuntu-Medium">{`Total (per ${perTime})`}</p>
        <p className=" text-Purplishblue font-Ubuntu-Bold">{`+$${result}/${timePeriod}`}</p>
      </div>
    </div>
  );
};

export default Finishing;
