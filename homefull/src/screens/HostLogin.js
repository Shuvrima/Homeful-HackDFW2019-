import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

class HostLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ownerId: 3,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        }
    }

    render() {

        const { classes, theme } = this.props;

        const updateFirstName = event => {
            this.setState({ firstName: event.target.value });
        };

        const updateLastName = event => {
            this.setState({ lastName: event.target.value });
        };

        const updateEmail = event => {
            this.setState({ email: event.target.value });
        };

        const updatePhone = event => {
            this.setState({ phone: event.target.value });
        };

        const handleClick = () => {
            this.props.handler(this.state.firstName);
        }


        return (
            
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ color: 'white' }}>
                    Sign up to host
                </h1>
                <div style={formStyle}>
                    Please enter the following information:
                <div style={{ display: 'block', padding: '10px' }}>
                        <TextField
                            value={this.state.firstName}
                            onChange={event => updateFirstName(event)}
                            id="outlined-dense"
                            label="First Name"
                            className={classNames(classes.textField, classes.dense)}
                            margin="dense"
                            variant="outlined"
                        />
                        <TextField
                            value={this.state.lastName}
                            onChange={event => updateLastName(event)}
                            id="outlined-dense"
                            label="Last Name"
                            className={classNames(classes.textField, classes.dense)}
                            margin="dense"
                            variant="outlined"
                        />
                        <TextField
                            value={this.state.email}
                            onChange={event => updateEmail(event)}
                            id="outlined-dense"
                            label="Email"
                            className={classNames(classes.textField, classes.dense)}
                            margin="dense"
                            variant="outlined"
                        />
                        <TextField
                            value={this.state.phone}
                            onChange={event => updatePhone(event)}
                            id="outlined-dense"
                            label="Phone"
                            className={classNames(classes.textField, classes.dense)}
                            margin="dense"
                            variant="outlined"
                        />
                    </div>
                    <Button variant="contained" onClick={handleClick} color="primary" className={classes.button}>
                        submit
                </Button>
                </div>
            </div>
        )
    }
}

const formStyle = {
    backgroundColor: 'rgb(200,200,200)',
    textAlign: 'center',
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

HostLogin.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(HostLogin);
