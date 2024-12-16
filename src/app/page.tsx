import AboutMe from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import { Technologies } from "@/components/Technologies";
import Testimonial from "@/components/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Services />
      <Technologies />
      <Portfolio />
      <Blog />
      <Contact />
      <Testimonial />
    </>
  );
};

export default Home;
