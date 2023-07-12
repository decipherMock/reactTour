import ITservice1 from "../assets/01.jpg";
import ITservice2 from "../assets/02.jpg";
import ITservice3 from "../assets/03.jpg";
import ITservice4 from "../assets/04.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";



const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>


      <DestinationData
      className="first-des"
       
        heading="Fully managed IT solutions & support"
        text="ITVET is a world-leading provider of 
        reliable and secure IT solutions and support.
         As your trusted tech partner, we manage 
         all aspects of your IT estate to improve 
         operational efficiency and drive business
          growth. We’ve set up resilient IT solutions 
          for hundreds of the world’s best known 
          brands and we’ll do the same for your business."
        img1={ITservice1}
        img2={ITservice2}
      />

      <DestinationData
       className="first-des-reverse"
        heading="Who we work with"
        text="We specialise in IT solutions and support for the commercial 
        property industry. We understand the unique challenges the industry 
        faces and the best IT solutions to overcome them."
        img1={ITservice3}
        img2={ITservice4}
      />
    </div>
  );
};
export default Destination;
