import { Montserrat } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Kyoto.Net | Anime List",
  description: "This Website For Anime List",
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
        className={`${montserrat.className} dark:text-color-primary text-color-secondary dark:bg-color-secondary bg-color-primary`}
      >
        <Providers>
          <Navbar />
          <Suspense fallback={<Loading />}>
            <main className="w-full px-2 md:max-w-7xl md:mx-auto">
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
