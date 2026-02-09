import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Nav from "./components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Script from "next/script";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const allround = localFont({
  src: "../../public/fonts/allround-semi.otf",
  variable: "--font-allround",
  display: "swap",
  weight: "100 900",
});



export const metadata: Metadata = {
  title: "Intellex",
  description:
    "Building the Memory Economy | Unlocking Collective Memory as a Liquid Asset | Build, Trade, and Collaborate with #Intellex",
  metadataBase: new URL("https://www.Intellex.xyz/"),
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: "Intellex",
    description:
      "Building the Memory Economy | Unlocking Collective Memory as a Liquid Asset | Build, Trade, and Collaborate with #Intellex",
    images: [
      {
        url: "https://www.Intellex.xyz/assets/isologobig.png",
        width: 1200,
        height: 630,
        alt: "Intellex",
      },
    ],
    url: "https://www.Intellex.xyz/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intellex",
    description:
      "Building the Memory Economy | Unlocking Collective Memory as a Liquid Asset | | Build, Trade, and Collaborate with #Intellex",
    images: ["https://www.Intellex.xyz/assets/isologobig.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="dark">
      <body /* className={inter.className}  */
        className={` ${inter.className} ${allround.variable}  antialiased `}
        suppressHydrationWarning={true}>
        <ToastContainer />
        <Nav />
        {children}
        <Footer />

      </body>

      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
      />
      <Script id="gtag">
        {`  
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');`}
      </Script>
    </html>
  );
}
