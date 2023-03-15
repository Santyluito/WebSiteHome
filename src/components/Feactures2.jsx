import HeadersComponents from "../modules/HeadersComponents";

const SvgIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 text-pink-500 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
      />
    </svg>
  );
};

export const Feactures2 = () => {
  return (
    <section id="feactures" className="container md:w-10/12 mx-auto pt-20 h-screen">
      <HeadersComponents title="La casa tiene las siguientes características." />

      <div className="grid md:grid-cols-3 gap-8 place-items-center">
        <div className="md:col-span-1 mx-8 md:mx-0">
          <img className="" src="family.svg" alt="" />
        </div>
        <div className="md:col-span-2 space-y-2 mx-2 mb-4 md:mx-8">
          <h2 className="mb-4 text-3xl md:text-4xl font-extrabold  text-gray-900 tracking-wider drop-shadow-md">Descripción</h2>
          <p className="text-base text-gray-600">
            Casa en venta, Conjunto Mirador de Amagasi 1, Quito - Pichincha.
          </p>
          <p className="text-sm mb-4 text-gray-500">
            Una vista espectacular, frescos, cómodos, con espacios amplios,
            ideal para los que les gusta vivir muy bien, y está distribuido de
            la siguiente manera:
          </p>
          <div>
            <ol className="max-w-md space-y-1 text-gray-500 list-inside">
              <li className="flex items-center">
                <SvgIcon /> SALA - COMEDOR
              </li>
              <li className="flex items-center">
                <SvgIcon /> COCINA CON ANAQUELES ALTOS Y BAJOS
              </li>
              <li className="flex items-center">
                <SvgIcon /> BAÑO SOCIAL
              </li>
              <li className="flex items-center">
                <SvgIcon /> 3 DORMITORIOS CON CLOSET
              </li>
              <li className="flex items-center">
                <SvgIcon /> 1 MASTER CON BAÑO Y CLOSET
              </li>
              <li className="flex items-center">
                <SvgIcon /> 2 SECUNDARIOS CON CLOSET Y COMPARTEN BAÑO
              </li>
              <li className="flex items-center">
                <SvgIcon /> AREA DE LAVANDERIA EN PATIO INTERIOR
              </li>
              <li className="flex items-center">
                <SvgIcon /> PARQUEO
              </li>
              <li className="flex items-center">
                <SvgIcon /> ILUMINACION LED
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
