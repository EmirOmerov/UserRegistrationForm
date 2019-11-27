import React from 'react';
import FormUserDetails from './FormUserDetails.js';
import FormPersonalDetails from './FormPersonalDetails.js';
import Confirm from './Confirm.js';
import Success from './Success.js';


export class UserForm extends React.Component{
    state ={
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        age:'',
        occupation:'',
        city:''  
    }
    // proceed to next step

    nextStep =()=>{
        const {step} = this.state;
        this.setState({
            step:step+1
        });
    }
    // go to prev setup
    prevStep =()=>{
        const {step} = this.state;
        this.setState({
            step:step-1
        
        });
    }
    //handle fields change
    handleChange = input =>e =>{
        this.setState({[input]:e.target.value});
    }

    render(){
        const {step}=this.state;
        const {firstName, lastName, email,occupation,age,city}=this.state;
        const values ={firstName, lastName, email,age,occupation,city}
       

       switch(step){
        case 1:
           return (
               <FormUserDetails
               nextStep={this.nextStep}
               handleChange={this.handleChange}
               values = {values}
               />
           );
           case 2:
               return(
                <FormPersonalDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                prevStep={this.prevStep}
                values = {values}
                />  
               );
            case 3:
                return(
                    <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values = {values}
                    />
                )
            case 4:
                return(
                    <Success
                    values={values}
                    />
                )
       }
    }

}
