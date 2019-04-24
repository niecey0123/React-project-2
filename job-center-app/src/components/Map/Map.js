import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import JobPin from './JobPin'
import JobInfo from './JobInfo'
import '../../Map.css'



const MAPBOX_TOKEN='pk.eyJ1IjoibmllY2V5MDEyMyIsImEiOiJjanVvaGVqYmwwY28yM3lsandscmphZWwwIn0.kg82PoOkwQ5fF7hagjGaQw'

class Map extends Component {
    constructor(){
        super()
        this.state ={
            viewport: {
                width: 725,
                height: 400,
                latitude:  40.730610,
                longitude: -73.935242,
                zoom: 9
              },
              popupInfo: null
        }
    this._renderMarker=this._renderMarker.bind(this)
    this._renderPopup=this._renderPopup.bind(this)
    
    }
    
    _renderMarker(listing, i){
        // console.log(`longitude`,listing.longitude)
        // console.log(`latitude`,listing.longitude)
        // // console.log(listing.scale)
        

        const lat = Number(listing.latitude);
        const lng = Number(listing.longitude);
        // console.log(lng)
        return(
       
         <Marker key={`listing-${i}`} longitude={lng} latitude={lat} >
             <JobPin size ={20} 
             onClick={()=>this.setState({popupInfo: listing})}/> 
            </Marker>
           
        )
        
    }
  
        _renderPopup() {
            const { popupInfo } = this.state;
            const lat = Number(popupInfo.latitude)
            const lng = Number(popupInfo.longitude)
            return (
              <Popup tipSize={5}
                anchor="top"
                longitude={lng}
                latitude={lat}
                onClose={() => this.setState({popupInfo: null})} >
                <JobInfo info={popupInfo} />
              </Popup>
            )
           }

  
    render() {
       

        const listing = this.props.listing
         listing.shift()
        //  console.log(listing)
       
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
            mapboxApiAccessToken={MAPBOX_TOKEN}>
            
            {listing.map(this._renderMarker) }
            {this.state.popupInfo && this._renderPopup()}
            
            </ReactMapGL>
        );
    }
}

export default Map;