
import { useEffect, useState } from "react";
import { getBookyng, getFechaHora } from "../services/Bookyng";
import type { BookyngType } from "../types/BookyngType";


export const useBookyng = () => {
    const [bookyng, setBookyng] = useState<BookyngType[]>([]);

    useEffect(() => {
        getBookyng().then((data) => setBookyng(data));
    }, []);

    return bookyng;
};

export const useFechaHora = () => {
    const [fechaHora, setFechaHora] = useState<string[]>([]);

    useEffect(() => {
        getFechaHora().then((data) => setFechaHora(data));
    }, []);

    return fechaHora;
};
