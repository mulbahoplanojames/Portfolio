import AboutMe from "@/components/About";
import { Hero } from "@/components/Hero";
import Services from "@/components/Services";
import { Technologies } from "@/components/Technologies";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Services />
      <Technologies />
    </>
  );
};

export default Home;
