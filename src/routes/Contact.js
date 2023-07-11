import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/contact.jpg";

function Contact() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Contact Us"
        btnClass="hide"
      />
    </>
  );
}
export default Contact;
