import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

export const metadata: Metadata = {
  title: "Yuu",
  description: "The social media app for powernerds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ReactQueryProvider>
          <main className="overflow-x-hidden">
            <Header />
            {children}
            <Footer />
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
