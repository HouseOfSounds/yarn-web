import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
