// "use client";
// import { CardData } from "@/app/Interfaces";
// import { MoreHorizontal } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// export default function FlashcardsDashboard() {


//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Flashcards</CardTitle>
//         <CardDescription>Manage your flashcards and their content.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Front Content</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead>Back Content</TableHead>
//               <TableHead>Created At</TableHead>
//               <TableHead>
//                 <span className="sr-only">Actions</span>
//               </TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {flashcards.map((flashcard) => (
//               <TableRow key={flashcard.id}>
//                 <TableCell className="font-medium">{flashcard.front_content}</TableCell>
//                 <TableCell>{flashcard.back_content}</TableCell>
//                 <TableCell>
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <Button aria-haspopup="true" size="icon" variant="ghost">
//                         <MoreHorizontal className="h-4 w-4" />
//                         <span className="sr-only">Toggle menu</span>
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                       <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                       <DropdownMenuItem>Edit</DropdownMenuItem>
//                       <DropdownMenuItem>Delete</DropdownMenuItem>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </CardContent>
//       <CardFooter>
//         <div className="text-xs text-muted-foreground">
//           Showing <strong>1-10</strong> of <strong>40</strong> flashcards
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }
