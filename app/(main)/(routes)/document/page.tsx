"use client";

import React from "react";
import Image from "next/image";

import {Button} from "@/components/ui/button";
import {PlusCircle} from "lucide-react";
import {useUser} from "@clerk/clerk-react";

const DocumentsPage =() => {
 //   const { user } = useUser();

    return(
        <div className="
            h-full
            flex
            flex-col
            items-center
            justify-center
            space-y-4
        ">
           <Image src="/rien.png" alt="Empty"
                  height="300"
                  width="300"
                  className="dark:hidden"
           />
            <Image src="/riendark.png" alt="Empty"
                   height="300"
                   width="300"
                   className="hidden dark:block"
            />

            <h2 className="text-lg font-semibold">
                bienvenue sur le WebPad de {/*user?.firstName*/}&apos;
            </h2>
            <Button>
                <PlusCircle className="h-4 w-4 mr-2"/>
                Créer une note
            </Button>

        </div>
    )
}

export default DocumentsPage;