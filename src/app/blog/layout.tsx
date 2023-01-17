import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
        <main className="py-12 container bg-red">{children}</main>
      <Footer />
    </div>
  );
}
