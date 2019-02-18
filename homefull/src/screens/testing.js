import React, { Component } from 'react';
import HouseCard from '../modules/Card';
import Grid from '@material-ui/core/Grid';

export default class Test extends Component {
	render() {
		return (
            <div>
                <h1 style={{color:'white'}}>Your Postings</h1>
                <Grid container >
                        <HouseCard startDate='Feb 16' endDate='Feb 17' address='221B Baker St' city='Dallas' state='TX' zipcode='77005'  />
                        <HouseCard />
                </Grid>
            </div>
		)
	}
}