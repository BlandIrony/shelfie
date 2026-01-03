import { create } from "zustand";

type SearchState = {
    isOpen: boolean;
    query: string;
    open: () => void;
    close: () => void;
    setQuery: (q: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
    isOpen: false,
    query: "",
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    setQuery: (query) => set({ query })
}))