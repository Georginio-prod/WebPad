'use client';
import AuthFrom from "@/app/(marketing)/(site)/component/AuthFrom";

export default function  Home(){
    return(

            <div>
                <h2 className="
                    mt-6
                    text-center
                    text-3xl
                    font-bold
                    tracking-tight
                    text-black
                ">
                    Connectez-vous à votre compte

                </h2>



            <AuthFrom/>
            </div>
    )
}