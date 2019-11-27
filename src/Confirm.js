import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export default class FormPersonalDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values: {firstName, lastName,email,age,occupation,city}}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment style={{backgroundColor:"indigo"}}>
                    <AppBar title ="Confirm User Data"/>
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
                   
                    <RaisedButton
                    label="Confirm & Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}>
                    </RaisedButton>

                    <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}>

                    </RaisedButton>
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
