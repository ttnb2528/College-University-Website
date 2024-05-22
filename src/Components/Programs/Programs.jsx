import React from "react";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs max-[650px]:flex-col my-20 mx-auto w-[90%] flex items-center justify-between">
      <div className="program basis-full m-5 sm:basis-[31%] sm:m-0 relative group">
        <img src={program_1} alt="" className="w-full rounded-xl block" />
        <div className="caption absolute rounded-xl top-0 bottom-0 left-0 right-0 bg-[rgba(0,_15,_152,_0.3)] flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-[70%] group-hover:opacity-100 group-hover:pt-0 transition-all duration-300">
          <img src={program_icon_1} alt="" className="w-[60px] mb-3" />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="program basis-full m-5 sm:basis-[31%] sm:m-0 relative group">
        <img src={program_2} alt="" className="w-full rounded-xl block" />
        <div className="caption absolute rounded-xl top-0 bottom-0 left-0 right-0 bg-[rgba(0,_15,_152,_0.3)] flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-[70%] group-hover:opacity-100 group-hover:pt-0 transition-all duration-300">
          <img src={program_icon_2} alt="" className="w-[60px] mb-3" />
          <p>Masters Degree</p>
        </div>
      </div>

      <div className="program basis-full m-5 sm:basis-[31%] sm:m-0 relative group">
        <img src={program_3} alt="" className="w-full rounded-xl block" />
        <div className="caption absolute rounded-xl top-0 bottom-0 left-0 right-0 bg-[rgba(0,_15,_152,_0.3)] flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-[70%] group-hover:opacity-100 group-hover:pt-0 transition-all duration-300">
          <img src={program_icon_3} alt="" className="w-[60px] mb-3" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
