import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
var map;
const mapStyles = {
  width: '75%',
  height: '500px'
};

export class Mapimp extends Component {
  constructor(){
    super();
    this.markat=this.markat.bind(this);
    this.test=this.test.bind(this);
    this.state={
      jsn:[],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  componentDidMount() {

    // let jsn = [];
     fetch('http://ec2-3-82-226-163.compute-1.amazonaws.com:8080/room/search?fromDate=17-02-2019&toDate=18-02-2019&zipcode=75252',
         {
             crossDomain: true
         })
         .then(response => response.json())
         .then((data) =>
             this.setState({
                 jsn: data
             }));
 }

  test(e){
    console.log(this.state.jsn);

  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };


  markat(p,q){
    console.log(p);
    return(
      <Marker title={'home location 2.'} name={'home 2'} position={{lat: p, lng: q}} onClick={this.onMarkerClick}></Marker>
    )
  }

  
    render() {
      // console.log(this.props.lat);
      // console.log(this.props.lng);
      // var google=this.props.google;
      var llat=parseFloat(this.props.lat);
      var llng=parseFloat(this.props.lng);
      
      var pos = {
        lat: llat,
        lng: llng
      };
      var pos1 = {
        lat: 28.7471673,
        lng: -96.59599779999999
      };
      // console.log(pos);
      var bounds = new this.props.google.maps.LatLngBounds();
      bounds.extend(pos);
      bounds.extend(pos1);

      return (
        <div>
          <Map
          google={this.props.google}
          scrollwheel={false}
          style={mapStyles}
          initialCenter={{
          lat: llat,
          lng: llng
          }}
          bounds={bounds}
          >
            {this.markat(llat,-96.7665918)}
            <Marker title={'home location.'} name={'home1'} position={{lat: 32.11266, lng: -96.7665918}} onClick={this.onMarkerClick}></Marker>
            <Marker title={'Current location.'} name={'My location'} onClick={this.onMarkerClick} position={{lat:parseFloat(this.props.lat),lng:parseFloat(this.props.lng)}} icon={{
              url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}}></Marker>
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>{this.state.selectedPlace.name}</div>
            </InfoWindow>

            
          </Map>
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB08XRdCu7b1Tmhk-QBoYqMiuWt8QalM_Q'
})(Mapimp)
