import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';


const MAPBOX_TOKEN='pk.eyJ1IjoibmllY2V5MDEyMyIsImEiOiJjanVvaGVqYmwwY28yM3lsandscmphZWwwIn0.kg82PoOkwQ5fF7hagjGaQw'

class Map extends Component {
    constructor(){
        super()
        this.state ={
            viewport: {
                width: 400,
                height: 400,
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 8
              }
        }
    }
  
    render() {
        const { viewport } = this.state;
     
        return (
         <ReactMapGL
          width={viewport.width}
          height={viewport.height}
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          zoom={viewport.zoom}
    
    mapStyle="mapbox://styles/mapbox/light-v9"
    onViewportChange={(viewport) => this.setState({viewport})}
    mapboxApiAccessToken={MAPBOX_TOKEN}
           />
        );
    }
}

export default Map;