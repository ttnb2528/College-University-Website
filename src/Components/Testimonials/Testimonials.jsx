import React, { useRef } from "react";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testimonials = () => {
  const slider = useRef();

  const slideForward = () => {};

  const slideBackward = () => {};

  return (
    <div className="testimonials my-20 mx-auto py-0 px-20 relative">
      <img
        src={next_icon}
        alt=""
        className="next-btn absolute top-1/2 right-0 -translate-y-1/2 p-4 w-[50px] rounded-full cursor-pointer bg-[#212ea0]"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt=""
        className="back-btn absolute top-1/2 right-auto left-0 -translate-y-1/2 p-4 w-[50px] rounded-full cursor-pointer bg-[#212ea0]"
        onClick={slideBackward}
      />
      <div className="slider overflow-hidden">
        <ul
          className="flex w-[200%] overflow-x-hidden transition-all duration-500"
          ref={slider}
        >
          <li className="w-1/2 p-5">
            <div className="slide p-10 rounded-xl text-[#676767] leading-snug [box-shadow:0_0_20px_rgba(0,_0,_0,_0.05)]">
              <div className="user-info flex items-center mb-5 text-base">
                <img
                  src={user_1}
                  alt=""
                  className="w-[65px] rounded-full mr-3 border-4 border-[#212ea0]"
                />
                <div>
                  <h3 className="text-[#212ea0] font-semibold">
                    William Jackson
                  </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I&lsquo;ve ever made. The supportive community,
                state-og-the-art facilities, and commitment to academic
                excellence have truly transformed my expectations.
              </p>
            </div>
          </li>

          <li className="w-1/2 p-5">
            <div className="slide p-10 rounded-xl text-[#676767] leading-snug [box-shadow:0_0_20px_rgba(0,_0,_0,_0.05)]">
              <div className="user-info flex items-center mb-5 text-base">
                <img
                  src={user_2}
                  alt=""
                  className="w-[65px] rounded-full mr-3 border-4 border-[#212ea0]"
                />
                <div>
                  <h3 className="text-[#212ea0] font-semibold">
                    William Jackson
                  </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I&lsquo;ve ever made. The supportive community,
                state-og-the-art facilities, and commitment to academic
                excellence have truly transformed my expectations.
              </p>
            </div>
          </li>

          <li className="w-1/2 p-5">
            <div className="slide p-10 rounded-xl text-[#676767] leading-snug [box-shadow:0_0_20px_rgba(0,_0,_0,_0.05)]">
              <div className="user-info flex items-center mb-5 text-base">
                <img
                  src={user_3}
                  alt=""
                  className="w-[65px] rounded-full mr-3 border-4 border-[#212ea0]"
                />
                <div>
                  <h3 className="text-[#212ea0] font-semibold">
                    William Jackson
                  </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I&lsquo;ve ever made. The supportive community,
                state-og-the-art facilities, and commitment to academic
                excellence have truly transformed my expectations.
              </p>
            </div>
          </li>

          <li className="w-1/2 p-5">
            <div className="slide p-10 rounded-xl text-[#676767] leading-snug [box-shadow:0_0_20px_rgba(0,_0,_0,_0.05)]">
              <div className="user-info flex items-center mb-5 text-base">
                <img
                  src={user_4}
                  alt=""
                  className="w-[65px] rounded-full mr-3 border-4 border-[#212ea0]"
                />
                <div>
                  <h3 className="text-[#212ea0] font-semibold">
                    William Jackson
                  </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I&lsquo;ve ever made. The supportive community,
                state-og-the-art facilities, and commitment to academic
                excellence have truly transformed my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;