

import {Logo} from "@/app/(marketing)/_components/logo";

//classe affichant le logo sur le footer
export const Footer = () =>{
    return(
     <div className="
        flex
        items-center
        w-full
        p-6
        bg-background
        z-50
     ">

         <Logo/>

     </div>
    )
}
