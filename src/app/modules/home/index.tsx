"use client";

import BookCard from "../globals/components/BookCard";
import Categories from "./ui/components/Categories";
import { useQuery } from "@tanstack/react-query";
import { fetchFantasyBooks } from "../../lib/queries/fetchfantasy";

export default function Home() {
    const { data, error } = useQuery({
        queryKey: ['fantasy'],
        queryFn: fetchFantasyBooks
    })

    console.log(data)
    return (
        <section className="w-full min-h-screen pt-10">
            <Categories />
            
            <div className="my-[6rem]">
                <div className="mb-[2rem]">
                    <h2 className="font-bebas text-[3rem]">
                        All books
                    </h2>
                </div>
                <div className="grid grid-cols-5 gap-8">
                    {
                        data?.works.map((book: any) => (
                            <BookCard
                                key={book.key}
                                id={book.key.replace("/works/", "")}
                                title={book.title}
                                author={book.authors?.[0]?.name}
                                coverUrl={
                                    book.cover_id
                                        ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
                                        : undefined
                                }
                                />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}