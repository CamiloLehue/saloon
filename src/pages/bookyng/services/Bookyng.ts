import type { BookyngType } from "../types/BookyngType";

const data: BookyngType[] = [
    {
        id: 1,
        username: "Carlos",
        total: 13400,
        created_at: "2023-03-01T00:00:00.000Z",
        updated_at: "2023-03-01T00:00:00.000Z",
    },
    {
        id: 2,
        username: "Carlos",
        total: 23400,
        created_at: "2023-03-01T00:00:00.000Z",
        updated_at: "2023-03-01T00:00:00.000Z",
    },
    {
        id: 3,
        username: "Carlos",
        total: 323400,
        created_at: "2023-03-01T00:00:00.000Z",
        updated_at: "2023-03-01T00:00:00.000Z",
    },
];

export const getBookyng = async (): Promise<BookyngType[]> => {
    return data;
};


// export const getBookyng = async (): Promise<BookyngType[]> => {

//     const response = await fetch("https://0.0.0.0:8000/api/bookings");

//     if (!response.ok || response.redirected) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data: BookyngType[] = await response.json();

//     return data;
// };
