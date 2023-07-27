import "@/styles/global.css";
import { Inter } from "next/font/google";
import NavbarHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import { ContextProvider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CarBike360",
  description: "Build For Assignment Purpose",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <NavbarHeader />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
