import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hdnumber from "./Hdnumber";
import Footer from "./footer";
import Personalinfo from "./personalinfo";
import Selection from "./Selection";
import Title_des from "./Title_des";
import checkmark from "./assets/images/icon-checkmark.svg";
import mobileHeaderImage from "./assets/images/bg-sidebar-mobile.svg";
import AddOns from "./AddOns";
import Finishing from "./Finishing";
import Final from "./final";
import desktopImage from "./assets/images/bg-sidebar-desktop.svg";

function App() {
  localStorage.clear;
  const [count, setCount] = useState(0);
  const linkList = ["./", "/Selection", "/AddOns", "/Finishing", "/Final"];
  const [nextLink, setnextLink] = useState(1);
  /*  useEffect(() => {
    const telePhoneNumber: any = document.querySelector("#telephone");
    console.log(telePhoneNumber);
    if (telePhoneNumber!.value === "" || telePhoneNumber!.value === null) {
      const errMessage = document.querySelector(".errMessage");
      errMessage?.classList.remove("hidden");
      setnextLink(0);
      console.log(nextLink);
    } else {
      setnextLink(1);
    }
  }); */
  const [AddonPrices, setAddonPrices] = useState({});

  const AddonPriceDeterminer = () => {
    const changeDeterminer = document.querySelector(".button");
    if (changeDeterminer?.classList.contains("justify-start")) {
      setAddonPrices({
        online: "+$1/mo",
        storage: "+$2/mo",
        profile: "+$2/mo",
      });
    } else {
      setAddonPrices({
        online: "+$10/yr",
        storage: "+$20/yr",
        profile: "+$20/yr",
      });
    }
  };
  const linkFunction = (event: { preventDefault: () => void }) => {
    const telePhoneNumber: any = document.querySelector("#telephone");

    if (nextLink === 1 && telePhoneNumber.value.length === 0) {
      const errMessage = document.querySelector(".errMessage");
      errMessage?.classList.remove("hidden");
      event?.preventDefault();
      setnextLink(1);
      /* console.log("hello"); */
    } else {
      setnextLink(nextLink + 1);
      /*  console.log("Hi"); */
      previousFunction();
      AddonPriceDeterminer();
      console.log(nextLink);
      const nextButton = document.querySelector(".nextbutton");
      if (nextLink === 3) {
        if (nextButton?.innerHTML) {
          nextButton.innerHTML = "Confirm";
        }
      } else {
        if (nextButton?.innerHTML) {
          nextButton.innerHTML = "Next Step";
        }
      }
    }
    /* if (nextLink === 1) {
      
    }  */
  };
  const previousFunction = () => {
    const previous = document.querySelector(".previous");
    if (nextLink >= 1) {
      previous?.classList.remove("invisible");
    } else {
      previous?.classList.add("invisible");
    }
    if (nextLink >= 4) {
      const footer = document.querySelector(".footer");
      footer?.classList.add("hidden");
    }
  };
  const previousPage = (e: { preventDefault: () => void }) => {
    console.log(nextLink);
    const nextButton = document.querySelector(".nextbutton");
    if (nextLink <= 4) {
      if (nextButton?.innerHTML) {
        nextButton.innerHTML = "Next Step";
      }
    } else {
      if (nextButton?.innerHTML) {
        nextButton.innerHTML = "Confirm";
      }
    }
    setnextLink((prev) => prev - 1);
  };
  const changeNextlink = () => {
    setnextLink(2);
  };
  return (
    <BrowserRouter>
      <div className="App flex justify-center md:items-center ">
        <div className=" Try md:mx-4 md:bg-white ">
          {" "}
          {/* md:w-11/12 */}
          {/*  md:pb-3  lg:pt-3 xl: md:px-4 */}
          <div className="relative Images-section ">
            <img src={mobileHeaderImage} alt="" className="md:hidden" />
            <img src={desktopImage} alt="" className="hidden md:inline" />
            {/* <div className=" bg-blue-600 py-20 w-full  cover"></div> */}
            <div className=" absolute top-8 left-1/2 -translate-x-1/2">
              <Hdnumber
                firstFunction={(e: { preventDefault: () => void }) => {
                  console.log(nextLink);
                  if (nextLink >= 3) {
                    e.preventDefault();
                  } else {
                    setnextLink(1);
                    const previous = document.querySelector(".previous");
                    previous?.classList.add("invisible");
                  }
                }}
                secondFunction={(e: { preventDefault: () => void }) => {
                  console.log(nextLink);
                  if (nextLink >= 3) {
                    e.preventDefault();
                  } else {
                    setnextLink(2);
                    previousFunction();
                  }
                }}
                thirdFunction={(e: { preventDefault: () => void }) => {
                  console.log(nextLink);
                  if (nextLink >= 4) {
                    console.log("hi");
                    e.preventDefault();
                  } else {
                    AddonPriceDeterminer();
                    setnextLink(3);
                    previousFunction();
                  }
                }}
                fourthFunction={(e: { preventDefault: () => void }) => {
                  console.log(nextLink);
                  if (nextLink >= 3) {
                    e.preventDefault();
                  } else {
                    console.log(nextLink);
                    setnextLink(4);
                    previousFunction();
                  }
                }}
              />
            </div>
          </div>
          <div className="relative text-section md:bg-white">
            <div className="main box  py-56 md:py-0 lg:pr-0 px-6 md:bg-white  text-lg">
              <div className=" rounded-md absolute  md:static -top-12 left-1/2 transform -translate-x-1/2 md:transform-none md:translate-x-0 md:top-0 md-left-0 px-6 bg-white w-11/12 lg:w-full pb-8 md:pb-0 pt-2">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Title_des
                          title="Personal info"
                          dsc="Please provide your name, email address and phone number"
                        />
                        <Personalinfo />
                      </>
                    }
                  ></Route>
                  <Route
                    path="/Selection"
                    element={
                      <>
                        <Title_des
                          title="Select Your Plan"
                          dsc="You have the option of monthly or yearly billing"
                        />
                        <Selection />
                      </>
                    }
                  ></Route>
                  <Route
                    path="/AddOns"
                    element={
                      <>
                        <Title_des
                          title="Pick add-ons"
                          dsc="Add-ons help your gaining experience"
                        />
                        <AddOns Addon={AddonPrices} />
                      </>
                    }
                  ></Route>
                  <Route
                    path="/Finishing"
                    element={
                      <>
                        <Title_des
                          title="Finishing up"
                          dsc="Double-check everything looks OK before confirming"
                        />
                        <Finishing changeNavLink={changeNextlink} />
                      </>
                    }
                  ></Route>
                  <Route
                    path="/Final"
                    element={
                      <>
                        <Final />
                      </>
                    }
                  ></Route>
                </Routes>
              </div>
            </div>
            <div className=" footer">
              <Footer
                nextLink={linkList[nextLink]}
                previousPage={previousPage}
                previousLink={linkList[nextLink - 2]}
                linkFunction={(event: any) => {
                  linkFunction(event);
                }}
              />
            </div>

            <div>
              <img src={checkmark} alt="" />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
