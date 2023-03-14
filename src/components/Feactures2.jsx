import HeadersComponents from "../modules/HeadersComponents";

const SvgIcon = () => {
  return (
    <svg
      class="w-4 h-4 mr-1.5 text-pink-500 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export const Feactures2 = () => {
  return (
    <section className="container md:w-10/12 mx-auto ">
      <HeadersComponents title="La casa tiene las siguientes características." />

      <div className="grid md:grid-cols-3 gap-8 place-items-center">
        <div className="md:col-span-1 mx-8 md:mx-0">
          <img className="" src="family.svg" alt="" />
        </div>
        <div className="md:col-span-2 space-y-2 mx-2 mb-4 md:mx-8">
          <h2 className="text-3xl font-bold text-gray-700">Descripción</h2>
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
              <li className="flex items-center"><SvgIcon /> SALA - COMEDOR</li>
              <li className="flex items-center"><SvgIcon /> COCINA CON ANAQUELES ALTOS Y BAJOS</li>
              <li className="flex items-center"><SvgIcon /> BAÑO SOCIAL</li>
              <li className="flex items-center"><SvgIcon /> 3 DORMITORIOS CON CLOSET</li>
              <li className="flex items-center"><SvgIcon /> 1 MASTER CON BAÑO Y CLOSET</li>
              <li className="flex items-center"><SvgIcon /> 2 SECUNDARIOS CON CLOSET Y COMPARTEN BAÑO</li>
              <li className="flex items-center"><SvgIcon /> AREA DE LAVANDERIA EN PATIO INTERIOR</li>
              <li className="flex items-center"><SvgIcon /> PARQUEO</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
