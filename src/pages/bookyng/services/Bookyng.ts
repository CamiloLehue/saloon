import type { BookyngType } from "../types/BookyngType";

// const data: BookyngType[] = [
//     {
//         id: 1,
//         nombre: "Carlos Guanel",
//         total: 13400,
//         fecha: "2025-07-01T11:00:00.000Z",
//     },
//     {
//         id: 2,
//         nombre: "Carlos Guanel",
//         total: 23400,
//         fecha: "2025-07-01T13:00:00.000Z",
//     },
//     {
//         id: 3,
//         nombre: "Carlos Guanel",
//         total: 323400,
//         fecha: "2025-07-01T15:00:00.000Z",
//     },
// ];

// export const getBookyng = async (): Promise<BookyngType[]> => {
//     return data;
// };



type ApiResponse = {
    resp: boolean;
    data: BookyngType[];
};


export const getBookyng = async (): Promise<BookyngType[]> => {
    const response = await fetch("http://192.168.1.118:8000/api/ventas/");

    if (!response.ok || response.redirected) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json: ApiResponse = await response.json();
    return json.data;
};


export const saveBooking = async (data: BookyngType): Promise<void> => {
    try {
        const response = await fetch("http://192.168.1.118:8000/api/ventas/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error al guardar la reserva");
        }
        console.log("Reserva guardada exitosamente");
    } catch (error) {
        console.error("Error al guardar reserva:", error);
        throw error;
    }
};

export const getFechaHora = async (): Promise<string[]> => {
    const response = await fetch("http://192.168.1.118:8000/api/horarios/");

    if (!response.ok || response.redirected) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json: ApiResponse = await response.json();
    return json.data.map((item) => item.hora);
};

