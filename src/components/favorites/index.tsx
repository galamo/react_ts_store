import React from "react";
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

class FavoritesPage extends React.Component<any, any> {


    render() {
        const { favorites } = this.props; // component props
        console.log(favorites)
        return (
            <div>
                <ListComponent items={favorites} />
            </div>
        )
    }
}



function ListComponent(props: any) {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {props.items.map((country: any) => {
                const { name, region } = country
                return (
                    <ListItem>
                        <ListItemText primary={name} secondary={region} />
                    </ListItem>
                )
            })}

        </List >
    );
}




const mapStateToProps = (state: any) => { // state from redux
    const { favorites } = state;
    return { favorites };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
    };
};
export default connect(
    mapStateToProps,
    null
)(FavoritesPage);
