import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Build Your Offshore Team Fast | Save 60% on Staffing | TaskMates",
    template: "%s | TaskMates",
  },
  description:
    "Build your offshore team with TaskMates. Hire full-time or part-time professionals while we manage HR, payroll, and compliance — save up to 60% today.",
  metadataBase: new URL("https://www.thetaskmates.com"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "TaskMates",
    title: "Build Your Offshore Team Fast | Save 60% on Staffing | TaskMates",
    description:
      "Build your offshore team with TaskMates. Hire full-time or part-time professionals while we manage HR, payroll, and compliance — save up to 60% today.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-body antialiased text-neutral-800 bg-neutral-50`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
