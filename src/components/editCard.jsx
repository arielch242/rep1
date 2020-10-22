import React from 'react';
import Form from './common/form'
import PageHeader from './common/pageHeader';
import Joi from 'joi-browser';
import cardService from '../services/cardService';
import { toast } from 'react-toastify';


class EditCard extends Form {
    state = { 
        data:{
            bizName: "",
            bizDescription: "",
            bizAddress: "",
            bizPhone: "",
       //     bizImage: ""
        },
        errors:{}
     };

     schema = {
        _id:Joi.string(),
        bizName: Joi.string().min(2).max(255).required().label('Name'),
        bizDescription:  Joi.string().min(2).max(1024).required().label('Description'),
        bizAddress:  Joi.string().min(2).max(400).required().label('Address'),
        bizPhone:  Joi.string().min(9).max(10).required().regex(/^0[2-9]\d{7,8}$/).label('Phone'),
     //   bizImage:  Joi.string().min(11).max(1024).uri().allow("").label('Image')
     };
     
     mapToViewModel(card){
         return {
            _id:card._id,
            bizName:card.bizName,
            bizDescription : card.bizDescription,
            bizAddress:card.bizAddress,
            bizPhone:card.bizPhone,
         }
     }

     async componentDidMount(){
         const cardId = this.props.match.params.id;
         const {data} = await cardService.getCard(cardId);
       //  console.log('date by getcard ',data);
         this.setState({ data : this.mapToViewModel(data) })
     }

     doSubmit = async () => {
     const {data} = { ...this.state };
    /*  if(!data.bizImage) { 
         delete data.bizImage;      } */
      await cardService.setCard(data);
      toast('card was updated');
      this.props.history.replace("/qna"); 
    };

    handleCancel = () => {
        this.props.history.push("/qna");
    }

    render() { 
        return (  
            <div className="container min-vh-100 bg-img text-white text-right">
                <PageHeader titleText="עדכון הכרטיס"/>
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
                    {this.renderButton("עדכן")}
                    <button className="btn btn-secondary ml-2" onClick={this.handleCancel}>
                        בטל</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default EditCard;
