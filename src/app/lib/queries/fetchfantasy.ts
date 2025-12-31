import { fetcher } from "../utils";

export async function fetchFantasyBooks() {
    return fetcher("/api/fetchfantasy")
}