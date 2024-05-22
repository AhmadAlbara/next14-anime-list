import { Montserrat } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Templates-Project",
  description: "Author | Ahmad Albara",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} dark:text-color-primary text-color-secondary`}
      >
        <Providers>
          <Navbar />
          <Suspense fallback={<Loading />}>
            <main className="w-full px-2 md:max-w-7xl md:mx-auto">
              {children}
            </main>
          </Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
