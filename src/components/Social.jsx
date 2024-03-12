import { Link } from "react-router-dom";
import { FaDev, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiX } from "react-icons/si";

const Socials = () => {
  return (
    <div className="flex w-full justify-end relative">
      <nav
        className={`justify-end my-auto sm:flex  hidden h-[280px]  mt-[210px]  w-[50px]   top-5 z-20 bg-purple-400 rounded-2xl rounded-br-none rounded-tr-none bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 fixed`}
      >
        <div className="flex flex-col justify-center items-center gap-4 mx-auto">
          <Link to="https://github.com/Bamof25th" target="_blank">
            <span className="cursor-pointer hover:text-blue-400">
              <FaGithub size="2em" />
            </span>
          </Link>
          <Link
            to="https://www.linkedin.com/in/aniket-baghel-344a93173/"
            target="_blank"
          >
            <span className="cursor-pointer hover:text-blue-400">
              <FaLinkedin size="2em" />
            </span>
          </Link>
          <Link to="https://dev.to/aniketbaghelof25th" target="_blank">
            <span className="cursor-pointer hover:text-blue-400">
              <FaDev size="2em" />
            </span>
          </Link>
          <Link to="https://leetcode.com/BAM11/" target="_blank">
            <span className="cursor-pointer hover:text-blue-400">
              <SiLeetcode size="2em" />
            </span>
          </Link>
          <Link
            to="https://twitter.com/Aniket45661502"
            target="_blank"
          >
            <span className="cursor-pointer hover:text-blue-400">
              <SiX size="2em" />
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Socials;
