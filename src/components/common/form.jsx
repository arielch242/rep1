import React, { Component } from 'react';
import Input from "./input.jsx";
import Joi from 'joi-browser';

class Form extends Component {
    state = {  }

    validate = () => {
        const {error} = Joi.validate(this.state.data,this.schema, {abortEarly: false});

        if (!error) return null;

        const errors = {};
        for(let item of error.details){
            errors[item.path[0]] = item.message;
        }
        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate()
    }
    
    handleChange = ({ currentTarget: input }) => {
        const data = {...this.state.data};
        data[input.name]=input.value;
       // console.log(data);
        this.setState({data});
      };

    renderInput(name, placeholder, type="text"){
        const {data} = this.state;
        return (
            <Input
            type={type}
            name={name}
            label={name}
            placeholder={placeholder}
            onChange={this.handleChange}
            value={data[name]}
            />
        )
    }

    renderButton(label){
        return <button className="btn btn-primary pl-4">{label}</button>;
    }

}
 
export default Form;