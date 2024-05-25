// components/Footer.js
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import TextGradient from "./TextGradient";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center space-x-5 md:flex-row">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <TextGradient body={"Kyoto.Net"} className="text-3xl font-bold" />
            </Link>
          </div>
          <div className="flex mb-4 justify-evenly md:mb-0">
            <NavLink href={"/genres"} gradient={"G"} text={"enre"} />
            <NavLink href={"/movies"} gradient={"M"} text={"ovies"} />
            <NavLink href={"/upcoming"} gradient={"N"} text={"ews"} />
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Kyoto.Net All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
