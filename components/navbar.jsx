import React from "react";
import CustomImage from "./image";
import Link from "next/link";
import Image from "next/legacy/image";
import LocaleSwitcher from "./localeSwitcher";

const Navbar = ({ data }) => {
  return (
    <div className="bg-gray-100 py-3">
      <div className="container flex justify-between items-center gap-5">
        <Link href={"/"}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${data?.logo?.url}`}
            width={100}
            height={50}
          />
        </Link>
        <div className="hidden sm:flex  gap-5 items-center">
          {data?.navItems?.map((ls, index) => (
            <Link
              href={ls?.href ?? ls?.herf ?? "#"}
              className="text-black"
              key={index}
            >
              {ls?.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-5 items-center">
          {data?.cta?.map((ls, index) => (
            <Link
              key={index}
              href={ls?.href ?? ls?.herf ?? "#"}
              className="bg-black text-white flex items-center justify-center text-xs font-bold px-4 py-2 rounded-full"
            >
              {ls?.title}
            </Link>
          ))}
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
