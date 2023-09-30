import { FeaturedCard } from "./FeaturedCard"

export const FeaturedItems = () => {
    return (
        <section className="">
            <div className="p-3 m-5 font-medium text-gray-400 text-xl ">
                FEATURED ITEMS
            </div>
            <div className="flex overflow-hidden">
                <FeaturedCard/>
                <FeaturedCard/>
                <FeaturedCard/>
                <FeaturedCard/>
            </div>
        </section>
    )
}