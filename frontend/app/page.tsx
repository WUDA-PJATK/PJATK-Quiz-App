import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextRevealCard} from "@/components/ui/text-reveal-card";



export default function Home()
{
  return (
        <main className="flex p-24 flex-col gap-8">
                <div className="flex justify-center">
                    {/* <TextRevealCard text="クイズアプリ" revealText="PJATK Quiz App" /> */}
                    <TextRevealCard text="Tak zajebiste" revealText="że się zesrasz" />
                </div>
                <section className="py-24 flex flex-col gap-8 text-center text-align">
                  <h1 className="text-4xl font-bold">PJATK Quiz App</h1>
                  <p className="text-2xl text-muted-foreground">Wylosuj pytania i odpowiedz na nie!</p>
                </section>
                
                <div className="flex gap-6 py-6 items-center text-center text-align justify-center">
                  <Button>
                    <Link href="/questions">Generuj Pytania</Link>
                  </Button>
                  <Button>
                    <Link href="/creator">Dodaj Pytania</Link>
                  </Button>
                </div>
                
        </main>              
  ) 
}
