import { useNavigate } from "react-router";

function Servicios() {

    const navigate = useNavigate();
    const dataServices = [
        {
            id: "cortes",
            name: "Cortes",
            img: "/services/cortes.png"
        },
        {
            id: "tintes",
            name: "Tintes & Coloración",
            img: "/services/tintes.png"
        },
        {
            id: "tratamientos",
            name: "Tratamientos Capilar",
            img: "/services/capilar.png"
        },
        {
            id: "peinados",
            name: "Peinados",
            img: "/services/peinados.png"
        }
    ]

    return (
        <div className="w-full h-full flex flex-col justify-start items-start">
            <div className=" border-s-4 mx-5 px-2 text-black">
                <h1 className="text-5xl uppercase font-bold ">Servicios</h1>
                <small className="text-lg">Selecciona tú servicio</small>
            </div>
            <div className="flex w-full h-full flex-col justify-start items-start gap-5 p-5">
                <div className="w-full flex -space-x-50 h-full  space-y-3 ">
                    {
                        dataServices.map((service, index) => (
                            <div
                                key={index}
                                className=" w-full group h-[350px]  stransition-all duration-500 overflow-hidden flex flex-col justify-center items-center gap-2 cursor-pointer"

                            >
                                <div
                                    onClick={() => navigate(`/servicios/${service.id}`)}
                                    className="relative w-full h-full group cursor-pointer transition-all duration-500 "
                                    style={{
                                        clipPath: "polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 10% 50%, 0% 0%)"
                                    }}
                                >
                                    <img src={service.img} alt={service.name} className="group-hover:-translate-x-5 w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                                    <div className="absolute  left-0 top-0 w-full h-full bg-gradient-to-l from-rose-200/50 ">
                                        <div className="absolute bottom-10 left-10  h-10  bg-black/20 group-hover:bg-rose-400 transition-all duration-300 -skew-3  px-5 flex justify-center items-center">
                                            <h2 className="text-white font-bold uppercase ">
                                                {
                                                    service.name
                                                }
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Servicios