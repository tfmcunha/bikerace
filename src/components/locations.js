import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }


  render() {     

    var riders = this.props.riders;

    return (

          <Map 
              google= {this.props.google}           
              initialCenter={{
                lat: 40.02, 
                lng: -105.26
              }}
              zoom={12}
              onClick={this.onMapClicked}
            >
    	
          	{riders.map(rider => (
              <Marker
                      key={rider.id}
                      title={rider.first_name}
                      name={rider.first_name+' '+rider.last_name}
                      position={{lat: rider.latitude, lng: rider.longitude}}
                      onClick={this.onMarkerClick} />
                 		 
          	))}         

            <InfoWindow
              marker = { this.state.activeMarker }
              visible = { this.state.showingInfoWindow }
            >
                <div>
                  <h2>{this.state.selectedPlace.name}</h2>
                </div>
            </InfoWindow>
          </Map>    
        
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GM_API_KEY)
})(Locations)
