"use client";

import { useSearchStore } from "@/src/app/store/search-store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Search } from "lucide-react"
import SearchResults from "./SearchResults";
import { useDebounce } from "@/src/app/hooks/use-debounce";

export default function SearchModal () {
    const { isOpen, close, query, setQuery } = useSearchStore();
    const router = useRouter();
    const debouncedQuery = useDebounce(query, 300)

    useEffect(() => {
        if(!isOpen) return;
        router.replace(`?q=${debouncedQuery}`, { scroll: false });
    }, [debouncedQuery, isOpen, router]);

    useEffect(() => {
        const esc = (e: KeyboardEvent) => e.key === "Escape" && close();
        window.addEventListener("keydown", esc);
        return () => window.removeEventListener("keydown", esc)
    })

    useEffect(() => {
        if(!isOpen) return;

        const original = document.body.style.overflow;
        document.body.style.overflow ="hidden";

        return () => {
            document.body.style.overflow = original;
        }
    }, [isOpen])

    if(!isOpen) return null;

    return (
        <div onClick={close} className="fixed px-[.5rem] md:px-0 inset-0 z-50 bg-black/80 flex items-center justify-center">
            <div onClick={(e) => e.stopPropagation()} className="w-[75rem] h-[500px] bg-sh-white border-4 rounded-[2rem] overflow-hidden">
                <div className="px-[1.25rem] py-[.5rem] bg-bg-primary border-2 rounded-[1rem] border-sh-black ">
                    <div className="w-full flex gap-4 items-center">
                        <Search className="w-[2.25rem]"/>
                        <input
                            autoFocus
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Title, author, or year"
                            className="inline-block flex-1 text-sh-black text-[1.25rem] border-0 outline-0 py-[.75rem]"
                        />
                    </div>
                </div>
                <div className="py-[2rem] px-[.75rem] md:p-[3rem] overflow-hidden">
                    <div className="h-[40rem] w-full overflow-y-auto">
                        <SearchResults query={query}/>
                    </div>
                </div>
            </div>
        </div>
    )
}