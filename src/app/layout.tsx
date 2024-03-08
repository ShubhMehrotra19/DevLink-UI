import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400" ,subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevLink",
  description: "Connect Fast! Connect Better!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{
      scrollbarColor: 'transparent transparent',
      scrollBehavior: 'smooth',
      overflowX: 'hidden',
    }}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
