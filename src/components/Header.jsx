import { Link } from "react-router-dom";
import { navLinks, socialLinks } from "../constants/index";
import Logo from "../assets/img/Logo.png";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="border-b border-gray-300 fixed w-full bg-white z-10">
      <div className="max-w-6xl flex items-center justify-around mx-auto max-lg:justify-between max-lg:px-4">
        <Link to="/">
          <img
            src={Logo}
            alt="go to homepage"
            className="w-64 cursor-pointer hover:opacity-50 max-md:w-48"
          />
        </Link>
        <div className="max-lg:hidden">
          <ul className="flex gap-8 text-xl">
            {navLinks &&
              navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  className="hover:text-gray-500 hover:underline"
                >
                  <Link to={navLink.to}>{navLink.name}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <ul className="flex gap-6 max-lg:hidden">
            {socialLinks &&
              socialLinks.map((socialLink) => (
                <li key={socialLink.id} className="hover:text-gray-500">
                  <a href={socialLink.href}>{socialLink.icon}</a>
                </li>
              ))}
          </ul>
        </div>
        <div>
          {openMenu ? (
            <IoMdClose
              size={34}
              className=" lg:hidden cursor-pointer hover:text-gray-500"
              onClick={() => setOpenMenu((prev) => !prev)}
            />
          ) : (
            <IoIosMenu
              size={34}
              className=" lg:hidden cursor-pointer hover:text-gray-500"
              onClick={() => setOpenMenu((prev) => !prev)}
            />
          )}
        </div>
      </div>
      {openMenu && (
        <div className="w-full p-4">
          <div className="flex flex-col items-center justify-center gap-3">
            <ul className="text-xl text-center w-1/2">
              {navLinks &&
                navLinks.map((navLink) => (
                  <li
                    key={navLink.id}
                    className="border-b hover:font-semibold"
                    onClick={() => setOpenMenu((prev) => !prev)}
                  >
                    <Link to={navLink.to}>{navLink.name}</Link>
                  </li>
                ))}
            </ul>
            <div>
              <ul className="flex gap-3">
                {socialLinks &&
                  socialLinks.map((socialLink) => (
                    <li key={socialLink.id} className="hover:text-gray-500">
                      <a
                        href={socialLink.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {socialLink.icon}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
