import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Script from "next/script";

// const id = "o3nfjjsba0";
// clarity.init(id);

const font = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yarn",
  description: "Connect to your favorite music like never before",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        strategy="afterInteractive"
        src="https://www.clarity.ms/tag/o3nfjjsba0"
        async
        defer
        data-domain="musicyarns.com"
        data-clarity="o3nfjjsba0"
        data-auto-clarity="false"
        data-sitekey="o3nfjjsba0"
        data-website-id="o3nfjjsba0"
        data-website-key="o3nfjjsba0"
      />
      <body className={font.className}>{children}</body>
    </html>
  );
}
