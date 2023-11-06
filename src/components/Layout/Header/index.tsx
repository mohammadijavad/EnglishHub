import React from "react";
import Button from "../../cubes/Button";
import Logo from "../../../assets/images/EnglishHub.png";
function index() {
  return (
    <header className="w-full shadow-sm shadow-gray-200">
      <div className="flex items-center justify-between  w-full max-w-7xl mx-auto p-2">
        <div className="flex items-center">
          <Button className="mx-2 px-5 p-2 bg-[#e60af3] text-white bold border-[#e60af3] hover:bg-white hover:text-[#e60af3] hover:border-[#e60af3]">
            ثبت نام
          </Button>
          <Button className="mx-1 px-7 p-1 flex bold border border-[#e60af3] hover:bg-[#e60af3] hover:text-white transition">
            ورود
          </Button>
        </div>
        <div>
          <img src={Logo} alt="English Hub" className="w-[100px]" />
        </div>
      </div>
    </header>
  );
}

export default index;
