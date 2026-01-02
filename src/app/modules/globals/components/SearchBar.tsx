import { Search } from "lucide-react"

export default function SearchBar () {
    return (
        <div className="px-[1.25rem] py-[.5rem] bg-bg-primary border-2 rounded-[1rem] border-sh-black transition-all duration-100 ease-in-out hover:translate-x-1 hover:translate-y-1 shadow-[3px_3px_#222419] hover:shadow-none">
            <div className="w-full flex gap-4 items-center">
                <Search className="w-[2.25rem]"/>
                <input
                    type="text"
                    name="search"
                    placeholder="Title, author, genre, or year"
                    className="inline-block flex-1 text-sh-black text-[1.25rem] border-0 outline-0 py-[.75rem]"
                />
            </div>
        </div>
    )
}