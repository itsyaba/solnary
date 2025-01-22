import type { Metadata } from "next";
import { Stint_Ultra_Expanded, Pontano_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { TracingBeam } from "@/components/ui/tracing-beam";

const stinntUltra = Stint_Ultra_Expanded({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-stint-ultra-expanded",
});

const pontanoSans = Pontano_Sans({
  variable: "--font-pontano-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Solnary",
  description:
    "Your number one source for all web and app-related projects. We're dedicated to providing you the very best of websites, apps, and maintenance packages with an emphasis on innovation, security, quality.",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${stinntUltra.variable} ${pontanoSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <div className="w-11/12 mx-auto">
              <Navbar />
              {children}
              <Footer />
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
