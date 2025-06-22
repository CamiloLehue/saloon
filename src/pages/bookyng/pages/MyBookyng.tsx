import { useBookyng } from "../hooks/useBookyng";

function MyBookyng() {
    const bookyng = useBookyng();
    return (
        <div className="flex flex-col w-full p-5">
            <div className="flex justify-center py-5">
                <h1>Mis Reservas</h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    bookyng.map((booking) => (
                        <div key={booking.id} className="bg-white rounded-xl w-full p-5">
                            <div className="bg-rose-500 rounded-lg px-5 py-0.5 flex justify-between items-center">
                                <h3>{booking.nombre}</h3>
                                <div>
                                    <h3>{booking.fecha} : {booking.hora}</h3>
                                </div>
                            </div>
                            <div className="relative flex justify-end items-center">
                                <div className="bg-white text-rose-500 px-5 rounded-full py-5 ">
                                    <p>${booking.total.toLocaleString("es-CL")}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyBookyng