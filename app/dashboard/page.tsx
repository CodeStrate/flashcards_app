"use client";

import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Flashcard {
  id: number;
  front_content: string;
  back_content: string;
  status: string;
  created_at: string;
}

export default function FlashcardsDashboard() {
    //TODO: replace with db data
  const flashcards: Flashcard[] = [
    {
      id: 1,
      front_content: "What is the capital of France?",
      back_content: "Paris",
      status: "Active",
      created_at: "2024-08-12 10:42 AM",
    },
    {
      id: 2,
      front_content: "What is 2 + 2?",
      back_content: "4",
      status: "Draft",
      created_at: "2024-08-11 03:21 PM",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Flashcards</CardTitle>
        <CardDescription>Manage your flashcards and their content.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Front Content</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Back Content</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {flashcards.map((flashcard) => (
              <TableRow key={flashcard.id}>
                <TableCell className="font-medium">{flashcard.front_content}</TableCell>
                <TableCell>
                  <Badge variant="outline">{flashcard.status}</Badge>
                </TableCell>
                <TableCell>{flashcard.back_content}</TableCell>
                <TableCell>{flashcard.created_at}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>{flashcards.length}</strong> flashcards
        </div>
      </CardFooter>
    </Card>
  );
}
