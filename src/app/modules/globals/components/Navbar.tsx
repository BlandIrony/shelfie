"use client";

import Link from "next/link";

import { useSearchStore } from "@/src/app/store/search-store";
import { Search } from "lucide-react";

export default function Navbar() {
    const open = useSearchStore((s) => s.open)

    return (
        <nav className="px-[4rem] py-[.75rem] flex items-center justify-between">
            <div className="">
                <Link href="/">
                    <span className="font-clashDisplay font-bold  text-[3.5rem]">
                        Shelfie
                    </span>
                </Link>
            </div>
            <div className="flex-1 max-w-[36rem]">
                {/* <SearchBar /> */}
                <button
                    onClick={() => open()}
                    className="w-full px-[1.25rem] py-[.75rem] bg-bg-primary border-2 rounded-[1rem] border-sh-black transition-all duration-100 ease-in-out hover:translate-x-1 hover:translate-y-1 shadow-[3px_3px_#222419] hover:shadow-none outline-0"
                >
                    <div className="w-full flex gap-4 items-center justify-between">
                        <div className="flex gap-4">
                            <Search className="w-[2.25rem]"/>
                            <span className="inline-block text-sh-black text-[1.25rem] border-0 outline-0 py-[.75rem]">
                                Title, author, or year
                            </span>
                        </div>
                        <kbd className="inline-block p-[.75rem] rounded-[.75rem] text-[1.25rem] bg-sh-pink border-2 text-center">
                            CtrlK
                        </kbd>                        
                    </div>
                </button>
            </div>
            <div>
                <ul className="flex items-center gap-12">
                    <li className="text-[1.45rem]">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    {/* <li className="text-[1.45rem]">
                        <Link href="/">
                            Explore
                        </Link>
                    </li> */}
                    <li className="text-[1.45rem]">
                        <Link href="/">
                            Favourites
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}