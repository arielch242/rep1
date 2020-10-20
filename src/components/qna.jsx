import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cardService from '../services/cardService';
import Card from './card';
import PageHeader from './common/pageHeader';

/* import Qcard from './qcard';
 */
class QnA extends Component {
    state = { 
        cards:[]
     }

async componentDidMount(){
    const { data } = await cardService.getMyCards();
    console.log(data);
    if ( data.length > 0 ){
        this.setState({ cards: data });
    }
}

    render() { 
        const { cards } = this.state;
      //  console.log(typeof cards);
        return ( 
            <div className="container">
                <PageHeader titleText="שאלות ותשובות"/>
                <div className="row">
                    <div className="col-12">
                        שאלות 
                    </div>
                    <p>
                        Your cards in the list below... <br/>
                        <Link to="/create-card">שלח שאלה חדשה</Link>
                    </p>
                    <div className="row">
                        {cards.length > 0 && 
                          cards.map((card)=> <Card key={card._id} card={card}/> )}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default QnA;