import React from "react"

import GoogleMapReact from "google-map-react"

const defaultProps = {
  center: {
    lat: 25.766738,
    lng: -80.195118,
  },
  zoom: 15,
}

const containerStyle = {
  height: '400px',
  width: '100vw',
};

const AnyReactComponent = ({ text }) => <div style={{fontSize: '20px', color: 'black', textAlign: 'center'}}>{"🐦" + text}</div>

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
        text={'Blackbird Ordinary'}
      />
    </GoogleMapReact>
  </div>
  )
}
