"use client";
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const GlobalLayout = ({ children, data }) => {
  return (
    <>
      <Navbar data={data?.header} />
      {children}
      <Footer data={data?.footer} />
    </>
  );
};

export default GlobalLayout;
