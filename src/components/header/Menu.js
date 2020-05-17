import React from "react";
import { Link } from "gatsby";
import { FaHome } from "react-icons/fa";

const Menu = () => {
  return <div className="social-links float-right mr-4">{menus}</div>;
};

export const menus = Array.of({
  link: "/",
  icon: <FaHome title={"Homepage"} size={20} />,
  text: "Home",
}).map(menu => {
  return (
    <Link key={menu.link} to={menu.link}>
      <span className="text-side d-block ml-4">
        {menu.icon} {menu.text}
      </span>
    </Link>
  );
});

export default Menu;
