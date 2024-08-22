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
import { CardData } from "@/app/Interfaces";

export default function HomePage(){
    const [cardsData, setCardsData] = useState<CardData[]>([]);
    const [currentCard, setCurrentCard] = useState<CardData | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(1);

    useEffect(() => {
        fetch('/api/flashcards')
            .then((response) => response.json())
            .then((data) => {
              setCardsData(data);
              if(data.length > 0) setCurrentCard(data[0]);
            })
    }, []);

    const handlePagPrevious = () => {
      if(currentIndex > 1) setCurrentIndex(currentIndex - 1);
      const card = cardsData[currentIndex - 2];

      setCurrentCard(card);
    }

    const handlePagNext = () => {
      if(currentIndex < cardsData.length - 1) setCurrentIndex(currentIndex + 1);
      const card = cardsData[currentIndex];

      setCurrentCard(card);
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