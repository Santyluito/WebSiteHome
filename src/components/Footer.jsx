import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoGithub,
} from "react-icons/io5";

export const Footer = () => {
  return (
    <section className="w-full mt-24 bg-pink-900 text-gray-300 py-2 px-2">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-6 border border-gray-600 py-8 px-4">
        <div>
          <h6 className="font-bold uppercase pt-2">Soluctions</h6>
          <ul>
            <li className="py-1">Travel</li>
            <li className="py-1">Booking</li>
            <li className="py-1">Flights</li>
            <li className="py-1">Cruises</li>
            <li className="py-1">Ground</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">
            Support
          </h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Tours</li>
            <li className="py-1">Refunds</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">
            Company
          </h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Press</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">
            Soluctions
          </h6>
          <ul>
            <li className="py-1">Travel</li>
            <li className="py-1">Booking</li>
            <li className="py-1">Flights</li>
            <li className="py-1">Cruises</li>
            <li className="py-1">Ground</li>
          </ul>
        </div>
        <div className="col-span-2 py-8 md:pt-2">
          <p className="font-bold">Subscribe to our newlatters</p>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            commodi?
          </p>
          <form action="" className="flex flex-col sm:flex-row">
            <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" placeholder="Enter email" />
            <button className="p-2 mb-4 rounded-md hover:shadow-lg hover:shadow-gray-300/50 ease-in-out duration-200">Subscribe</button>
          </form>
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
