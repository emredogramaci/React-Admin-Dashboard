import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="flex items-center absolute bottom-0 font-bold">
      Emre Doğramacı
      <div className="mx-4 text-xl">
        <a href="https://www.emredogramaci.com.tr/" target="_blank">
          <CgWebsite />
        </a>
      </div>
      <div className="text-xl ">
        <a href="https://github.com/emredogramaci" target="_blank">
          <FaGithubSquare />
        </a>
      </div>
      <div className="ml-4 text-xl text-blue-800">
        <a href="https://www.linkedin.com/in/emredogramaci/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
