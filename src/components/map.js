import React from "react";
import GoogleMapReact from "google-map-react";
import img3 from "../assets/3.jpg";

import { withGoogleMap, GoogleMap, Marker, Map } from "react-google-maps";

const LocationPin = ({ text }) => (
  <div className="pin">
    <img src={img3} alt="carousel" />
    <p>{text}</p>
  </div>
);

const InitialMap = ({ zoomLevel, location }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyCnjpaaMLjRv5KQ4cQ-5s9DfRYM-9Iwsd8" }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    >
      <LocationPin
        lat={location.lat}
        lng={location.lng}
        text={location.address}
      />
    </GoogleMapReact>
  );
};
export default InitialMap;
