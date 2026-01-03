import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Category = "adventure" | "history" | "fantasy" | "science" | "love" | "mystery" | "art" | "biography" | "gothic";

type CategoryStore = {
  category: Category;
  setCategory: (cat: Category) => void;
};

const DEFAULT_CATEGORY: Category = "adventure";

export const useCategoryStore = create<CategoryStore>()(
  persist(
    (set) => ({
      category: DEFAULT_CATEGORY,

      setCategory: (cat) =>
        set({
          category: cat,
        }),
    }),
    {
      name: "category-storage",
    }
  )
);
