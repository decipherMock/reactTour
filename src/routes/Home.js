import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import HomeImg from "../assets/Health-law-telehealth-1.jpg";


function Home() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Advancing Healthcare with Tech Innovations."
        text="Choose Your Fovourite Destination"
        buttonText="Our Projects"
        url="/"
        btnClass="show"
      />

      <Destination />
      <Trip />
      <Footer />

    </>
  );
}
export default Home;
