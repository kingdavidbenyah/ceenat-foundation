'use client';
import { usePathname } from "next/navigation";
import FooterPics from "./footerPics";

export default function ConditionalFooterPics() {
  const pathname = usePathname();
  const hideFooterPics = pathname?.startsWith('/volunteer/story/');

  if (hideFooterPics) return null;
  
  return <FooterPics />;
}