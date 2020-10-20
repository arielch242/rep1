import React from 'react';
import Joi from 'joi-browser';
//import {toast} from 'react-toastify';

import {apiUrl} from '../config.json';
import http from '../services/httpService'
import userService from '../services/userService';

import PageHeader from './common/pageHeader';
import Form from './common/form';

class AuthorSignup extends Form {
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
          const data = {...this.state.data,biz:true};
          console.log(data);
          await http.post(`${apiUrl}/users`,data);
          await userService.login(data.email,data.password);
          console.log(userService.login(data.email,data.password));
          window.location = "/create-card";
          try{
          await http.post(`${apiUrl}/users`,data);
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
            <PageHeader titleText=" הרשמה למשיב"/>
                <div className="row">
                    <div className="col-12">
                        <p>הכנס את פרטיך</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mx-auto text-right">
                        <form onSubmit={this.handleSubmit} autoComplete="off" noValidate>
                            {this.renderInput('name','שם')}
                            {this.renderInput('email','דוא"ל')}
                            {this.renderInput('password','סיסמה')}
                            {this.renderButton('הבא')}
                        </form>
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default AuthorSignup;
