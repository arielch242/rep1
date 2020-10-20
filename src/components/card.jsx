import React from 'react';

const Card = ({card}) => {
    return <div className="col-md-6 col-lg-4 mt-3">
        <div className="card">
            <img src="" width="100" alt="" className="p-2"/>
            <div className="card-body pt-2">
                <h5 className="card-title">{card.bizName}</h5>
                    <p className="card-text">{card.bizDescription}</p>
                    <p className="card-text border-top pt-2">{card.bizAddress}</p>
            </div>
        </div>
    </div>
}

export default Card;