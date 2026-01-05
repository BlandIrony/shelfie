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

export type OpenLibrarySearchBook = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
};
