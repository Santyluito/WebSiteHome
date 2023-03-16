import { AiOutlineWhatsApp } from "react-icons/ai";

const ButtonW = () => {
  return (
    <div className="md:hidden">
      <a
      className="bg-green-700 text-white  text-2xl p-2 rounded-full hover:bg-green-400 duration-300 flex justify-center items-center outline outline-offset-1 outline-1"
      href="https://wa.link/zzislj"
      target="_blank"
    >
      <AiOutlineWhatsApp className="mr-2 md:mr-0" />
      <span className="md:hidden text-lg">+593 9950 12120</span>
    </a>
    </div>
  );
};

export default ButtonW;
