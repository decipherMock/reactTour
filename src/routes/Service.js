import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/service.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Service() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Our Services"
        btnClass="hide"
      />

      <Trip />
      <Footer />
    </>
  );
}
export default Service;
