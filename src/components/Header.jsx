import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { name: "회사소개", path: "/history" },
    { name: "회사연혁", path: "/history" },
    { name: "오시는길", path: "/directions" },
    { name: "문의", path: "/contact" }
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="flex justify-between items-center h-16 p-12 border-b shadow-md px-12">
        <div className="flex items-center cursor-pointer">
          <img src="/logo.png" alt="주일에코텍 로고" className="h-10 w-auto mr-3" />
          <a href="/" className="text-gray-800 text-4xl font-bold">주일에코텍</a>
        </div>
        <nav className="hidden md:flex space-x-20">
        {menuItems.map((item) => (
            <Link to={item.path} className="hover:text-blue-600 text-lg" key={item.name}>
              {item.name}
            </Link>
          ))}
        </nav>
        <button onClick={toggleMenu}>
          {/* {menuOpen ? <X /> : <Menu />} */}
        </button>
      </header>
      {menuOpen && (
        <div className="md:hidden p-4 border-b">
          {menuItems.map((item) => (
            <a href="#" className="block py-2 border-b" key={item}>{item}</a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
