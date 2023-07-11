import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>

        <div className="first-des">
          <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>

          <div className="image">
            <img alt="img" src={this.props.img1} />
            <img alt="img" src={this.props.img2} />
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationData;
