import React, { useState } from 'react';
import Card from './lib/Card';
import CardDeck from './lib/CardDeck';
import './cards.css';
import PlayCard from './components/PlayCard.tsx';

const App: React.FC = () => {
    const [cards, setCards] = useState<Card[]>([]);

    const giveCards = () => {
        const deck = new CardDeck();
        setCards(deck.getCards(5));
    };

    return (
        <div>
            <button onClick={giveCards}>Раздать карты</button>
            {cards.length > 0 && (
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <PlayCard key={index} rank={card.rank} suit={card.suit} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;
