import DashboardModule from "@/modules/Dashboard";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable}  font-display bg-[#F6F5EE]`}>
      <DashboardModule>
        <Component {...pageProps} />
      </DashboardModule>
    </main>
  );
}