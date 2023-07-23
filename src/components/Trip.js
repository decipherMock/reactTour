import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/remote.webp"
import Trip2 from "../assets/medbox.webp"
import Trip3 from "../assets/medcord.jpg"

function Trip(){
    return(
        <div className="trip">
          <h1>Products & Solutions</h1>
          <p>We Engineer world-class Healthcare Solutions using hardware & software solutions</p>
          <div className="tripcard">
            <TripData 
             image={Trip1}
             heading="RemoteCare"
             text="We place our environmental commitments at the heart of our business operations and processes."
            />

<TripData 
             image={Trip2}
             heading="Medbox"
             text="We employ a circular economy business model wherever possible, saving precious resources."
            />

            <TripData 
             image={Trip3}
             heading="Medcord"
             text="The main objective of running our business is to do good rather than just generate profits and growth."
            />
          </div>
        </div>
    )
}
export default Trip;