import React from "react";
import {Heading} from "@/app/(marketing)/_components/Heading";
import Heroes from "@/app/(marketing)/_components/Heroes";
import {Footer} from "@/app/(marketing)/_components/Footer";
import Navbar from "@/app/(marketing)/_components/navbar";

// page mère
const MarketingPage = () => {
    return(
        <div className="min-full flex flex-col">
            <div className="
                flex
                flex-col
                items-center
                justify-center
                md:justify-start
                text-center
                gap-y-8
                flex-1
                px-6
                pb-10
             ">
                {/*sont des classe avec des effet différent */}
                <Heading/>
                <Heroes/>
                <Footer/>
                <Navbar/>
            </div>
        </div>
    )
}
export default MarketingPage;