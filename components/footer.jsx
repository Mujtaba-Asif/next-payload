import React from "react";
import CustomImage from "./image";
import Link from "next/link";

const Footer = ({ data }) => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container flex flex-col gap-10">
        <div className="max-w-[200px] flex items-center justify-center  w-full mx-auto">
          <CustomImage
            className=""
            src={data?.logo?.url}
            width={100}
            height={100}
          />
        </div>
        <div className="flex md:flex-row flex-col max-w-3xl w-full mx-auto  justify-center  md:justify-between gap-10 md:gap-20">
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-2xl">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {data?.quickLinks?.map((ls) => (
                <Link href={ls?.href || ls?.herf || "#"}>{ls?.title}</Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-2xl">Social Links</h4>
            <div className="flex flex-col gap-2">
              {data?.socialLinks?.map((ls) => (
                <Link target="_blank" href={ls?.href || ls?.herf || "#"}>
                  <CustomImage src={ls?.icon?.url} width={30} height={30} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-2xl">Contact</h4>
            <div className="flex flex-col gap-2">
              <a href="#">{data?.contact?.email}</a>
              <a href="#">{data?.contact?.phoneNumber}</a>
              <p className="max-w-[250px]">{data?.contact?.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
