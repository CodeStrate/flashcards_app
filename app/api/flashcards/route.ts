import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: any) {
    try{
        const data = await request.json();

        const {front_content, back_content} = data;

        const newCard = await prisma.flashcards.create({
            data: {
                front_content,
                back_content
            }
        });
        return NextResponse.json(newCard);
        
    }catch(error){
        console.log("Error adding data: ", error);
        return NextResponse.error();
        
    }
}

export async function GET() {
    try{
        const cards = await prisma.flashcards.findMany();

        return NextResponse.json(cards);
        
    }catch(error){
        console.log("Error getting data: ", error);
        return NextResponse.error();
        
    }
}