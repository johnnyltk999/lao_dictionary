import type { Metadata } from "next";
import { Inter, Noto_Sans_Lao } from "next/font/google";
import Navbar from "./components/Navbar";
import { CustomProviders } from "./provider";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans_Lao({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ຜູ້ດູແລ | ແອັດມິນ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CustomProviders>
      <html lang="en">
        <body className={(inter.className, noto.className)}>
          {/* <Navbar></Navbar> */}

          {children}
        </body>
      </html>
    </CustomProviders>
  );
}
