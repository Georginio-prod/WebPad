"use client"

import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {useRouter} from "next/navigation";

//page d'acceuil
export const Heading = () => {
    //fonction qui permet de faire la route
    const route = useRouter();
    return(
        <div className="max-w-3xl space-x-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl">
                Rédigez vos idées, documents et plans unifié. Bienvenue sur
                <span className="underline"> WebPad</span>
            </h1>
            <h3 className="
                text-base
                sm:text-xl
                md:text-2xl
                font-medium
             ">
                WebPad est l'espace de travail connecté où <br/>
                un travail meilleur et plus rapide est effectué.
                <p>

                </p>
            </h3>


            {/*affiche le bouton et la route */}
                <Button

                    onClick={() => {
                        route.push("/login")
                    }}

                >
                    Let's go
                    <ArrowRight className="h-4 w-4 ml-2"/>
                </Button>


        </div>
    )
}