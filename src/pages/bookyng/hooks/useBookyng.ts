
import { useEffect, useState } from "react";
import { getBookyng } from "../services/Bookyng";
import type { BookyngType } from "../types/BookyngType";


export const useBookyng = () => {
    const [bookyng, setBookyng] = useState<BookyngType[]>([]);

    useEffect(() => {
        getBookyng().then((data) => setBookyng(data));
    }, []);

    return bookyng;
};