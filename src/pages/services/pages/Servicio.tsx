import { useParams } from "react-router";
import { useRef } from 'react'
import { useHover } from 'usehooks-ts'
import { GrAdd } from "react-icons/gr";
import type { CartType } from "../../shop/type/ShopType";
import { useCart } from "../../shop/context/CartContext";
import { useHaircuts } from "../../haircut/hooks/useHairCut";

function Servicio() {

    const { id } = useParams();
    const haircuts = useHaircuts();

    // const haircuts = [
    //     { id: 1, name: "Corte Clásico Mujer", categoria: "cortes", state: true, img: "", price: 12000 },
    //     { id: 2, name: "Corte en Capas", categoria: "cortes", state: true, img: "", price: 13500 },
    //     { id: 3, name: "Corte Bob", categoria: "cortes", state: true, img: "", price: 14000 },
    //     { id: 4, name: "Corte Pixie", categoria: "cortes", state: true, img: "", price: 13000 },
    //     { id: 5, name: "Corte Clásico Hombre", categoria: "cortes", state: true, img: "", price: 10000 },
    //     { id: 6, name: "Corte Fade", categoria: "cortes", state: true, img: "", price: 11000 },
    //     { id: 7, name: "Corte Infantil", categoria: "cortes", state: true, img: "", price: 9000 },
    //     { id: 8, name: "Corte Undercut", categoria: "cortes", state: true, img: "", price: 11500 },
    //     { id: 9, name: "Corte con Máquina", categoria: "cortes", state: true, img: "", price: 8500 },
    //     { id: 10, name: "Corte Desvanecido", categoria: "cortes", state: true, img: "", price: 12000 },

    //     { id: 11, name: "Tinte Completo", categoria: "tintes", state: true, img: "", price: 25000 },
    //     { id: 12, name: "Tinte Raíces", categoria: "tintes", state: true, img: "", price: 18000 },
    //     { id: 13, name: "Tinte Fantasía", categoria: "tintes", state: true, img: "", price: 28000 },
    //     { id: 14, name: "Balayage", categoria: "tintes", state: true, img: "", price: 30000 },
    //     { id: 15, name: "Mechas Californianas", categoria: "tintes", state: true, img: "", price: 27000 },
    //     { id: 16, name: "Mechas Babylights", categoria: "tintes", state: true, img: "", price: 29000 },
    //     { id: 17, name: "Tinte Hombre", categoria: "tintes", state: true, img: "", price: 16000 },
    //     { id: 18, name: "Reflejos", categoria: "tintes", state: true, img: "", price: 20000 },
    //     { id: 19, name: "Tinte Semipermanente", categoria: "tintes", state: true, img: "", price: 19000 },
    //     { id: 20, name: "Decoloración", categoria: "tintes", state: true, img: "", price: 26000 },

    //     { id: 21, name: "Alisado Keratina", categoria: "tratamientos", state: true, img: "", price: 28000 },
    //     { id: 22, name: "Botox Capilar", categoria: "tratamientos", state: true, img: "", price: 25000 },
    //     { id: 23, name: "Tratamiento Hidratante", categoria: "tratamientos", state: true, img: "", price: 18000 },
    //     { id: 24, name: "Tratamiento Reparador", categoria: "tratamientos", state: true, img: "", price: 20000 },
    //     { id: 25, name: "Shock de Queratina", categoria: "tratamientos", state: true, img: "", price: 23000 },
    //     { id: 26, name: "Tratamiento Antifrizz", categoria: "tratamientos", state: true, img: "", price: 19000 },
    //     { id: 27, name: "Tratamiento Brillo Extremo", categoria: "tratamientos", state: true, img: "", price: 18500 },
    //     { id: 28, name: "Peeling Capilar", categoria: "tratamientos", state: true, img: "", price: 17000 },
    //     { id: 29, name: "Tratamiento Reestructurante", categoria: "tratamientos", state: true, img: "", price: 22000 },
    //     { id: 30, name: "Tratamiento Detox Capilar", categoria: "tratamientos", state: true, img: "", price: 17500 },

    //     { id: 31, name: "Peinado Ondas Sueltas", categoria: "peinados", state: true, img: "", price: 14000 },
    //     { id: 32, name: "Peinado Recogido Bajo", categoria: "peinados", state: true, img: "", price: 16000 },
    //     { id: 33, name: "Moño Alto", categoria: "peinados", state: true, img: "", price: 14500 },
    //     { id: 34, name: "Trenzas Boxeadoras", categoria: "peinados", state: true, img: "", price: 15000 },
    //     { id: 35, name: "Peinado de Novia", categoria: "peinados", state: true, img: "", price: 29000 },
    //     { id: 36, name: "Peinado con Rulos", categoria: "peinados", state: true, img: "", price: 13500 },
    //     { id: 37, name: "Peinado con Plancha", categoria: "peinados", state: true, img: "", price: 13000 },
    //     { id: 38, name: "Peinado Infantil", categoria: "peinados", state: true, img: "", price: 11000 },
    //     { id: 39, name: "Semi Recogido", categoria: "peinados", state: true, img: "", price: 15000 },
    //     { id: 40, name: "Peinado Glam", categoria: "peinados", state: true, img: "", price: 17000 },

    //     { id: 41, name: "Corte Flequillo", categoria: "cortes", state: true, img: "", price: 9000 },
    //     { id: 42, name: "Tinte Rojo Intenso", categoria: "tintes", state: true, img: "", price: 22000 },
    //     { id: 43, name: "Tratamiento de Argán", categoria: "tratamientos", state: true, img: "", price: 21000 },
    //     { id: 44, name: "Trenza Holandesa", categoria: "peinados", state: true, img: "", price: 14000 },
    //     { id: 45, name: "Peinado de Gala", categoria: "peinados", state: true, img: "", price: 20000 },
    //     { id: 46, name: "Corte Mullet", categoria: "cortes", state: true, img: "", price: 12500 },
    //     { id: 47, name: "Tinte Azul Eléctrico", categoria: "tintes", state: true, img: "", price: 24000 },
    //     { id: 48, name: "Tratamiento de Aceite de Coco", categoria: "tratamientos", state: true, img: "", price: 19500 },
    //     { id: 49, name: "Peinado Rockabilly", categoria: "peinados", state: true, img: "", price: 15500 },
    //     { id: 50, name: "Corte Bob Asimétrico", categoria: "cortes", state: true, img: "", price: 14500 },
    // ];

    return (
        <div className="p-5 h-full w-full  ">
            <div className=" border-s-4 mx-5 px-2 mb-5 text-black">
                <h1 className="text-5xl uppercase font-bold ">{id}</h1>
                <small className="text-lg">Selecciona tú {id}</small>
            </div>
            <div className="grid grid-cols-3 gap-1 h-full w-full">
                {haircuts
                    .filter(h => h.descripcion === id)
                    .map((h, index) => (
                        <ServicioCard haircut={h} key={index} />
                    ))}
            </div>
        </div>
    )
}


const ServicioCard = ({ haircut }: { haircut: CartType }) => {
    const { addToCart, cart } = useCart();

    const ref = useRef(null)
    const isHover = useHover(ref)

    return (
        <div
            ref={ref}
            onClick={() => addToCart(haircut)}
            className="relative cursor-pointer overflow-hidden w-full h-40 bg-black/10 flex flex-col justify-center items-center"

        >

            {isHover ? (
                <div className="absolute z-20 bg-rose-500/30 top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4">
                    <div className="absolute top-0 left-0 w-full h-full bg-black ">
                        <img src="/services/cortes.png" alt="" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-black/20 backdrop-blur-2xl ">
                    </div>
                    <GrAdd size={20} className="relative text-white" />
                    <h2 className="relative font-bold text-sky-400"> ${haircut.precio}</h2>
                </div>
            )
                :
                <>
                    <div className="absolute top-0 left-0 w-full h-full bg-black ">
                        <img src="/services/cortes.png" alt="" />
                    </div>
                    <div className="absolute right-0 top-0 bg-rose-500 px-2 py-0.5 rounded-bl">
                        <h3 className="font-bold"> ${haircut.precio}</h3>
                    </div>
                    <h1 className="relative z-30 text-white">{haircut.id} {cart.find(c => c.id === haircut.id) ? <small className="text-rose-200 text-[10px]">(En Carrito)  </small> : null}</h1>
                    <h3 className="relative font-bold uppercase text-white">{haircut.nombre}</h3>
                </>}
        </div>
    )
}

export default Servicio