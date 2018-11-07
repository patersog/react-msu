export const addCard = (card) => (prevState) => {
    return{ cards: [...prevState.cards, card]}
}

export const removeCard = () => (prevState) => {
    console.log(prevState);
    prevState.cards.pop();
    return { cards: [...prevState.cards]}
}