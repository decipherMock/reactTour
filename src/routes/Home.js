import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
function Home() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1464211892349-8e50a8045e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Your Journey Your Story"
        text="Choose Your Fovourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />

      <Destination />
    </>
  );
}
export default Home;
