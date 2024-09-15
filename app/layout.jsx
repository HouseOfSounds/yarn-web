import { Montserrat } from "next/font/google";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

// const id = "o3nfjjsba0";
// clarity.init(id);

const font = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Yarn",
  description: "Connect to your favorite music like never before",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {process.env.NODE_ENV === "production" && (
          <Script
            strategy="afterInteractive"
            src="https://www.clarity.ms/tag/o3nfjjsba0"
          />
        )}
        {children}
      </body>
    </html>
  );
}
