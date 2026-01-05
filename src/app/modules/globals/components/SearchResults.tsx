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
    
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3">
            {
                data.map((b: unknown) => {
                    const book = b as {
                      key: string;
                      title: string;
                      author_name?: string[];
                      first_publish_year?: number;
                      cover_id?: number | undefined;
                    };
                    return (
                        <li
                            key={book.title}
                        >
                            <BookResultCard
                                id={book.key}
                                title={book.title}
                                author={book.author_name?.[0]}
                                year={book.first_publish_year}
                                coverId={book.cover_id}
                            />
                    </li>
                )
            })}
        </ul>
    )
}