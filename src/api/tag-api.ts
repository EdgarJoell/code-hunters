import {Tag} from "../models/Tag.ts";
import {getTagsFromSeed} from "../data/tag-data.ts";

const BASE_URL = import.meta.env.BASE_URL;

export async function getTagsFromApi(): Promise<Tag[]> {
    try {
        const res: Response = await fetch(`${BASE_URL}/tags`);

        return res.json();
    } catch(e) {
        console.log(e);
        return [];
    }
}

export function getTagDataFromSeed(): Tag[] {
    return getTagsFromSeed();
}