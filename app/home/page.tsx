"use client";
import Flashcard from "@/app/home/flashcard"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
import '@/app/globals.css'
import { useState, useEffect } from "react";
import { FCard } from "@/app/Interfaces";

export default function HomePage(){
    const [cardsData, setCardsData] = useState<FCard>({
      cards: null, currentCard : null, currentIndex: 1
    });

    const {cards, currentCard, currentIndex} = cardsData;

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

    const handlePagPrevious = () => {
      if(cards == null || currentIndex <= 1) return;
      setCardsData((prev) => {
        const newIndex = prev.currentIndex - 1;
        return {
          ...prev,
          currentIndex: newIndex,
          currentCard: prev.cards![newIndex - 1]
        }
      });
    }

    const handlePagNext = () => {
      if(cards == null || currentIndex >= cards.length) return;
      setCardsData((prev) => {
        const newIndex = prev.currentIndex + 1;
        return {
          ...prev,
          currentIndex: newIndex,
          currentCard: prev.cards![newIndex - 1]
        }
      });

    }



    return (
        <div className="min-h-screen h-screen m-0">
            <div className="flex h-1/5 justify-center items-center mx-auto">
            <h1 className="text-5xl">Here&apos;s The Flashcards!</h1>
            </div>
            <div className="flex flex-col h-3/5 justify-center items-center mx-auto mb-3">
            {currentCard &&
                <Flashcard
                    key={currentCard.id}
                    frontText={currentCard.front_content}
                    backText={currentCard.back_content}
                    />
            }
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious onClick={handlePagPrevious} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext onClick={handlePagNext} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>

            </div>
        </div>
    )
}