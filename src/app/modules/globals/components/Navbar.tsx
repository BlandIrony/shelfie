"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { useSearchStore } from "@/src/app/store/search-store";
import { useState } from "react";
import { Search } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const open = useSearchStore((s) => s.open)

    return (
        <nav className="relative px-[1rem] py-[1.5rem] md:px-[4rem] md:py-[.75rem] flex items-center justify-between">
            <div className="">
                <Link href="/">
                    <span className="font-clashDisplay font-bold text-[2.5rem] md:text-[3.5rem]">
                        Shelfie
                    </span>
                </Link>
            </div>
            <div className="hidden md:block flex-1 max-w-[36rem]">
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
            <div className="hidden md:block">
                <ul className="flex items-center gap-12">
                    <li className="text-[1.45rem] font-medium">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    {/* <li className="text-[1.45rem]">
                        <Link href="/">
                            Explore
                        </Link>
                    </li> */}
                    <li className="text-[1.45rem] font-medium">
                        <Link href="/favourites">
                            Favourites
                        </Link>
                    </li>
                </ul>
            </div>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`inline-block font-clashDisplay text-[2.15rem] uppercase transition-color duration-400 ease-in-out ${ !isOpen ? 'text-sh-black' : 'text-sh-red' }`}>
                    { !isOpen ? 'Menu' : 'Close' }
                </span>
            </button>

            <AnimatePresence mode="wait">
                {
                    isOpen && (
                        <motion.div
                            key='menu'
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute p-[.75rem] bg-sh-white top-[6.5rem] right-[1rem] border-4 rounded-[1rem]"
                        >
                            <ul className="flex flex-col divide-y-2 divide-[#e6e6e6]">
                                <li className="px-[1.5rem] py-[1rem] text-[1.85rem] font-medium">
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="px-[1.5rem] py-[1rem] text-[1.85rem] font-medium">
                                    <Link href="/favourites">
                                        Favourites
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </nav>
    )
}