import { Fira_Sans_Condensed } from "next/font/google";
import "./globals.css";
import GlobalController from "@/controllers/global";
import GlobalLayout from "@/components/layout";

const fira = Fira_Sans_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--fira",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default async function RootLayout({ children }) {
  const header = await GlobalController.getHeader();
  const footer = await GlobalController.getFooter();
  return (
    <html lang="en">
      <body className={`${fira.variable}`}>
        <GlobalLayout
          data={{
            header,
            footer,
          }}
        >
          {children}
        </GlobalLayout>
      </body>
    </html>
  );
}
