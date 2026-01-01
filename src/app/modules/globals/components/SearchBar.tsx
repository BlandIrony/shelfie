import { Search } from "lucide-react"

export default function SearchBar () {
    return (
        <div className="px-[1.25rem] py-[.5rem] bg-bg-primary border-2 border-sh-black">
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