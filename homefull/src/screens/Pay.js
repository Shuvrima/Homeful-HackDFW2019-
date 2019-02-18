import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, withTheme, MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
// import Loadable from 'react-loading-overlay'

class Pay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        }
    }

    render() {
        const { classes, theme } = this.props;

        // const handleSubmit = () => {
            
        // }

        return (
            <div style={{textAlign:'center'}}>
                <h1 style={{color:'white'}}>
                    You are one step away from booking a room!
                </h1>
            <div style={formStyle}>
                Please enter the following information:
                <div style={{display: 'block', padding: '10px'}}>
                    <TextField
                    id="outlined-dense"
                    label="Credit Card Number"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-dense"
                    label="CVC"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-dense"
                    label="First Name"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-dense"
                    label="Last Name"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-dense"
                    label="Month of Expiry"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-dense"
                    label="Year of Expiry"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                </div>
                <Button variant="contained" component={Link} to="/congratulations" color="secondary" className={classes.button}>
                    PAY
                </Button>
            </div>
            </div>
            )
        }
    }

    const formStyle = {
        backgroundColor: 'rgb(200,200,200)', 
        textAlign:'center',
        maxWidth: '500px',
        margin: 'auto',
        marginTop: '30px',
        padding: '20px 20px 20px 20px',
        display: 'block'
    };

    const styles = theme => ({
        button: {
            margin: theme.spacing.unit,
        },
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing.unit,
          marginRight: theme.spacing.unit,
        },
        dense: {
          marginTop: 16,
        },
        menu: {
          width: 200,
        },
      });

Pay.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pay);
