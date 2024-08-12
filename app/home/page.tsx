"use client";
import Flashcard from "@/app/home/flashcard"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
import '@/app/globals.css'
import { useState, useEffect } from "react";
import { CardData } from "@/app/CardContent";

export default function HomePage(){
    const [cardsData, setCardsData] = useState<CardData[]>([]);

    useEffect(() => {
        fetch('/api/flashcards')
            .then((response) => response.json())
            .then((data) => setCardsData(data))
    }, []);

    return (
        <div className="min-h-screen h-screen m-0">
            <div className="flex h-1/5 justify-center items-center mx-auto">
            <h1 className="text-5xl">Here's The Flashcards!</h1>
            </div>
            <div className="flex flex-col h-3/5 justify-center items-center mx-auto mb-3">
            {cardsData.map((card) => (
                <Flashcard
                    key={card.id}
                    frontText={card.front_content}
                    backText={card.back_content}
                    />
            ))}
            <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

            </div>
        </div>
    )
}