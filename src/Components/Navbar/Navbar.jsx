import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`px-[10%] w-full text-white fixed top-0 left-0 flex items-center justify-between z-10 ${sticky ? "bg-[#212ea0] duration-500 transition-all" : ""}`}>
      <img src={logo} alt="" className="w-[180px]" />
      <ul className="text-base">
        <li className="inline-block my-1.5 mx-5">Home</li>
        <li className="inline-block my-1.5 mx-5">Program</li>
        <li className="inline-block my-1.5 mx-5">About us</li>
        <li className="inline-block my-1.5 mx-5">Campus</li>
        <li className="inline-block my-1.5 mx-5">Testimonials</li>
        <li className="inline-block my-1.5 mx-5">
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
