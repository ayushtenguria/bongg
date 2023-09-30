import Image from "next/image"
import img from "@/public/IONL.webp"

export const LatestRelease = () => {
    return(
        <section>
            <div className="my-10"><Image className="h-[50rem]" alt="imageLatest" src={img}/>
            <button>This is Button</button>
            </div>
        </section>
    )
}