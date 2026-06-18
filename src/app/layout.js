import { Cantarell, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const cantarell = Cantarell({
  weight: ["400", "700"],
  variable: "--font-heading",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Premium Hydraulic Works",
  description: "Skeuomorphic, industrial grade hydraulic solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cantarell.variable} ${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
