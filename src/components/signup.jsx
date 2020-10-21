<<<<<<< HEAD
import React, { Component } from 'react';
import PageHeader from './common/pageHeader';

class Signup extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <PageHeader titleText="Signup"/>
            </div>
=======
import React from 'react';
import Joi from 'joi-browser';
import {toast} from 'react-toastify';

import {apiUrl} from '../config.json';
import http from '../services/httpService'

import PageHeader from './common/pageHeader';
import Form from './common/form';

class Signup extends Form {
    state = {
        data: {
          name: "",
          email: "",
          password: "",
        },
        errors:{}
      };

      schema = {
          email: Joi.string().required().email().label('email'),
          password:Joi.string().required().min(6).label('password'),
          name:Joi.string().required().min(2).label('name'),
      };

      async doSubmit(){
          const {history} = this.props;
          const data = {...this.state.data,biz:false};
          try{
          await http.post(`${apiUrl}/users`,data);
          toast('נפתח חשבון חדש');
          history.replace("/signin");
          } catch (error){
              if( error.response && error.response.status === 400){
                this.setState({
                    errors:{
                        ...this.state.errors,
                        email:"Email is already registered",
                },
               });
              }
          }

      }

    render() { 
        return ( 
            <div className="container min-vh-100 bg-img text-white text-right">
            <PageHeader titleText="הרשמה"/>
                <div className="row">
                    <div className="col-lg-6 mx-auto text-right">
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput('name','שם')}
                            {this.renderInput('email','דוא"ל')}
                            {this.renderInput('password','סיסמה')}
                            {this.renderButton('שלח')}
                        </form>
                    </div>
                </div>
            </div>
            
>>>>>>> 8c86c5d7fd1878c9053c382964cf3f5720e94fab
         );
    }
}
 
export default Signup;
