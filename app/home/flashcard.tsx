"use client";
import { useState } from "react";

interface FlashcardProps {
    frontText: string;
    backText: string;
}

export default function Flashcard({frontText, backText}: FlashcardProps) {
    const [flip, setFlip] = useState(false);

    const handleFlip = () => {
        setFlip(!flip);
    };

    return (
        <div
            className="flex flex-col w-80 h-96 rounded-xl justify-center items-center [perspective:1000px] mb-5"
            onClick={handleFlip}
        >
            <div
                className={`relative w-full h-full transition-transform rounded-xl shadow-lg duration-1000 [transform-style:preserve-3d] ${flip ? "[transform:rotateY(180deg)]" : ""
                    }`}
            >
                {/* Front side */}
                <div className="absolute inset-0 flex justify-center items-center bg-yellow-300 rounded-xl shadow-lg [backface-visibility:hidden]">
                    {frontText}
                </div>
                {/* Back side */}
                <div className="absolute inset-0 flex justify-center items-center bg-orange-300 rounded-xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    {backText}
                </div>
            </div>
        </div>
    );
}
