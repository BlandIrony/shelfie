import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetcher(url: string) {
  const res = await fetch(url);
  if(!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

export function truncateText(text: string, maxLength: number): string {
  if (!text) return "";
  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength).trimEnd() + "…";
}
