import React from 'react';

interface CardProps {
    rank: string;
    suit: string;
}

const suitSymbols: { [key: string]: string } = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠',
};

const PlayCard: React.FC<CardProps> = ({ rank, suit }) => {
    return (
        <span className={`card rank-${rank} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{suitSymbols[suit]}</span>
    </span>
    );
};

export default PlayCard;
