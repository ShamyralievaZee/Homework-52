import React, { useState, useEffect } from 'react';
import Card from './lib/Card';
import CardDeck from './lib/CardDeck';
import './cards.css';
import PlayCard from './components/PlayCard.tsx';
import PokerHand     from "./lib/PokerHand.ts";

const App: React.FC = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [handOutcome, setHandOutcome] = useState<string | null>(null);
    const [deck, setDeck] = useState<CardDeck | null>(new CardDeck());

    const dealCards = () => {
        if (deck) {
            const newCards = deck.getCards(5);
            setCards(newCards);

            const pokerHand = new PokerHand(newCards);
            setHandOutcome(pokerHand.getOutcome());

            // Update deck state to reflect changes
            setDeck(deck.hasCards() ? deck : null);
        }
    };

    useEffect(() => {
        if (deck && !deck.hasCards()) {
            setDeck(null); // No more cards available
        }
    }, [deck]);

    return (
        <div  className='itemContainer'>
            {deck && deck.hasCards() ? (
                <button onClick={dealCards} className='giveButton'>Раздать карты</button>
            ) : (
                <p>Не осталось кард в калоде</p>
            )}
            {cards.length > 0 && (
                <div>
                    <div className="playingCards faceImages">
                        {cards.map((card, index) => (
                            <PlayCard key={index} rank={card.rank} suit={card.suit} />
                        ))}
                    </div>
                    <div>Результат: {handOutcome}</div>
                </div>
            )}
        </div>
    );
};

export default App;


