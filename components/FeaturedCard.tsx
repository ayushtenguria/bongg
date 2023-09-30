import Image from "next/image"
import img from "@/public/IONL.webp"

export const FeaturedCard = () => {
    return(
        <div className="m-5 text-gray-500">
            <div className="rounded-md"><Image className="h-[25rem] w-[38rem] rounded-md" src={img} alt="ProductImage"/></div>
            <div>Red Wolves</div>
            <div>$ 299</div>
        </div>
    )
}