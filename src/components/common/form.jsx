import React, { Component } from 'react';
import Input from "./input.jsx";

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


}
 
export default Form;