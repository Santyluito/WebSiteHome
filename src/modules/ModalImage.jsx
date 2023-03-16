import { useEffect, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const ModalImage = ({ isVisible, onClose, imageData, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(imageData);
  }, [imageData, data]);

  if (!isVisible) return null;
  const iconClose = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 md:w-8 md:h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 w-screen bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="md:w-fit md:mx-24 w-screen h-auto group">
        <button
          className="text-gray-300 border-none bg-black/10 rounded-full absolute p-2 m-2 hover:bg-black/20 transition duration-100"
          onClick={onClose}
        >
          {iconClose}
        </button>
        <img
          className="rounded md:rounded-xl mx-auto"
          src={data[currentIndex].image}
          alt={data[currentIndex].title}
        />

        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
          <IoChevronBackOutline onClick={prevSlide} size={35} />
        </div>

        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
          <IoChevronForwardOutline onClick={nextSlide} size={35} />
        </div>
      </div>
    </div>
  );
};

export default ModalImage;
