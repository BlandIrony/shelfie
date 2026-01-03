"use client";

import { useEffect } from "react";
import { useSearchStore } from "../store/search-store";

export function useCommandK() {
    const open = useSearchStore((s) => s.open);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                open();
            }
        }
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [open])
}