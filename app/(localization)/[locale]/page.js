import Page from "@/components/page";
import PagesController from "@/controllers/page";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ params: { locale: "en" } }, { params: { locale: "fr" } }];
}

export default async function Home({ params }) {
  const { locale } = params;
  const page = await PagesController.getIndex({ locale: locale || "en" });
  if (!page?.docs?.length) {
    notFound();
  }

  return <Page data={page?.docs[0]} />;
}
