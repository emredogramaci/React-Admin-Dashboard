import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 text-center">
      <p className="font-semibold dark:text-gray-200 text-gray-700">
        Emre Doğramacı © 2023
      </p>
      <div className="text-center mt-4">
        <a
          className="font-bold text-orange-600 dark:text-orange-500"
          href="https://www.emredogramaci.com.tr"
        >
          Web
        </a>
        <a
          className="font-bold text-gray-800 dark:text-orange-500 mx-4"
          href="https://github.com/emredogramaci"
        >
          GitHub
        </a>
        <a
          className="font-bold text-blue-800 dark:text-orange-500"
          href="https://www.linkedin.com/in/emredogramaci/"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Footer;
