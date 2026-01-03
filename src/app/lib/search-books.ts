export async function searchBooks(query: string) {
    if(!query) return [];

    const res = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`,
        { cache: "no-store" }
    )

    const data = await res.json();
    return data.docs.slice(0, 10);
}