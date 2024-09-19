import Page from "@/components/page";
import PagesController from "@/controllers/page";
import React from "react";

export async function generateStaticParams() {
  const pages = await PagesController.get();
  const params = [];
  for (const page of pages?.docs) {
    params.push({ locale: "en", slug: page?.slug });
    params.push({ locale: "fr", slug: page?.slug });
  }
  return params;
}

const LocalizedPages = async ({ params }) => {
  const page = await PagesController.getSingle({
    slug: params?.slug,
    locale: params?.locale,
  });
  return <Page data={page?.docs[0]} />;
};

export default LocalizedPages;
