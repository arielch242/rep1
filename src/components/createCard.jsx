import React from 'react';
import Form from './common/form'
import PageHeader from './common/pageHeader';
import Joi from 'joi-browser';
import cardService from '../services/cardService';
//import { toast } from 'react-toastify';

class CreateCard extends Form {
    state = { 
        data:{
            bizName: "",
            bizDescription: "",
            bizAddress: "",
            bizPhone: "",
            bizImage: ""
        },
        errors:{}
     };

     schema = {
        bizName: Joi.string().min(2).max(255).required().label('Name'),
        bizDescription:  Joi.string().min(2).max(1024).required().label('Description'),
        bizAddress:  Joi.string().min(2).max(400).required().label('Address'),
        bizPhone:  Joi.string().min(9).max(10).required().regex(/^0[2-9]\d{7,8}$/).label('Phone'),
        bizImage:  Joi.string().min(11).max(1024).uri().allow("").label('Image')
     };

     doSubmit = async () => {
     const {data} = { ...this.state };
   /*   if(!data.bizImage) { 
         delete data.bizImage;      } */
      await cardService.createCard(data);
      this.props.history.replace("/about"); 
    };

    render() { 
        return (  
            <div className="container min-vh-100 bg-img text-white text-right">
                <PageHeader titleText="צור כרטיס עסקים"/>
                <div className="row">
                    <div className="col-12">
                        <p>פתח</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mx-auto text-right">
                        <form onSubmit={this.handleSubmit} autoComplete="off" noValidate method="POST">
                        {this.renderInput('bizName','Business Name')}
                    {this.renderInput('bizDescription','Business Description')}
                    {this.renderInput('bizAddress','Business Address')}
                    {this.renderInput('bizPhone','Business Phone')}
                    {this.renderInput('bizImage','Business Image')}
                    {this.renderButton("Create Card")}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CreateCard;
