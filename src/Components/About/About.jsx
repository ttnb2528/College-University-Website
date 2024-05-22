import React from "react";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about max-[800px]:flex-col my-[100px] mx-auto flex items-center justify-between w-[90%]">
      <div className="about-left max-[800px]:basis-full max-[800px]:m-5 max-[800px]:order-2 min-[800px]:basis-2/5 min-[800px]:m-0 relative">
        <img src={about_img} alt="" className="w-full rounded-xl" />
        <img
          src={play_icon}
          alt=""
          className="w-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"
        />
      </div>
      <div className="about-right max-[800px]:basis-full min-[800px]:basis-[56%]">
        <h3 className="font-semibold text-base text-[#212ea0]">
          ABOUT UNIVERSITY
        </h3>
        <h2 className="text-4xl text-[#000f38] my-3 mx-0 max-w-[400px]">
          Nurturing Tomorrow&lsquo;s Leaders Today
        </h2>
        <p className="text-[#676767] mb-4">
          Embark on a transformative educational journey with our
          university&lsquo;s comprehensive education programs. Our cutting-edge
          curriculum is designed to empower students with the knowledge, skills,
          and experiences needed to excel in the dynamic field of education.
        </p>
        <p className="text-[#676767] mb-4">
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p className="text-[#676767] mb-4">
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
