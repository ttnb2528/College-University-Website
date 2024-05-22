import React from "react";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus mx-auto my-20 w-[90%] text-center">
      <div className="gallery max-[800px]:flex-wrap flex items-center justify-between mb-10">
        <img src={gallery_1} alt="" className="max-[800px]:w-[48%] max-[800px]:mb-6 w-[23%] rounded-xl" />
        <img src={gallery_2} alt="" className="max-[800px]:w-[48%] max-[800px]:mb-6 w-[23%] rounded-xl" />
        <img src={gallery_3} alt="" className="max-[800px]:w-[48%] max-[800px]:mb-6 w-[23%] rounded-xl" />
        <img src={gallery_4} alt="" className="max-[800px]:w-[48%] max-[800px]:mb-6 w-[23%] rounded-xl" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="" className="w-5 ml-3" />
      </button>
    </div>
  );
};

export default Campus;
