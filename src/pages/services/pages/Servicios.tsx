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
                <div className="w-full grid grid-cols-2 gap-5 overflow-hidden">
                    {
                        dataServices.map((service, index) => (
                            <div
                                key={index}
                                onClick={() => navigate(`/servicios/${service.id}`)}
                                className="relative w-full h-90 group cursor-pointer hover:scale-100 transition-all duration-200 overflow-hidden ">
                                <img src={service.img} alt={service.name} className="w-full h-full object-cover  group-hover:scale-120 transition-all duration-300" />
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                                    <h2 className="text-white text-center font-light uppercase">{service.name}</h2>
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