"use client";

import React, {useEffect, useState} from "react";
import {Spinner} from "@/components/spinner";
import {Navigation} from "./-components/navigation";

const MainLayout = ({

    children
}:{
    children:React.ReactNode;
}) => {


    const [isLoading, setIsLoading] = useState(true);

    //fonction permettant a la page de chargé les information de cette dernière
    useEffect(() => {
        const timer = setTimeout (() => {
            setIsLoading(false);
        }, 2000);
        return() => clearTimeout(timer);
    },[]);

    //le spinner qui fait tournée les élément de la page
     if(isLoading){
        return (
            <div className="
                h-full
                flex
                items-center
                justify-center
            ">
                <Spinner size="lg"/>
            </div>
        )

    }

    return (
        <div className="h-full flex dark:bg-[#1F1F1F">
            <Navigation/>
            <main className="flex-1 h-full overflow-y-auto">
            {children}
            </main>
        </div>
    )
}

export default MainLayout;