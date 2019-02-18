import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import HouseCard from '../modules/Card';
import Grid from '@material-ui/core/Grid';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import classNames from 'classnames';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

class Charity extends Component {


    constructor(props) {
        super(props);
        this.state = {
            jsn: [],
            searchZip: '75252',
            from:'17-02-2019',
            to:'18-02-2019'
        };
        this.saveZip = this.saveZip.bind(this);
        this.saveFromDate = this.saveFromDate.bind(this);
        this.saveToDate = this.saveToDate.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
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
                    jsn: data,
                    szip: '75252'
                }));
    }


    handleSearch(e) {
        e.preventDefault();
        var self = this;
        var x = this.state.szip, from = this.state.from, to = this.state.to;
        var url = 'http://ec2-3-82-226-163.compute-1.amazonaws.com:8080/room/search?fromDate='+from+'&toDate='+to+'&zipcode=' + x;
        fetch(url,
            {
                crossDomain: true
            })
            .then(response => response.json())
            .then((data) =>
                self.setState({
                    jsn: data,
                    szip: x
                }));

    }

    saveZip(e) {
        e.preventDefault();
        // alert(e.target.value);
        this.setState({
            szip: e.target.value
        });
    }

    saveFromDate(e) {
        e.preventDefault();
        // alert(e.target.value);
        this.setState({
            from: e.target.value
        });
    }

    saveToDate(e) {
        e.preventDefault();
        // alert(e.target.value);
        this.setState({
            to: e.target.value
        });
    }


    render() {
        //const { classes, theme } = this.props;
        console.log(this)
        return (

            <div style={{ color: 'white', textAlign:'center' }}>
                <h1 style={{marginTop: '20px'}} >
                    Search Rooms
                </h1>

                <div >

                    <SearchIcon onClick={this.handleSearch} />

                    <InputBase style={{ color: 'white' }}
                        placeholder="Search…" onChange={this.saveZip} />
<br/>
                    <InputBase style={{ color: 'white' }}
                        placeholder="From Date (DD-MM-YYYY)" onChange={this.saveFromDate} />
<br/>
                    <InputBase style={{ color: 'white' }}
                        placeholder="To Date (DD-MM-YYYY)" onChange={this.saveToDate} />
                </div>

                <br />

                <Typography variant="h1" style={{ color: 'white', textAlign: 'center' }} paragraph>
                    {this.state.jsn.map((obj) => (
                        <Grid >
                            {obj.availability.map((avaObj) => {
                                var fd = avaObj.availableFrom;
                                return <HouseCard startDate={fd} endDate={avaObj.availableTo}
                                    address={obj.room.address}
                                     state={obj.room.state } zipcode={obj.room.zipcode}
                                    roomId={obj.room.roomId} availId={avaObj.availabilityId}/>
                            })}
                        </Grid>
                    ))}
                </Typography>




            </div >
        )
    }
}


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

Charity.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};


export default withStyles(styles)(Charity);
