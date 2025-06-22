import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBooking } from "../services/Bookyng";
import type { BookyngType } from "../types/BookyngType";
import { useCart } from "../../shop/context/CartContext";
import { useBookyng } from "../hooks/useBookyng";

function Bookyng() {
    const user = JSON.parse(localStorage.getItem("authToken") || "{}");
    const navigate = useNavigate();
    console.log(navigate);

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [name] = useState(user.username);
    const { getTotalAmount } = useCart();
    const useFechaHora = useBookyng();

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        if (!date || !time || !name) {
            toast.warning("Por favor completa todos los campos.");
            return;
        }

        if (getTotalAmount() === 0) {
            toast.warning("No hay productos en el carrito");
            return;
        }

        const data = {
            nombre: name,
            total: getTotalAmount(),
            fecha: date,
            hora: time + ":00",
        };

        saveBooking(data as BookyngType);

        toast.success(`Reserva registrada para ${name} el ${date} a las ${time}`)

        // navigate('/mis-reservas');
    };


    console.log(useFechaHora);



    const timeSlots = {
        mañana: ["09:00", "10:00", "11:00"],
        tarde: ["12:00", "14:00", "15:00", "16:00", "17:00"],
        noche: ["18:00", "19:00", "20:00"],
    };

    const renderTimeButtons = (label: string, slots: string[]) => (
        <div className="flex flex-col gap-2 border border-white/20 rounded-lg p-5">
            <h3 className="capitalize text-lg text-white">{label}</h3>
            <div className="flex flex-wrap gap-2">
                {slots.map((slot) => (
                    <button
                        key={slot}
                        type="button"
                        onClick={() => { setTime(slot); }}
                        className={`px-5 py-2 rounded-lg border text-sm ${time === slot
                            ? "bg-rose-500 text-white border-rose-400"
                            : "bg-white text-rose-900 border-white"
                            } hover:bg-rose-400 hover:border-rose-400 hover:text-white transition`}
                    >
                        {slot}
                    </button>
                ))}
            </div>
        </div>
    );

    const generateDates = () => {
        const today = new Date();
        const dates = [];
        for (let i = 0; i < 14; i++) {
            const d = new Date();
            d.setDate(today.getDate() + i);
            const iso = d.toISOString().split("T")[0];
            const label = d.toLocaleDateString("es-CL", { weekday: "short", day: "2-digit", month: "2-digit" });
            dates.push({ iso, label });
        }
        return dates;
    };

    return (
        <div className="w-full p-4">
            <div className="w-full flex flex-col justify-start items-start gap-5">
                <div className="w-full flex flex-col justify-start items-center">
                    <h1 className="uppercase text-2xl font-bold">Reserva tu hora</h1>
                    <small className="text-sm text-white">Selecciona un horario</small>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mx-auto w-full max-w-2xl flex flex-col gap-6 bg-accent/10 rounded-2xl p-6 shadow-lg"
                >
                    <label className="flex flex-col gap-1 w-full">
                        <span className="text-sm font-medium">Nombre</span>
                        <input
                            type="text"
                            value={name}
                            readOnly
                            className="p-2 rounded-lg capitalize border border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                            placeholder="Tu nombre"
                        />
                    </label>

                    {
                        useFechaHora.map((item, index) => (
                            <div key={index}>
                                {item.hora}
                            </div>
                        ))
                    }
                    <div className="flex flex-col gap-2 w-full">
                        <span className="text-sm font-medium">Fecha</span>
                        <div className="flex overflow-x-auto gap-2 py-2">
                            {generateDates().map((d) => (
                                <button
                                    key={d.iso}
                                    type="button"
                                    onClick={() => setDate(d.iso)}
                                    className={`min-w-[90px] text-sm px-3 py-2 rounded-lg border whitespace-nowrap ${date === d.iso
                                        ? "bg-rose-500 text-white border-rose-400"
                                        : "bg-white text-rose-900 border-white"
                                        } hover:bg-rose-400 hover:border-rose-400 hover:text-white transition`}
                                >
                                    {d.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {Object.entries(timeSlots).map(([label, slots]) =>
                            renderTimeButtons(label, slots)
                        )}
                    </div>

                    <button
                        type="submit"
                        className="mt-6 bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-white hover:text-rose-500 transition"
                    >
                        Reservar
                    </button>
                </form>
            </div>

        </div>
    );
}

export default Bookyng;