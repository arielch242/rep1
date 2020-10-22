import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    return <div className="col-md-6 col-lg-4 mt-3">
        <div className="card">
            <img src="" width="100" alt="" className="p-2"/>
            <div className="card-body">
                <h5 className="card-title">{card.bizName}</h5>
                    <p className="card-text">{card.bizDescription}</p>
                    <p className="card-text border-top pt-2">{card.bizAddress}</p>
            </div>
        </div>
        <Link to={`/cards/edit/${card._id}`}>Edit</Link>
        <Link className="ml-2" to={`/cards/delete/${card._id}`}>Delete</Link>
    </div>
}

export default Card;