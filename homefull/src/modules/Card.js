import React from 'react';
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    card: {
        maxWidth: 300,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});



class HouseCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleBook = this.handleBook.bind(this);

        this.state = {
            redirect: false,
        };
    }


    handleBook(e){
        
        var availId = this.props.availId;
        var from = this.props.startDate;
        var to = this.props.endDate;
        var rid = this.props.roomId;
        const proxyurl = 'https://cors-anywhere.herokuapp.com/';
        const targeturl = 'http://ec2-3-82-226-163.compute-1.amazonaws.com:8080/reserve';
        const data = {
            roomId: rid,
            // city: this.state.city,
            renterId:2,
            charityId: 3,
            bookFrom: from,
            bookTo: to,
            availabilityId: availId,
        };
        fetch(proxyurl + targeturl, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(posts => {
                console.log(posts);
            })
            .catch(e => {
                console.log(e);
                return e;
            });
        this.setState({redirect: true});
        

    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to='/pay' />
        }

        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    //   avatar={
                    //     <Avatar aria-label="Recipe" className={classes.avatar}>
                    //       R
                    //     </Avatar>
                    //   }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={this.props.address + ', '  + this.props.state + ',' + this.props.zipcode}
                // subheader="Posted on September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image={require("../assets/room1.jpeg")}
                    title="room1"
                />
                <CardContent>
                    <Typography component="p">
                        {this.props.startDate} to {this.props.endDate}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Book Me">
                        <button onClick={this.handleBook}> Book Me</button>
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
}

HouseCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HouseCard);
