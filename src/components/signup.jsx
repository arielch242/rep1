import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class Signup extends Form {
    state = {
        data: {
          name: "",
          email: "",
          password: "",
        },
      };

      schema = {
          email: Joi.string().required().email().label('Email'),
          password:Joi.string().required().min(6).label('Password'),
          name:Joi.string().required().min(2).label('Name'),
      };

    render() { 
        return ( 
            <div className="container h-100 bg-img">
                <div className="row">
                    <div className="col-12 mt-4">
                        <h1 className="text-white text-center">הירשם</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mx-auto text-right">
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput('Name','שם')}
                            {this.renderInput('Email','דוא"ל')}
                            {this.renderInput('Password','סיסמה')}
                            {this.renderButton('שלח')}
                        </form>
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default Signup;
