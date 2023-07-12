import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/contact.jpg"
import Trip2 from "../assets/02.jpg"
import Trip3 from "../assets/01.jpg"

function Trip(){
    return(
        <div className="trip">
          <h1>Recent Trips</h1>
          <p>You Can discover unique destinations using Google Maps.</p>
          <div className="tripcard">
            <TripData 
             image={Trip1}
             heading="Environment"
             text="We place our environmental commitments at the heart of our business operations and processes."
            />

<TripData 
             image={Trip2}
             heading="Circular economy"
             text="We employ a circular economy business model wherever possible, saving precious resources."
            />
            <TripData 
             image={Trip3}
             heading="Ethics & integrity"
             text="The main objective of running our business is to do good rather than just generate profits and growth."
            />
          </div>
        </div>
    )
}
export default Trip;