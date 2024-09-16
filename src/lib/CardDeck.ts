import Card from './Card';

export default class CardDeck {
    private deck: Card[];

    constructor() {
        const suits = ['diams', 'hearts', 'clubs', 'spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        this.deck = [];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.deck.push(new Card(rank, suit));
            }
        }
    }

    getCard(): Card | null {
        if (this.deck.length === 0) return null;
        return this.deck.splice(Math.floor(Math.random() * this.deck.length), 1)[0];
    }

    getCards(howMany: number): Card[] {
        const cards = [];
        for (let i = 0; i < howMany; i++) {
            const card = this.getCard();
            if (card) {
                cards.push(card);
            } else {
                break;
            }
        }
        return cards;
    }

    hasCards(): boolean {
        return this.deck.length > 0;
    }
}
