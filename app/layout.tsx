import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { PolicyGenContextProvider } from "@/context/policyGenerator";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AIPolicyPro",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} dark`}
      >
          <PolicyGenContextProvider>
            {children}
          </PolicyGenContextProvider>
      </body>
    </html>
  );
}
