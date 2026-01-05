"use client";

import { useQuery } from "@tanstack/react-query";
import { searchBooks } from "@/src/app/lib/search-books";
import { useDebounce } from "@/src/app/hooks/use-debounce";
import BookResultCard from "./BookResultCard";
import BookResultCardSkeleton from "./BookResultCardSkeleton";

type Props = {
    query: string;
}

export default function SearchResults({ query }: Props) {
    const debouncedQuery = useDebounce(query, 300)
    
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["search", debouncedQuery],
        queryFn: () => searchBooks(debouncedQuery),
        enabled: !!debouncedQuery,
        staleTime: 30_000,
    });

    if (!query) return <p className="text-[1.5rem]">Start typing to search</p>;

    if(isLoading || isFetching) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <BookResultCardSkeleton key={index} />
                ))}
            </div>
        )
    }

    if(!data?.length) return <p className="text-[1.5rem]">No results</p>

    // console.log(data)
    
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3">
            {
                data.map((b) => (
                    <li
                        key={b.title}
                    >
                        <BookResultCard
                            id={b.key}
                            title={b.title}
                            author={b.author_name?.[0]}
                            year={b.first_publish_year}
                            coverId={b.cover_i}
                        />
                    </li>
                ))
            }
        </ul>
    )
}