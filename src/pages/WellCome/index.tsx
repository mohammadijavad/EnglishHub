import React from "react";
import Landing from "../../components/Layout/Landing";
import Button from "../../components/cubes/Button";

function Welcome() {
  return (
    <Landing>
      <div className="h-[400px] w-full border container mx-auto flex items-center justify-between">
        <div className="w-1/2 h-full flex items-center justify-center flex-col">
          <h1 className="text-3xl text-center ">
            <p className="text-BrightPurple mb-1 bold">انگلیس هاب </p>
            <br/>
            پلتفرم آنلاین و کاملا
            <span className="text-BrightPurple bold">
              {"   "} رایگان {"   "}
            </span>
            برای یادگیری زبان انگلیسی
          </h1>
          <Button className="mt-6 bg-BrightPurple rounded text-white shadow-none">شروع یادگیری</Button>
        </div>
        <div className="w-1/2 border h-full">img</div>
      </div>
    </Landing>
  );
}

export default Welcome;
