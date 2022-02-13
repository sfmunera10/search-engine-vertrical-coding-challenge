import { ITEMS_API_BASE_URL } from "../constants/ClientAPIBaseURL";
import { Item } from "../interfaces/Item";

export const searchItemsByTitle = async (titleQuery: string, abortControllerSignal?: AbortSignal): Promise<Item[]> => {
    try {
        const encodedItemsQuery = encodeURIComponent(titleQuery);
        const result = await fetch(`${ITEMS_API_BASE_URL}?title=${encodedItemsQuery}`, {
            signal: abortControllerSignal || null
        });
        if (abortControllerSignal && abortControllerSignal.aborted) {
            console.log("Aborted");
        }
        const jsonResponse = (await result.json());
        if (!jsonResponse.data) {
            return [];
        }
        return jsonResponse.data;
    } catch (error) {
        return [];
    }
};

export const getItem = async (idParam: string, titleQuery: string, abortControllerSignal?: AbortSignal): Promise<Item | null> => {
    try {
        const encodedItemsQuery = encodeURIComponent(titleQuery);
        const result = await fetch(`${ITEMS_API_BASE_URL}/${idParam}?title=${encodedItemsQuery}`, {
            signal: abortControllerSignal || null
        });
        if (abortControllerSignal && abortControllerSignal.aborted) {
            console.log("Aborted");
        }
        const jsonResponse = (await result.json());
        if (!jsonResponse.data) {
            return null;
        }
        return jsonResponse.data;
    } catch (error) {
        return null;
    }
};