import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/service.jpg";

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
    </>
  );
}
export default Service;
