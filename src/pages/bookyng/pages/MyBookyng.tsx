import { useBookyng } from "../hooks/useBookyng";

function MyBookyng() {
    const bookyng = useBookyng();
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-center py-5">
                <h1>Mis Reservas</h1>
            </div>
            <div className="flex flex-col gap-2 px-10">
                {
                    bookyng.map((booking) => (
                        <div key={booking.id} className="bg-white/30 rounded-xl w-full p-5">
                            <h1>{booking.username}</h1>
                            <p>{booking.total}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyBookyng