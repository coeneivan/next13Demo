import Navbar from "@/components/navbar";
import Header from "@/components/home/header";
import Services from "@/components/home/services";
import WhoWeAre from "@/components/home/whoWeAre";
import Blog from "@/components/home/blog";
import Reviews from "@/components/home/reviews";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Navbar absolute />
      <main>
        <>
          <Header />
          <Services />
          <WhoWeAre />
          <Blog />
          <Reviews />
        </>
      </main>
      <Footer />
    </div>
  );
}
