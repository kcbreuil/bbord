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
  width: "100%",
  textAlign: "center",
  paddingLeft: '1rem',
  paddingRight: '1rem',
}

const AnyReactComponent = ({ text }) => (
  <div
    id="map"
    style={{ fontSize: "24", fontFamily: 'Montserrat', color: "black", textAlign: "center" }}
  >
    <FontAwesomeIcon size="2x" icon={faMapPin} />
    {text}
  </div>
)

export default function GoogleMaps() {
  return (
    <section style={containerStyle}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: `${process.env.GATSBY_GOOGLE_API_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={25.766738}
          lng={-80.195118}
          text={"Blackbird Ordinary"}
        />
      </GoogleMapReact>
    </section>
  )
}
