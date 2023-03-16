import { useForm } from "react-hook-form";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section id="contact" className="bg-white mt-20 w-full my-4 h-full">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
          Contáctanos.
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 400 sm:text-xl">
          Completá el formulario para contactarnos sobre cualquier pregunta o
          comentario que tengas y nos contactaremos a la brevedad.
        </p>
        <form
          action="https://formsubmit.co/l-matamoros@itctrol.com"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Su email
            </label>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 light"
              placeholder="name@flowbite.com"
            />
            <span className="text-sm text-red-700">
              {errors.email?.type === "required" && "Este campo es requerido"}
              {errors.email?.type === "pattern" && "Email no valido"}
            </span>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject", {
                required: true,
                maxLength: 40,
              })}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 primary-500 primary-500 light"
              placeholder="Let us know how we can help you"
            />
            <span className="text-sm text-red-700">
              {errors.subject?.type === "required" && "Este campo es requerido"}
              {errors.subject?.type === "maxLength" &&
                "Solo hasta 40 caracteres"}
            </span>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 400"
            >
              Su Mensaje
            </label>
            <textarea
              id="message"
              {...register("message", {
                maxLength: 1000,
              })}
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 700 600 400 primary-500 primary-500"
              placeholder="Leave a comment..."
              defaultValue={""}
            />
            <span className="text-sm text-red-700">
              {errors.message?.type === "maxLength" &&
                "Solo hasta 1000 caracteres"}
            </span>
          </div>
          <div className="md:flex items-center space-y-8 md:space-x-8 md:space-y-0">
            <button type="submit" className="rounded-lg w-full md:w-fit ">
              Enviar Mensaje
            </button>
            <p className="grid place-items-start">
              Enseguida se responderemos a:{" "}
              <span className="text-pink-800 font-semibold">
                {watch("email")}
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
