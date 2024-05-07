import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CardStack from "@/components/compHelper/CardStack";
import About from "@/components/About";
import Features from "@/components/Features";
// import FAQ from "@/components/FAQ";
// import Contact from "@/components/Contact";

function Landing() {
  return (
    <>
      <NavBar />
      <Hero />
      <CardStack />
     {/* <About /> */}
       {/* <Features />
      <FAQ />
      <Contact /> */}
      <Footer />
    </>
  );
}

export default Landing;