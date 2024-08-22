import Page from "@/components/page";
import PagesController from "@/controllers/page";
import React from "react";

export async function generateStaticParams() {
  const pages = await PagesController.get();
  const slugs = pages?.docs?.map((ls) => ({
    dynamicpages: `${ls?.slug}`,
  }));
  return slugs;
}

const DynamicPages = async ({ params }) => {
  const pages = await PagesController.get();
  const pageIndex = pages?.docs?.find(
    (ls) => ls?.slug === params?.dynamicpages
  );
  const page = await PagesController.getSingle(pageIndex?.id);

  return <Page data={page} />;
};

export default DynamicPages;
