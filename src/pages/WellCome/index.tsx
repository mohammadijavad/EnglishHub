import React from "react";
import Landing from "../../components/Layout/Landing";
import Button from "../../components/cubes/Button";
import CoverSection from "../../assets/images/welcome/first cover section .jpg";
import justKeep from "../../assets/images/welcome/justKeep.png";
import chat from "../../assets/images/welcome/Chat.png";
import WhyEnglishHub from "./WhyEnglishHub";
import Students from "./OurStudents/Students";

function Welcome() {
  return (
    <Landing>
      {/* first section intro English hub*/}
      <div className="h-screen w-full  container mx-auto flex items-center justify-evenly md:justify-between relative flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:h-full flex items-center justify-center flex-col">
          <h1 className="text-xl md:text-3xl text-center leading-10">
            <p className="text-BrightPurple mb-2 bold">انگلیس هاب </p>
            {/* <br  /> */}
            پلتفرم آنلاین و کاملا
            <span className="text-BrightPurple bold pb-2">
              {"   "} رایگان {"   "}
            </span>
            <span>برای یادگیری زبان انگلیسی</span>
          </h1>
          <Button className="mt-6 bg-BrightPurple rounded text-white shadow-none">
            شروع یادگیری
          </Button>
        </div>
        <div className="w-3/4 md:w-1/2  md:h-full flex items-center justify-center ">
          <img
            className=" w-5/6 md:w-3/4"
            src={CoverSection}
            alt="English learning Girl"
          />
        </div>
        <div className=" hidden md:block absolute  md:top-[55%] ">
          <img
            src={justKeep}
            alt="just keep going"
            className="w-3/12 opacity-50 transform -rotate-45"
          />
        </div>
        <div className="hidden md:block absolute  md:top-[10%] lg:top-[5%] xl:top-[20%]  md:left-[-50%] xl:left-[-20%] ">
          <img
            src={chat}
            alt="just keep going"
            className="w-3/12 opacity-50 transform -rotate-45"
          />
        </div>
      </div>
      {/* second section why choice English Hub */}
      <WhyEnglishHub />
      {/*section three students */}
      <Students/>
    </Landing>
  );
}

export default Welcome;
