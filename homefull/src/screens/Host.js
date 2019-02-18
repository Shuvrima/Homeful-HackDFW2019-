import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import HostHost from './HostHost';
import HostLogin from './HostLogin';

class Host extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedUp: false,
            name: '',
        }
    }


    render() {
        const handleSignup = (name) => {
            this.setState({signedUp: true, name: name});
        };

        if (this.state.signedUp) {
            return <HostHost name={this.state.name} />;
        } else {
            return <HostLogin handler={handleSignup} />;
        }
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

Host.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(Host);
