"use client";
import { useState, useEffect, createContext, ReactNode, useContext } from "react";
import { CardDataContextType, FCard } from "@/app/Interfaces";

const CardDataContext = createContext<CardDataContextType | undefined>(undefined)

export const CardDataProvider: React.FC<{children : ReactNode}> = ({children}) => {
    
    const [cardsData, setCardsData] = useState<FCard>({
        cards: null, currentCard : null, currentIndex: 1
      });
    
    useEffect(() => {
        fetch('/api/flashcards')
              .then((response) => response.json())
              .then((data) => {
                setCardsData({
                  ...cardsData,
                  cards: data,
                  currentCard: data[0]
                });
              })
      }, []);


      return (
        <CardDataContext.Provider value={{cardsData, setCardsData}}>
            {children}
        </CardDataContext.Provider>
      )
};

export const useCards = () => {
    const context = useContext(CardDataContext);
    if(context === undefined) throw new Error("Hook must be used inside the ContextProvider");

    return context;
}
