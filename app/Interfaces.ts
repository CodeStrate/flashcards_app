export interface CardData {
    id: number;
    front_content: string;
    back_content: string;
}

export interface FCard {
    cards?: CardData[] | null;
    currentCard? : CardData | null;
    currentIndex : number;
}

export interface CardDataContextType {
    cardsData: FCard;
    setCardsData: React.Dispatch<React.SetStateAction<FCard>>;
}