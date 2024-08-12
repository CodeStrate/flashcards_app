import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <div className="w-full h-full flex flex-col justify-center items-center">
    <Link href="/home" className={buttonVariants({ variant: "outline" })}>Go to the cards</Link>
    <Link href="/dashboard" className={buttonVariants({ variant: "ghost" })}>Dashboard</Link>
    </div>
    </>
  )
}
