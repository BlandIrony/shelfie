"use client";

import Image from "next/image";
import { useFavouriteStore } from "@/src/app/store/favorites-store";
import { FavouriteBook } from "@/src/app/lib/types/types";
import { useQuery } from "@tanstack/react-query";

import LoadingGrid from "../ui/components/LoadingGrid";
import ErrorState from "../ui/components/ErrorState";
import FavouriteCard from "./FavouriteCard";

export default function Favourites() {
    const favourites = useFavouriteStore((s) => s.favourites);

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["favourites", favourites],
        queryFn: async () => {
            const ids = favourites.join(",");
            const res = await fetch(`/api/fetchfavourites?ids=${ids}`);

            if(!res.ok) throw new Error("Failed to load favourites");

            return res.json()
        },
        enabled: favourites.length > 0,
        staleTime: 1000 * 60 * 5,
    })

    return (
        <section className="pt-20">
            <div className="space-y-[.75rem] mb-[6rem]">
                <h2 className="font-clashDisplay text-[3rem]">
                    Favourites
                </h2>
                <p className="text-[1.5rem] font-medium">
                    A universe of books you’ve chosen to keep.
                </p>
            </div>

            {isLoading && <LoadingGrid />}
            
            {isError && (
              <ErrorState
                message={(error as Error).message}
                onRetry={refetch}
              />
            )}

            {
                !isLoading && !isError && (
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-8">
                        {data?.map((book: FavouriteBook) => {
                            return (
                                <FavouriteCard key={book.id} book={book} />
                            );
                        })}
                    </div>
                )
            }
        </section>
    )
}