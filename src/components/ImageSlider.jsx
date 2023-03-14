import { slides } from "../modules/galery";
import HeadersComponents from "../modules/HeadersComponents";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section>
      <HeadersComponents title="Galeria" />
      <div className="max-w-[1400px] h-[580px] w-full m-auto py-10 px-4 relative group">
        <div
          className="w-full h-full rounded-2xl bg-center"
          style={{ backgroundImage: `url(${slides[currentIndex].url})`, backgroundRepeat: 'no-repeat' }}
        />

        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
          <IoChevronBackOutline onClick={prevSlide} size={35} />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
          <IoChevronForwardOutline onClick={nextSlide} size={35} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              className="text-2xl cursor-pointer"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
