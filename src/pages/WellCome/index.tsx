import React from 'react';
import Landing from '../../components/Layout/Landing';
import Button from '../../components/cubes/Button';
import CoverSection from '../../assets/images/welcome/first cover section .jpg';
import justKeep from '../../assets/images/welcome/justKeep.png';
import chat from '../../assets/images/welcome/Chat.png';
import sample from '../../assets/images/welcome/first cover section .jpg';
function Welcome() {
  return (
    <Landing>
      {/* first section */}
      <div className="h-screen w-full  container mx-auto flex items-center justify-evenly md:justify-between relative flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:h-full flex items-center justify-center flex-col">
          <h1 className="text-xl md:text-3xl text-center leading-10">
            <p className="text-BrightPurple mb-2 bold">انگلیس هاب </p>
            {/* <br  /> */}
            پلتفرم آنلاین و کاملا
            <span className="text-BrightPurple bold pb-2">
              {'   '} رایگان {'   '}
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
        <div className="hidden md:block absolute  md:top-[10%] lg:top-[5%]  md:left-[-50%] xl:left-[-40%] ">
          <img
            src={chat}
            alt="just keep going"
            className="w-3/12 opacity-50 transform -rotate-45"
          />
        </div>
      </div>
      {/* second section */}
      <div className="h-screen w-full container mx-auto mt-4 md:mt-0">
        <div className="flex justify-center ">
          <p className="p-3 rounded px-6 bold text-black bg-gray-400">
            چرا انگلیس هاب
          </p>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-4 mt-8 ">
          <div className=" p-2 flex flex-col justify-center items-center">
            <p>پادکست های متنوع</p>
            <p className="text-sm mt-2">
              کلی پادکست های کوتاه برای سطح های مختلف
            </p>
            <div className="w-full flex justify-center mt-2">
              <img src={sample} alt="listen podcast" className="w-1/2" />
            </div>
          </div>
          <div className=" p-2 flex flex-col justify-center items-center">
            <p>تعیین سطح رایگان و استاندارد</p>
            <p className="text-sm mt-2">
              کلی پادکست های کوتاه برای سطح های مختلف
            </p>
            <div className="w-full flex justify-center mt-2">
              <img src={sample} alt="listen podcast" className="w-1/2" />
            </div>
          </div>
          <div className=" p-2 flex flex-col justify-center items-center">
            <p>تماشای ویدیو و آزمون</p>
            <p className="text-sm mt-2">
              کلی پادکست های کوتاه برای سطح های مختلف
            </p>
            <div className="w-full flex justify-center mt-2">
              <img src={sample} alt="listen podcast" className="w-1/2" />
            </div>
          </div>
          <div className=" p-2 flex flex-col justify-center items-center">
            <p>مسابقه با هم سطح ها</p>
            <p className="text-sm mt-2">
              کلی پادکست های کوتاه برای سطح های مختلف
            </p>
            <div className="w-full flex justify-center mt-2">
              <img src={sample} alt="listen podcast" className="w-1/2" />
            </div>
          </div>
          <div className=" p-2 flex flex-col justify-center items-center">
            <p>مترجم و بخش یادگیری لغات</p>
            <p className="text-sm mt-2">
              کلی پادکست های کوتاه برای سطح های مختلف
            </p>
            <div className="w-full flex justify-center mt-2">
              <img src={sample} alt="listen podcast" className="w-1/2" />
            </div>
          </div>
          <div className=" p-2 flex flex-col justify-center items-center">
            <p> جعبه لاینتر</p>
            <p className="text-sm mt-2">
              کلی پادکست های کوتاه برای سطح های مختلف
            </p>
            <div className="w-full flex justify-center mt-2">
              <img src={sample} alt="listen podcast" className="w-1/2" />
            </div>
          </div>
          <div className=" p-2 flex flex-col justify-center items-center">
            <p>محاسبه سرعت رشد وداشبورد اختصاصی</p>
            <p className="text-sm mt-2">
              کلی پادکست های کوتاه برای سطح های مختلف
            </p>
            <div className="w-full flex justify-center mt-2">
              <img src={sample} alt="listen podcast" className="w-1/2" />
            </div>
          </div>
          <div className=" p-2 flex flex-col justify-center items-center">
            <p>هوش مصنوعی </p>
            <p className="text-sm mt-2">
              کلی پادکست های کوتاه برای سطح های مختلف
            </p>
            <div className="w-full flex justify-center mt-2">
              <img src={sample} alt="listen podcast" className="w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </Landing>
  );
}

export default Welcome;
