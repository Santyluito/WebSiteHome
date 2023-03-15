import HeadersComponents from "../modules/HeadersComponents";
import bed1 from "../assets/bed1_1.jpg";
import kitchen1 from "../assets/kitchen1.jpg";
import bq from "../assets/parrilla.jpg";

export const Gallery = () => {
  return (
    <section className="container h-[500px] mx-auto bg-pink-100 my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <HeadersComponents title="Galeria" />
        <p className="pt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          maiores earum fugit, cupiditate aliquam dignissimos!
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img className="object-cover w-full h-full" src={bq} alt="casa" />
        <img className="row-span-2 object-cover w-full h-full" src={bed1} alt="casa" />
        <img className="object-cover w-full h-full" src={kitchen1} alt="casa" />
      </div>
    </section>
  );
};
