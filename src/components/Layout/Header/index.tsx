import React from 'react';
import Button from '../../cubes/Button';
import Logo from '../../../assets/images/EnglishHub.png';
import { Link } from 'react-router-dom';
function index() {
  return (
    <header className="w-full shadow-sm shadow-gray-200">
      <div className="flex items-center justify-between  w-full container  mx-auto p-2">
        <div className="flex items-center">
          <Button className="mx-2 px-5 p-2 bg-BrightPurple text-white bold border-BrightPurple hover:bg-white hover:text-BrightPurple hover:border-BrightPurple">
            ثبت نام
          </Button>
          <Button className="mx-1 px-7 p-1 flex bold border border-BrightPurple hover:bg-BrightPurple hover:text-white transition">
            ورود
          </Button>
        </div>
        <div>
          <img src={Logo} alt="English Hub" className="w-[100px]" />
          <Link to="/harchi">about</Link>
        </div>
      </div>
    </header>
  );
}

export default index;
