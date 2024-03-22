import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { getServerSession } from "next-auth";
import SessionProvider from "../components/Providers/SessionProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevLink",
  description: "Connect Fast! Connect Better!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html
      lang="en"
      style={{
        scrollbarColor: "transparent transparent",
        scrollBehavior: "smooth",
        overflowX: "hidden",
        
      }}
    >
      <body className={poppins.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
