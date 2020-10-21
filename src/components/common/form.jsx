import React, { Component } from 'react';
import Input from "./input.jsx";
<<<<<<< HEAD

class Form extends Component {
    state = {  }
    
    handleChange = ({ currentTarget: input }) => {
        const data = {...this.state.data};
        data[input.name]=input.value;
        console.log(data);
        this.setState({data});
      };

    renderInput(name, placeholder, type="text"){
        const {data} = this.state;
=======
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
>>>>>>> 8c86c5d7fd1878c9053c382964cf3f5720e94fab
        return (
            <Input
            type={type}
            name={name}
            label={name}
            placeholder={placeholder}
            onChange={this.handleChange}
            value={data[name]}
<<<<<<< HEAD
=======
            error={errors[name]}
>>>>>>> 8c86c5d7fd1878c9053c382964cf3f5720e94fab
            />
        )
    }

<<<<<<< HEAD
=======
    renderButton(label){
        return <button className="btn btn-primary pl-4" disabled={this.validate()}>{label}</button>;
    }
>>>>>>> 8c86c5d7fd1878c9053c382964cf3f5720e94fab

}
 
export default Form;