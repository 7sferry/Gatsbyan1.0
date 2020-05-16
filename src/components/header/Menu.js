import React from "react";
import { Link } from "gatsby";
import { FaHome } from "react-icons/fa";

const Menu = () => {
  return <div className="social-links float-right mr-4">{menus}</div>;
};

export const menus = Array.of(
  {
    link: "",
    text: (
      <>
        <FaHome title={'Home'} size={20} /> Home
      </>
    ),
  },
).map(menu => {
  return (
    <Link key={menu.link} to={`/${menu.link}`}>
      <span className="text-side d-block ml-4">{menu.text}</span>
    </Link>
  );
});

export default Menu;
