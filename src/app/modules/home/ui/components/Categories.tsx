import { categories } from "@/src/app/lib/data/data";

export default function Categories() {
    return (
        <div className="">
            <div className="mb-[2rem]">
                <h2 className="font-bebas text-[3rem]">
                    Categories
                </h2>
            </div>
            <div className="flex gap-6 items-center">
                {
                    categories.map((cat, index) => (
                        <button
                            key={cat.title}
                            className={`px-[1.25rem] py-[.75rem] text-[1.25rem] border-2 border-sh-black transition-all duration-200 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_#222419] ${cat.active && 'bg-sh-green font-bold'}`}
                        >
                            { cat.title }
                        </button>
                    ))
                }
            </div>
        </div>
    )
}