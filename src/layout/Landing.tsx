import "@/vendor/bootstrap/css/bootstrap.min.css";
import "@/vendor/bootstrap-icons/bootstrap-icons.css";
import "@/vendor/glightbox/css/glightbox.css";
import "@/vendor/swiper/swiper-bundle.min.css";
import "@/vendor/aos/aos.css";
import "@/assests/main.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";

function Landing() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <FAQ />
      
      <Footer />
    </>
  );
}

export default Landing;