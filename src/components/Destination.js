import ITservice1 from "../assets/ashkan-forouzani-ignxm3E1Rg4-unsplash.jpg";
import ITservice2 from "../assets/Nh.jpg";
import ITservice3 from "../assets/national-cancer-institute-L8tWZT4CcVQ-unsplash.jpg";
import ITservice4 from "../assets/owen-beard-DK8jXx1B-1c-unsplash.jpg";
import ITservice5 from "../assets/luke-chesser-rCOWMC8qf8A-unsplash.jpg";
import ITservice6 from "../assets/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";



const Destination = () => {
  return (
    <div className="destination">
      <h1>Healthcare Automation</h1>
      <p>Our mission is to revolutionize the healthcare industry by providing state-of-the-art technologies that 
        enhance patient care, streamline operations, and empower medical professionals.</p>


      <DestinationData
      className="first-des"
       
        heading="OPD & IPD Automation Solutions"
        text="Our EHR platform is designed to streamline the documentation and management of patient data. 
        With our user-friendly interface and robust features, healthcare providers can easily access and update patient records, 
        automate workflows, and improve collaboration across departments."
        img1={ITservice1}
        img2={ITservice2}
      />

      <DestinationData
       className="first-des-reverse"
        heading="Chronic & Diabetic Patient Management"
        text="We specialise in IT solutions and support for the commercial 
        property industry. We understand the unique challenges the industry 
        faces and the best IT solutions to overcome them."
        img1={ITservice3}
        img2={ITservice4}
      />

<DestinationData
      className="first-des"
       
        heading="Rapid Vital Collection Device"
        text="We have developed an advanced patient monitoring system that combines wearable devices with intelligent software. 
        This innovative solution allows healthcare professionals to remotely monitor vital signs, track patient activity levels, 
        and receive real-time alerts, enabling early intervention and personalized care."
        img1={ITservice5}
        img2={ITservice6}
      />

    </div>
  );
};
export default Destination;
