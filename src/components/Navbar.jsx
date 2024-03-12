import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [Active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  console.log(navLinks.a);

  return (
    <nav
      className={` mx-auto  ${styles.paddingX} w-[300px] sm:w-[700px] flex items-center py-5 fixed top-5 z-20 bg-purple-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[12px] font-bold cursor-pointer">
            Aniket &nbsp;
            <span className="sm:block hidden">| Web Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                Active === link.title ? "text-white" : "text-secondary"
              } hover:text-red-300 text-[14px] font-medium cursor-pointer `}
              onClick={() => setActive(link.title)}
            >
              <a href={`${link.title === "Resume" ? link.id : `#${link.id}`}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-purple-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100`}
          >
            <ul className="list-none flex sm:flex gap-4 flex-col justify-end items-start ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    Active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a
                    href={`${
                      link.title === "Resume" ? link.id : "#" + link.title
                    }`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
