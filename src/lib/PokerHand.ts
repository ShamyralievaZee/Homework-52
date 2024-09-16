import Card from './Card';

export default class PokerHand {
    private hand: Card[];

    constructor(hand: Card[]) {
        this.hand = hand;
    }

    getOutcome(): string {
        const rankCounts: { [key: string]: number } = {};
        const suitCounts: { [key: string]: number } = {};

        this.hand.forEach(card => {
            rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
            suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
        });

        const isFlush = Object.values(suitCounts).includes(5);
        const ranksOrder = '23456789TJQKA';
        const sortedRanks = Object.keys(rankCounts).sort((a, b) => {
            return ranksOrder.indexOf(a) - ranksOrder.indexOf(b);
        });

        const isStraight = sortedRanks.length === 5 && (ranksOrder.indexOf(sortedRanks[4]) - ranksOrder.indexOf(sortedRanks[0]) === 4);
        const rankCountsValues = Object.values(rankCounts).sort((a, b) => b - a);

        if (isFlush && isStraight) return 'Straight flush';
        if (rankCountsValues[0] === 4) return 'Four of a kind';
        if (rankCountsValues[0] === 3 && rankCountsValues[1] === 2) return 'Full house';
        if (isFlush) return 'Flush';
        if (isStraight) return 'Straight';
        if (rankCountsValues[0] === 3) return 'Three of a kind';
        if (rankCountsValues[0] === 2 && rankCountsValues[1] === 2) return 'Two pairs';
        if (rankCountsValues[0] === 2) return 'One pair';

        return 'High card';
    }
}
