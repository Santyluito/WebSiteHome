import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };

  const class1 =
    "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-screen h-screen bg-black/70 px-4 py-7 flex-col z-10";

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-white text-3xl font-Lobster">LM</h1>
      <IoMenu onClick={handleNav} className="z-20 cursor-pointer" color="white" size={25} />
      <nav className={nav ? class1 : 'hidden'}>
        <ul className="flex flex-col fixed text-gray-300 left-0 top-0 w-full h-full items-center justify-center gap-8">
          <li className="font-bold text-2xl">Incio</li>
          <li className="font-bold text-2xl">Características</li>
          <li className="font-bold text-2xl">Galería</li>
          <li className="font-bold text-2xl">Contáctanos</li>
        </ul>
      </nav>
    </div>
  );
};
