import Page from "@/components/page";
import PagesController from "@/controllers/page";

export const generateMetadata = async () => {
  const page = await PagesController.getIndex({ locale: "en" });
  const seo = {
    title: page?.docs[0]?.metaTitle,
    description: page?.docs[0]?.metaDescription,
  };
  return seo;
};

export default async function Home(props) {
  const locale = props?.searchParams?.lang;
  const page = await PagesController.getIndex({ locale });
  return <Page data={page?.docs[0]} />;
}
