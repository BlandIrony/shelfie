import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavouriteStoreType = {
    favourites: string[],
    addToFavourites: (id: string) => void,
    removeFromFavourites: (id: string) => void,
}

export const useFavouriteStore = create<FavouriteStoreType>()(
    persist(
        (set) => ({
            favourites: [],

            addToFavourites: (id) => {
                set((state) => {
                    if(state.favourites.includes(id)) return state;

                    return {
                        favourites: [...state.favourites, id]
                    }
                })
            },

            removeFromFavourites: (id: string) => {
                return set((state) => ({
                    favourites: state.favourites.filter((fav) => fav !== id),
                }))
            }
        }),
        {
            name: 'favourites'
        }
    )
) 