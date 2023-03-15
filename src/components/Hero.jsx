import imageHero from "../assets/20221201_135352_2.jpg";

export const Hero = () => {
  return (
    <section className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={imageHero}
        alt="conjunto area verde"
      />
      {/* <div className="bg-black/30 absolute top-0 w-full h-screen" /> */}
      <div className="absolute top-0 w-full">
        <div className="h-screen flex items-center justify-center ">
          <div className="mx-auto text-center">
            <div className="bg-white/70 py-8 px-0 md:py-32 md:px-24">
              <p className="text-lg">En conjunto privado residencial</p>
              <h2 className="uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-900 to-pink-900 font-bold text-5xl md:text-7xl drop-shadow-2xl font-Lobster">
                Hermosa Casa <span className="text-pink-700">en venta</span>
              </h2>
              <p className="drop-shadow-2xl py-2 text-xl">
                En una zona segura y cerca del centro norte de Quito.
              </p>
              <a href="#contact">
                <button className="bg-white text-black hover:bg-white/80 hover:text-gray-700 transition duration-200 mt-4">
                  Contáctanos Ahora
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
