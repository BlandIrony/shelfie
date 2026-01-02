import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
    return (
        <nav className="px-[4rem] py-[.75rem] flex items-center justify-between">
            <div className="">
                <Link href="/">
                    <span className="font-clashDisplay font-bold  text-[3.5rem]">
                        Shelfie
                    </span>
                </Link>
            </div>
            <div className="flex-1 max-w-[45rem]">
                <SearchBar />
            </div>
            <div>
                <ul className="flex items-center gap-12">
                    <li className="text-[1.45rem]">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="text-[1.45rem]">
                        <Link href="/">
                            Explore
                        </Link>
                    </li>
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