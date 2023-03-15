import { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { HiBars3, HiHomeModern, HiOutlineXMark } from "react-icons/hi2";
import ButtonW from "../modules/ButtonW";

let links = [
  { name: "Inicio", link: "#" },
  { name: "Caracteristicas", link: "#feactures" },
  { name: "Galeria", link: "#gallery" },
  { name: "Contactos", link: "#contact" },
];

export const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed w-screen z-50">
      <nav className="md:flex justify-between space-y-8 md:space-y-0 bg-white md:bg-white/5 py-8 md:py-1 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-Lobster text-gray-800 drop-shadow-lg">
          <span className="text-3xl text-pink-700 mr-1 md:mr-3 ">
            <HiHomeModern />
          </span>
          Casa en Venta
        </div>

        <div className="text-3xl p-1 active:ring active:ring-offset-4 active:ring-pink-700 rounded-full absolute right-6 top-0 cursor-pointer duration-200 md:hidden">
          <span onClick={() => setOpen(!open)}>
            {open ? <HiOutlineXMark /> : <HiBars3 />}
          </span>
        </div>
        <ul
          className={`md:flex md:items-center space-y-0 md:space-y-0 md:space-x-8 md:mr-6 transition-all duration-[2000] ease-in ${
            open ? "" : "hidden"
          }`}
        >
          {links.map((lnk) => (
            <li
              key={lnk.name}
              className="flex rounded items-center h-16 active:bg-pink-700 ease-in-out duration-500"
            >
              <a
                href={lnk.link}
                className="text-gray-800 font-semibold hover:text-pink-700 duration-200 drop-shadow-md"
              >
                {lnk.name}
              </a>
            </li>
          ))}
          <ButtonW />
        </ul>
      </nav>
    </div>
  );
};
