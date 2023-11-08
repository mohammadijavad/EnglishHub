import React from 'react';

import podcast from '../../assets/images/welcome/why EnglishHub/Podcast audience-pana.png';
import englishTest from '../../assets/images/welcome/why EnglishHub/Online test1.png';
import onlineVedio from '../../assets/images/welcome/why EnglishHub/Video tutorial-amico.png';
import Competition from '../../assets/images/welcome/why EnglishHub/Winners-cuate.png';
import onlineTranslate from '../../assets/images/welcome/why EnglishHub/Translator-rafiki.png';
import linterBox from '../../assets/images/welcome/why EnglishHub/Book lover-amico.png';
import progress from '../../assets/images/welcome/why EnglishHub/Progress 1.png';
import ai from '../../assets/images/welcome/why EnglishHub/Voice assistant-2.png';
function WhyEnglishHub() {
  return (
    <div className=" h-auto  w-full container mx-auto mt-4 md:mt-0 border">
      <div className="flex justify-center ">
        <p className="p-3 rounded px-7 bold text-black bg-slate-200 mb-5">
          چرا انگلیس هاب
        </p>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-4 mt-8 ">
        <div className=" p-2 flex flex-col justify-center items-center">
          <p className="bold">پادکست های متنوع</p>
          <p className="text-sm mt-3 text-slate-600">
            کلی پادکست های کوتاه برای سطح های مختلف
          </p>
          <div className="w-full flex justify-center mt-2">
            <img
              src={podcast}
              alt="listen podcast"
              className="w-1/2 xl:w-2/4"
            />
          </div>
        </div>
        <div className=" p-2 flex flex-col justify-center items-center">
          <p className="bold">تعیین سطح رایگان و استاندارد</p>
          <p className="text-sm mt-3 text-slate-600">
            تعیین سطح استاندارد برای شروع یادگیری
          </p>
          <div className="w-full flex justify-center mt-2">
            <img
              src={englishTest}
              alt="listen podcast"
              className="w-1/2 xl:w-2/4"
            />
          </div>
        </div>
        <div className=" p-2 flex flex-col justify-center items-center">
          <p className="bold">تماشای ویدیو و آزمون</p>
          <p className="text-sm mt-3 text-slate-600">
            کلی ویدیو با زیرنویس به همراه سوال برای سطح های مختلف
          </p>
          <div className="w-full flex justify-center mt-2">
            <img
              src={onlineVedio}
              alt="listen podcast"
              className="w-1/2 xl:w-2/4"
            />
          </div>
        </div>
        <div className=" p-2 flex flex-col justify-center items-center">
          <p className="bold">مسابقه با هم سطح ها</p>
          <p className="text-sm mt-3 text-slate-600">
            مسابقات و چالش برای ایجاد رقابت دوستانه
          </p>
          <div className="w-full flex justify-center mt-2">
            <img
              src={Competition}
              alt="listen podcast"
              className="w-1/2 xl:w-2/4"
            />
          </div>
        </div>
        <div className=" p-2 flex flex-col justify-center items-center">
          <p className="bold">مترجم و بخش یادگیری لغات</p>
          <p className="text-sm mt-3 text-slate-600">
            مترجم و دیکشنری لغات به همراه تلفظ و استفاده کاربردی لغات
          </p>
          <div className="w-full flex justify-center mt-2">
            <img
              src={onlineTranslate}
              alt="listen podcast"
              className="w-1/2 xl:w-2/4"
            />
          </div>
        </div>
        <div className=" p-2 flex flex-col justify-center items-center">
          <p className="bold"> جعبه لاینتر</p>
          <p className="text-sm mt-3 text-slate-600">
            نگران فراموشی لغات نباش ما بهت یادآوری میکنیم
          </p>
          <div className="w-full flex justify-center mt-2">
            <img
              src={linterBox}
              alt="listen podcast"
              className="w-1/2 xl:w-2/4"
            />
          </div>
        </div>
        <div className=" p-2 flex flex-col justify-center items-center">
          <p className="bold ">محاسبه سرعت رشد وداشبورد اختصاصی</p>
          <p className="text-sm mt-3 text-slate-600">
            سرعت یادگیری خودتو به همراه نقاط ضعف و قدرت نشون میدیم
          </p>
          <div className="w-full flex justify-center mt-2">
            <img
              src={progress}
              alt="listen podcast"
              className="w-1/2 xl:w-2/4"
            />
          </div>
        </div>
        <div className=" p-2 flex flex-col justify-center items-center">
          <p className="bold ">هوش مصنوعی </p>
          <p className="text-sm mt-3 text-slate-600">
            یک دستیار هوشمند داری میتونی سوالات خودتو بپرسی
          </p>
          <div className="w-full flex justify-center mt-2">
            <img src={ai} alt="listen podcast" className="w-1/2 xl:w-2/4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyEnglishHub;
