import Page from "@/components/page";
import PagesController from "@/controllers/page";

export default async function Home() {
  const pages = await PagesController.get();
  const homeIndex = pages?.docs?.find((ls) => ls?.slug === "index");
  const page = await PagesController.getSingle(homeIndex?.id);
  return <Page data={page} />;
}
