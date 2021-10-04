import React from "react"

import GoogleMapReact from "google-map-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapPin } from "@fortawesome/free-solid-svg-icons"

const defaultProps = {
  center: {
    lat: 25.766738,
    lng: -80.195118,
  },
  zoom: 15,
}

const containerStyle = {
  height: "400px",
  width: "80%",
  textAlign: "center",
  margin: "auto",
}

const AnyReactComponent = ({ text }) => (
  <section
    id="map"
    style={{ fontSize: "16", color: "black", textAlign: "center" }}
  >
    <FontAwesomeIcon size="2x" icon={faMapPin} />
    {text}
  </section>
)

export default function GoogleMaps() {
  return (
    <div style={containerStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.GATSBY_GOOGLE_API_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={25.766738}
          lng={-80.195118}
          text={"Blackbird Ordinary"}
        />
      </GoogleMapReact>
    </div>
  )
}
