import type { Metadata } from "next";
import { CookieConsent } from "./components/CookieConsent";
import "./globals.css";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "miros workpod | On-demand workspace in Switzerland",
  description:
    "Book quiet, private workpods across Switzerland. Flexible by the hour for focused work, calls, and meetings.",
  icons: {
    icon: BASE_PATH + "/images/cropped-B1_noBG-70x75.png",
    shortcut: BASE_PATH + "/images/cropped-B1_noBG-70x75.png",
    apple: BASE_PATH + "/images/cropped-B1_noBG-70x75.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var l=localStorage.getItem('miros-lang');if(l){document.documentElement.lang=l;}}catch(e){}",
          }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
