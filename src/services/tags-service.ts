import {Tag} from "../models/Tag.ts";
import {getTagsFromApi} from "../api/tag-api.ts";
import {getTagsFromSeed} from "../data/tag-data.ts";

export async function getAllTags(): Promise<Tag[]> {
    const apiTags = await getTagsFromApi();

    if(!apiTags || apiTags.length === 0) {
        return getTagsFromSeed();
    }

    return apiTags;
}