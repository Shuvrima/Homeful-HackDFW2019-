import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Mapimp from './Mapimp.js';
import { Row, Container, Col} from 'react-bootstrap';
var map
class FindCharity extends Component {
    constructor(){
        super();
        this.state={
            lat:'' ,
            lng:''
          }
    }

    componentDidMount(){
        var that = this;
        var plat;
        var plng;
        
        // var myLvar latLong = ipinfo.loc.split(",");atlng;
        //current location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              plat: position.coords.latitude,
              plng: position.coords.longitude
            };
            that.setState({lat:32.7839958,lng:-96.7675791});

          }, function(failure) {
            // console.log(failure);
            that.setState({lat:'32.7471673',lng:'-96.7675791'})
            var pos = {
                plat: '29.7471673',
                plng: '-95.59599779999999'
              };
          
          });
        }
    
        else {
          console.log("there");
        //   handleLocationError(false, infoWindow, map.getCenter());
        }
      }

    render() {

        console.log(this.state.lat);
        return (
            <div>
                <Typography variant="h1" style={{ color: 'white', textAlign: 'center' }} paragraph>
                    Welcome 
                </Typography>
                <h3 style={{ color: 'white', textAlign: 'center' }}>Nearby shelters</h3>
                <Container>
                    <Row style={{textAlign:"center",margin:'auto'}}>
                        <Mapimp lat={this.state.lat} lng={this.state.lng}/>
                    </Row>
                </Container>
            </div>
        )
    }
}


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

FindCharity.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(FindCharity);