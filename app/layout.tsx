import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { MenuProvider } from "../contexts/menu-context";
import Overlay from "../components/ui/overlay";
import FooterPics from "../components/footerPics";
import ConditionalFooterPics from "../components/ConditionalFooterPics";




const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ceenat Foundation",
  description: "Restoring Hope. Changing Lives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} relative antialiased min-w-[320px]`}
      >
        <MenuProvider>
          <Navbar />
          {children}
          {/* Portal root */}
          <div id="portal-root" />
          <ConditionalFooterPics />
          <Footer />
          <Overlay />
        </MenuProvider>
      </body>
    </html>
  );
}
