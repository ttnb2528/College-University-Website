import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <nav
      className={`contain max-[840px]:py-4 w-full text-white fixed top-0 left-0 flex items-center justify-between z-10 ${
        sticky ? "bg-[#212ea0] duration-500 transition-all" : ""
      }`}
    >
      <img src={logo} alt="" className="w-36 lg:w-[180px]" />
      <ul className={`text-base ${mobileMenu ? "" : "hide-mobile-menu"}`}>
        <li className="inline-block lg:my-1.5 lg:mx-5">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className="inline-block lg:my-1.5 lg:mx-5">
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li className="inline-block lg:my-1.5 lg:mx-5">
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About
          </Link>
          us
        </li>
        <li className="inline-block lg:my-1.5 lg:mx-5">
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li className="inline-block lg:my-1.5 lg:mx-5">
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li className="inline-block lg:my-1.5 lg:mx-5">
          <button className="btn">
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              Contact us
            </Link>
          </button>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt=""
        className="block w-6 cursor-pointer min-[840px]:hidden"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
