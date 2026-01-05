export type OtherBook = {
    id: string;
    key: string;
    title: string;
    cover_id: number | null;
}

export type FavouriteBook = {
    id: string;
    title: string;
    author: string | null;
    coverId: number | null;
}