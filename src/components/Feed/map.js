import React,{ useState } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'

const TOKEN="pk.eyJ1IjoicHJvY2hldGEiLCJhIjoiY2tlbGo2ZHd3MnFvbTJ5bHRoa2xsZ3JlNiJ9.OiOMINkM6TAiIPDtXdkzXg";


export default function Map(){

  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: 900,
    latitude: 0,
    longitude: 0,
    zoom: 2
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })
  
  return (
    <div style={{ margin: '0 auto'}}>
      <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>GeoLocator: Click To Find Your Location or click <a href="/search">here</a> to search for a location</h1>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  )
}