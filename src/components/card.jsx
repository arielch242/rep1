import React from 'react';

const Card = ({card}) => {
    return <div className="col-md-6 col-lg-4 mt-3">
        <div className="card">
            <img src="" width="100" alt="" className="p-2"/>
            <div className="card-body">
                <h5 className="card-titile">
                    <p className="card-text"></p>
                    <p className="card-text border-top pt-2"></p>
                </h5>
            </div>
        </div>
    </div>
}

export default Card;