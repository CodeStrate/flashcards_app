import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: any, {params}: any) {
    const id = parseInt(params.id);

    try{
        const cards = await prisma.flashcards.findUnique({
            where: {
                id: id,
            }
        });

        return NextResponse.json(cards);
        
    }catch(error){
        console.log("Error getting data_id: ", error);
        return NextResponse.error();
        
    }
}

export async function PUT(request: any, {params}: any) {

    try{
        const data = await request.json();
        const {front_content, back_content} = data;
        const id = parseInt(params.id);

        const updatedCard = await prisma.flashcards.update({
            where: {id},
            data: {
                front_content,
                back_content
            }
        })

        return NextResponse.json(updatedCard);
        
    }catch(error){
        console.log("Error updating data: ", error);
        return NextResponse.error();
        
    }
}

export async function DELETE(request: any, {params}: any) {
    
    try{
        const id = parseInt(params.id);
        const deleteCard = await prisma.flashcards.delete({
            where: {id}
        });

        return NextResponse.json(deleteCard);
        
    }catch(error){
        console.log("Error deleting data: ", error);
        return NextResponse.error();
        
    }
}