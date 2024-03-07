"use client"

import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

//page d'acceuil
export const Heading = () => {
    return(
        <div className="max-w-3xl space-x-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl">
                Vos idées, documents et plans. Unifié. Bienvenue à
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
            </h3>


            <Button>
                Let's go
                <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
        </div>
    )
}