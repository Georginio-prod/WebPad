import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})

export const Logo = () => {
    return(
        <div className="hidden md:flex items-center gap-x-2">
            <Image
                src="/note.png"
                alt="Logo"
                height="40"
                width="40"
                className="hidden dark:block"
            />

            <Image
                src="/noteD.png"
                alt="Logo"
                height="40"
                width="40"
                className="dark:hidden"
            />

            <p className={cn("font-semibold", font.className)}>
                WebPad
            </p>

        </div>
    )
}