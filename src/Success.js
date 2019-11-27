import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export default class Success extends Component {
    render() {
        const {values: {firstName, lastName,email,age,occupation,city}}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment style={{backgroundColor:"indigo"}}>
                    <AppBar title ="Updated User Details"/>
                    <List>
                        <ListItem
                        primaryText="First Name"
                        secondaryText={firstName}
                        />
                        <ListItem
                        primaryText="Lasta Name"
                        secondaryText={lastName}
                        />
                         <ListItem
                        primaryText="Email:"
                        secondaryText={email}
                        />
                        <ListItem
                        primaryText="Occupation"
                        secondaryText={occupation}
                        />
                        <ListItem
                        primaryText="Age"
                        secondaryText={age}
                        />
                        <ListItem
                        primaryText="City"
                        secondaryText={city}
                        />
                    </List>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles={
    button:{
        margin:15
    }
}
