import React from 'react';

import './card.styles.css';

export const Card = (props) => {
    const {value} = props;
    return (
        <li className="card">
            <div className="card-content">{value}</div>
        </li>
    );
}