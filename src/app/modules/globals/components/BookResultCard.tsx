"use client";

import { truncateText } from "@/src/app/lib/utils";
import { useSearchStore } from "@/src/app/store/search-store";
import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string;
    author?: string;
    year?: number;
    coverId?: number;
    id: string;
}

export default function BookResultCard({ title, author, year, coverId, id }: Props) {
    const { close } = useSearchStore();
    const path = id;
    const bookId = path.replace("/works/", "");
    console.log(coverId)

    return (
            <Link
                href={`/book/${encodeURIComponent(bookId)}`}
                onClick={() => close()}
                className="flex gap-4 border-2 rounded-[1rem] p-3 hover:bg-gray-100 focus:bg-gray-100 outline-none transition duration-200 hover:scale-[.98]"
            >
                <div className="relative size-[8rem] shrink-0 overflow-hidden rounded-[.75rem] bg-sh-white">
                    {coverId && (
                        <Image
                            src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>
                <div className="flex flex-col justify-between py-[.75rem]">
                    <div className="space-y-2">
                        <h4 className="text-[1.5rem] font-sans font-semibold">
                            { truncateText(title, 25) }
                        </h4>
                        <p className="text-[1.25rem]">
                            { truncateText(author, 25) ?? "Unknown author" }
                        </p>
                    </div>
                    <span className="inline-block text-[1.25rem]">
                        { year ? ` ·${year}` : null }
                    </span>
                </div>
            </Link>
    )
}