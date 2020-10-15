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
        errors:{}
      };

      schema = {
          email: Joi.string().required().email().label('email'),
          password:Joi.string().required().min(6).label('password'),
          name:Joi.string().required().min(2).label('name'),
      };

      doSubmit(){
          console.log('submitted ',this.state);
      }

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
                            {this.renderInput('name','שם')}
                            {this.renderInput('email','דוא"ל')}
                            {this.renderInput('password','סיסמה')}
                            {this.renderButton('שלח')}
                        </form>
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default Signup;
