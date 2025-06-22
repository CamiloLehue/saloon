import type { HairCutType } from "../types/HairCutType";

type ApiResponse = {
    resp: boolean;
    data: HairCutType[];
};

export const getHairCut = async (): Promise<HairCutType[]> => {
    const response = await fetch("http://192.168.1.83:8000/api/productos");

    if (!response.ok || response.redirected) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json: ApiResponse = await response.json();
    return json.data;
};