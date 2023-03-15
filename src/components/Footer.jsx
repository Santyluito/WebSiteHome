import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoGithub,
} from "react-icons/io5";

export const Footer = () => {
  return (
    <section className="w-full mt-24 bg-pink-900 text-gray-300 py-2 px-2">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 border border-gray-600 py-8 px-4">
        <div className="grid place-content-center">
          <h6 className="font-bold uppercase pt-2">Datos</h6>
          <ul>
            <li className="py-1">Telf: 0995012120</li>
            <li className="py-1">Direccion: San Isidro del Inca</li>
          </ul>
        </div>

        <div className="grid w-[580px] h-[320px]">
          <iframe
            className="rounded-lg items-end grayscale hover:grayscale-0"
            width="580"
            height="320"
            src="https://maps.google.com/maps?width=900&amp;height=500&amp;hl=en&amp;q=-0.14748408746972314%2C%20-78.46198067071154+(Casa%20de%20venta)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed"
            // framebframeBorderorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col max-w-screen-2xl px-2 py-4 mx-auto justify-between items-center sm:flex-row text-center text-gray-500">
        <p>2023 HermosaCasa, LLC. All rights reserved</p>
        <div className="flex justify-evenly my-4 md:w-80 text-2xl">
          <IoLogoFacebook />
          <IoLogoInstagram />
          <IoLogoTwitter />
          <IoLogoGithub />
        </div>
      </div>
    </section>
  );
};
