import Courses from "@/components/Courses";
import Events from "@/components/Events";
import Explore from "@/components/Explore";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Spotlight from "@/components/Spotllight";
import Research from "@/components/Research";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#2D2D2D] pt-[110px]">
      <Header />
      <Hero />
      <Spotlight />
      <Events />
      <Explore />
      <Courses />
      <Info />
      <Research />
      <Social />
      <Footer />
    </div>
  )
}
