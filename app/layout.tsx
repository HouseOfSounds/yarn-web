import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { clarity } from "react-microsoft-clarity";

const id = "o3nfjjsba0";
clarity.init(id);

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
      {/* <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "o3nfjjsba0");
</script> */}
      <body className={font.className}>{children}</body>
    </html>
  );
}
