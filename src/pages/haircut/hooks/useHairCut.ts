// useHairCut.ts
import { useEffect, useState } from "react";
import type { HairCutType } from "../types/HairCutType";
import { getHairCut } from "../services/HairCut";

export function useHaircuts() {
    const [haircuts, setHaircuts] = useState<HairCutType[]>([]);

    useEffect(() => {
        getHairCut()
            .then((data) => setHaircuts(data))
            .catch((error) => console.error("Error fetching haircuts:", error));
    }, []);

    return haircuts;
}