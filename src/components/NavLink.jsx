import Link from "next/link";
import TextGradient from "./TextGradient";

const NavLink = ({ href, text, gradient }) => {
  return (
    <Link href={href} className="relative m-6 font-bold group w-max">
      {gradient ? (
        <span className="flex space-x-2">
          <TextGradient body={gradient} />
          {text}
        </span>
      ) : (
        { text }
      )}
      <span className="absolute bottom-0 left-0 w-0 transition-all h-0.5  bg-gradient-to-r to-color-accent from-color-quinary  group-hover:w-full"></span>
    </Link>
  );
};

export default NavLink;
