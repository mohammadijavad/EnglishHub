import React from 'react';
import StudentsComments from '../../../components/SliderStudentComment/SliderStudentComment';

function Students() {
  return (
    <div className="container mx-auto mt-7 ">
      <h1>دانش آموزان انگلیس هاب</h1>
      <div className="w-4/6 mx-auto overflow-hidden">
        <StudentsComments />
      </div>
    </div>
  );
}

export default Students;
