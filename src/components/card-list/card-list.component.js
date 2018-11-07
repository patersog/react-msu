import React from 'react'

import {Card} from '../card';
import {getRandomIntInclusive} from './utils';

import './card-list.styles.css'

export const CardList = (props) => {

    const {cards, add, remove} = props;

    const cardListItems = cards.map((card, index) => (<Card value={card.value} key={index}/>));

    const handleAdd = () => {
        const card = {value: getRandomIntInclusive(0, 100)}
        add(card);
    }

    const handleRemove = () => {
        remove();
    }

    return (
        <div className="list-container">
            <div className="list-action-bar">
                <button className="btn" onClick={handleAdd}>Add</button>
                <button className="btn" onClick={handleRemove}>Remove</button>
            </div>
            <ul className="list">
                {cardListItems}
            </ul>
        </div>
    )
}