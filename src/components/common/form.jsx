import React, { Component } from 'react';
import Input from "./input.jsx";
import Joi from 'joi-browser';

class Form extends Component {
    state = { 
     }

    validate = () => {
        const {error} = Joi.validate(this.state.data,this.schema, {abortEarly: false});
        if (!error) return null;
        
        const errors = {};
        for(let item of error.details){
            errors[item.path[0]] = item.message;
        }
        return errors;
    }
    
    validateProperty = ({name,value}) => {
        const obj = {[name] : value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj,schema); 
        return error ? error.details[0].message :null;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors:errors || {} });
        if (errors) return
        this.doSubmit()
    };
    
    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage){
            errors[input.name] = errorMessage;
        } else
        {
            delete errors[input.name]
        }
        const data = {...this.state.data};
        data[input.name]=input.value;
        // console.log(data);
        this.setState({data,errors});
      };

    renderInput(name, placeholder, type="text"){
        const {data,errors} = this.state;
        return (
            <Input
            type={type}
            name={name}
            label={name}
            placeholder={placeholder}
            onChange={this.handleChange}
            value={data[name]}
            error={errors[name]}
            />
        )
    }

    renderButton(label){
        return <button className="btn btn-primary pl-4" disabled={this.validate()}>{label}</button>;
    }
}
 
export default Form;