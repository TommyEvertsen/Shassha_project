import React from "react";

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
];

const linkElements = links.map((link, index) => (
  <li className="mx-4" key={index}>
    <a href={link.link} className="text-white font-bold">
      {link.title}
    </a>
  </li>
));

const Header = () => {
  return (
    <div className=" w-full h-10 ">
      <div className="flex justify-center items-center h-full list-none bg-red-500 ">
        {linkElements}
      </div>
    </div>
  );
};

export default Header;
