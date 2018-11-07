import React, {Component} from 'react';
import './app.styles.css';

import {CardList} from '../card-list';

import {addCard, removeCard} from './app.state';


export class App extends Component{

    state = {
        cards: [
            {value: 27},
            {value: 9},
            {value: 53},
        ]
    }

    handleAddCard = (card) => {
        this.setState(addCard(card));
    }

    handleRemoveCard = () => {
        this.setState(removeCard());
    }

    render(){
        const {cards} = this.state;
        return (
        <main className="app-container">
            <CardList cards={cards} add={this.handleAddCard} remove={this.handleRemoveCard}/>
        </main>);
    }
}