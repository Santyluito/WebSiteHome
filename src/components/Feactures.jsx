import casaOut from "../assets/casaOutside.jpg";
import entrance from "../assets/entrance.jpg";
import bed1 from "../assets/bed1_1.jpg";
import kitchen1 from "../assets/kitchen1.jpg";
import bq from "../assets/parrilla.jpg";
import HeadersComponents from "../modules/HeadersComponents";
import AccordionItem from "../modules/AccordionItem";

export const Feactures = () => {
  return (
    <section className="container md:w-11/12 mx-auto ">
      <HeadersComponents title='La casa tiene las siguientes características.' />

      <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-6 lg:h-[80vh]">
          <img className="sm:row-span-3 object-none sm:object-cover w-80 h-80 lg:w-full lg:h-full p-2  filter contrast-125 hover:saturate-200 ease-in-out duration-500" src={casaOut} alt="casa desde afuera" />
          <img className="sm:row-span-2 object-none sm:object-cover w-80 h-80 lg:w-full lg:h-full p-2  filter contrast-125 hover:saturate-200 ease-in-out duration-500" src={bed1} alt="casa desde afuera" />
          <img className="sm:row-span-2 object-none sm:object-cover w-80 h-80 lg:w-full lg:h-full p-2  filter contrast-125 hover:saturate-200 ease-in-out duration-500" src={kitchen1} alt="casa desde afuera" />
          <img className="sm:row-span-3 object-none sm:object-cover w-80 h-80 lg:w-full lg:h-full p-2  filter contrast-125 hover:saturate-200 ease-in-out duration-500" src={entrance} alt="casa desde afuera" />
          <img className="sm:row-span-2 object-none sm:object-cover w-80 h-80 lg:w-full lg:h-full p-2  filter contrast-125 hover:saturate-200 ease-in-out duration-500" src={bq} alt="casa desde afuera" />
        </div>

        <div className="flex flex-col h-full justify-center gap-4">
          {/* <AccordionItem /> */}
          <h3 className="text-4xl md:text-5xl font-bold">Lorem ipsum dolor sit amet.</h3>
          <p className="text-2xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
            asperiores?
          </p>
          <button className="border-gray-800 w-fit hover:text-pink-700 hover:border-pink-700 transition duration-200">Contáctanos para más información</button>
        </div>
      </div>
    </section>
  );
};
