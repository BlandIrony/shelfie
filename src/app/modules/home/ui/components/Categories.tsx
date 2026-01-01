import { categories } from "@/src/app/lib/data/data";
import { useCategoryStore } from "@/src/app/store/category-store";

export default function Categories() {
    const category = useCategoryStore((s) => s.category)
    const setCategory = useCategoryStore((s) => s.setCategory)

    return (
        <div className="">
            <div className="mb-[2rem]">
                <h2 className="font-clashDisplay text-[3rem]">
                    Categories
                </h2>
            </div>
            <div className="flex gap-6 items-center">
                {
                    categories.map(cat => (
                        <button
                            key={cat.title}
                            onClick={() => setCategory(cat.value)}
                            className={`px-[1.25rem] py-[1rem] text-[1.25rem] border-2 border-sh-black transition-all duration-200 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_#222419] ${cat.value === category ? 'bg-sh-green font-bold' : 'bg-white'}`}
                        >
                            { cat.title }
                        </button>
                    ))
                }
            </div>
        </div>
    )
}