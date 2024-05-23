import Link from "next/link";
import React from "react";

const TextTitle = ({ text, href, linkText }) => {
  return (
    <div className="flex justify-between py-10 ">
      <h1 className="relative text-2xl font-bold capitalize">
        {text}
        <span className="absolute left-0 w-1/2 h-1 transition-all rounded-full -bottom-2 bg-gradient-to-r to-color-accent from-color-quinary"></span>
      </h1>

      {linkText ? (
        <Link
          href={href}
          className="transition-all duration-100 ease-in-out hover:scale-105"
        >
          {linkText}
        </Link>
      ) : null}
    </div>
  );
};

export default TextTitle;
