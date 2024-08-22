"use client";
import React from "react";
import Hero from "./hero";
import PageContent from "./page-content";

const Page = ({ data }) => {
  return (
    <div>
      <Hero
        background={data?.backgroundImage?.url}
        title={data?.title}
        description={data?.description}
      />
      <PageContent content={data?.content} />
    </div>
  );
};

export default Page;
