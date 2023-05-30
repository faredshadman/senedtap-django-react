import Logo from "../assets/images/whiteLogo.svg";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="px-16 pt-5 pb-2 bg-blue-900">
      <img className="w-40 h-10" src={Logo} alt="Logo" />
      <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row my-5">
        <nav className="flex-1 flex flex-col space-y-8 sm:space-y-0 sm:flex-row text-white cursor-pointer">
          <ul className="flex-1 space-y-8">
            <li className="transition-all duration-100 ease-in hover:font-semibold">
              Terms & Conditions
            </li>
            <li className="transition-all duration-100 ease-in hover:font-semibold">
              Feedbacks & Testimonials
            </li>
            <li className="transition-all duration-100 ease-in hover:font-semibold">
              Psychologists
            </li>
          </ul>
          <ul className="flex-1 space-y-8">
            <li className="transition-all duration-100 ease-in hover:font-semibold">
              Privacy Policy
            </li>
            <li className="transition-all duration-100 ease-in hover:font-semibold">
              Download Mobile Apps
            </li>
            <li className="transition-all duration-100 ease-in hover:font-semibold">
              Start as psycholog
            </li>
          </ul>
        </nav>
        <div className="flex-1">
          <div className="flex justify-start md:justify-end">
            <div className="flex flex-col items-start sm:items-end gap-4">
              <h1 className="text-3xl md:text-4xl text-white font-bold sm:text-end text-left">
                Heç bir yeniliyi qaçırmamaq <br /> üçün abunə ol!
              </h1>
              <div className="flex flex-col sm:flex-row w-full items-center gap-3">
                <input
                  placeholder="E-poçt"
                  className="p-2  flex-1 w-full rounded-xl"
                />
                <button className="bg-blue-400 whitespace-nowrap p-2 text-white rounded-xl">
                  Abunə ol
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 text-white">
        <FaFacebookF />
        <FaTelegramPlane />
        <FaLinkedinIn />
        <FaInstagram />
        <FaWhatsapp />
      </div>
      <hr className="-mx-10 my-2" />
      <div className="text-white">
        Copyright © {new Date().getFullYear()} Sənədtap. Bütün hüquqlar qorunur.
      </div>
    </footer>
  );
};

export default Footer;
