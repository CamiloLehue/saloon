import { useParams } from "react-router";
import { useRef } from 'react'
import { useHover } from 'usehooks-ts'
import { GrAdd } from "react-icons/gr";
import type { CartType } from "../../shop/type/ShopType";
import { useCart } from "../../shop/context/CartContext";
import { useHaircuts } from "../../haircut/hooks/useHairCut";

function Cut() {

  const { id } = useParams();
  const haircuts = useHaircuts();

  // const haircuts = [
  //   { id: 1, nombre: "Corte Clásico Mujer", descripcion: "cortes", state: true, img: "", precio: 12000 },
  //   { id: 2, nombre: "Corte en Capas", descripcion: "cortes", state: true, img: "", precio: 13500 },
  //   { id: 3, nombre: "Corte Bob", descripcion: "cortes", state: true, img: "", precio: 14000 },
  //   { id: 4, nombre: "Corte Pixie", descripcion: "cortes", state: true, img: "", precio: 13000 },
  //   { id: 5, nombre: "Corte Clásico Hombre", descripcion: "cortes", state: true, img: "", precio: 10000 },
  //   { id: 6, nombre: "Corte Fade", descripcion: "cortes", state: true, img: "", precio: 11000 },
  //   { id: 7, nombre: "Corte Infantil", descripcion: "cortes", state: true, img: "", precio: 9000 },
  //   { id: 8, nombre: "Corte Undercut", descripcion: "cortes", state: true, img: "", precio: 11500 },
  //   { id: 9, nombre: "Corte con Máquina", descripcion: "cortes", state: true, img: "", precio: 8500 },
  //   { id: 10, nombre: "Corte Desvanecido", descripcion: "cortes", state: true, img: "", precio: 12000 },

  //   { id: 11, nombre: "Tinte Completo", descripcion: "tintes", state: true, img: "", precio: 25000 },
  //   { id: 12, nombre: "Tinte Raíces", descripcion: "tintes", state: true, img: "", precio: 18000 },
  //   { id: 13, nombre: "Tinte Fantasía", descripcion: "tintes", state: true, img: "", precio: 28000 },
  //   { id: 14, nombre: "Balayage", descripcion: "tintes", state: true, img: "", precio: 30000 },
  //   { id: 15, nombre: "Mechas Californianas", descripcion: "tintes", state: true, img: "", precio: 27000 },
  //   { id: 16, nombre: "Mechas Babylights", descripcion: "tintes", state: true, img: "", precio: 29000 },
  //   { id: 17, nombre: "Tinte Hombre", descripcion: "tintes", state: true, img: "", precio: 16000 },
  //   { id: 18, nombre: "Reflejos", descripcion: "tintes", state: true, img: "", precio: 20000 },
  //   { id: 19, nombre: "Tinte Semipermanente", descripcion: "tintes", state: true, img: "", precio: 19000 },
  //   { id: 20, nombre: "Decoloración", descripcion: "tintes", state: true, img: "", precio: 26000 },

  //   { id: 21, nombre: "Alisado Keratina", descripcion: "tratamientos", state: true, img: "", precio: 28000 },
  //   { id: 22, nombre: "Botox Capilar", descripcion: "tratamientos", state: true, img: "", precio: 25000 },
  //   { id: 23, nombre: "Tratamiento Hidratante", descripcion: "tratamientos", state: true, img: "", precio: 18000 },
  //   { id: 24, nombre: "Tratamiento Reparador", descripcion: "tratamientos", state: true, img: "", precio: 20000 },
  //   { id: 25, nombre: "Shock de Queratina", descripcion: "tratamientos", state: true, img: "", precio: 23000 },
  //   { id: 26, nombre: "Tratamiento Antifrizz", descripcion: "tratamientos", state: true, img: "", precio: 19000 },
  //   { id: 27, nombre: "Tratamiento Brillo Extremo", descripcion: "tratamientos", state: true, img: "", precio: 18500 },
  //   { id: 28, nombre: "Peeling Capilar", descripcion: "tratamientos", state: true, img: "", precio: 17000 },
  //   { id: 29, nombre: "Tratamiento Reestructurante", descripcion: "tratamientos", state: true, img: "", precio: 22000 },
  //   { id: 30, nombre: "Tratamiento Detox Capilar", descripcion: "tratamientos", state: true, img: "", precio: 17500 },

  //   { id: 31, nombre: "Peinado Ondas Sueltas", descripcion: "peinados", state: true, img: "", precio: 14000 },
  //   { id: 32, nombre: "Peinado Recogido Bajo", descripcion: "peinados", state: true, img: "", precio: 16000 },
  //   { id: 33, nombre: "Moño Alto", descripcion: "peinados", state: true, img: "", precio: 14500 },
  //   { id: 34, nombre: "Trenzas Boxeadoras", descripcion: "peinados", state: true, img: "", precio: 15000 },
  //   { id: 35, nombre: "Peinado de Novia", descripcion: "peinados", state: true, img: "", precio: 29000 },
  //   { id: 36, nombre: "Peinado con Rulos", descripcion: "peinados", state: true, img: "", precio: 13500 },
  //   { id: 37, nombre: "Peinado con Plancha", descripcion: "peinados", state: true, img: "", precio: 13000 },
  //   { id: 38, nombre: "Peinado Infantil", descripcion: "peinados", state: true, img: "", precio: 11000 },
  //   { id: 39, nombre: "Semi Recogido", descripcion: "peinados", state: true, img: "", precio: 15000 },
  //   { id: 40, nombre: "Peinado Glam", descripcion: "peinados", state: true, img: "", precio: 17000 },

  //   { id: 41, nombre: "Corte Flequillo", descripcion: "cortes", state: true, img: "", precio: 9000 },
  //   { id: 42, nombre: "Tinte Rojo Intenso", descripcion: "tintes", state: true, img: "", precio: 22000 },
  //   { id: 43, nombre: "Tratamiento de Argán", descripcion: "tratamientos", state: true, img: "", precio: 21000 },
  //   { id: 44, nombre: "Trenza Holandesa", descripcion: "peinados", state: true, img: "", precio: 14000 },
  //   { id: 45, nombre: "Peinado de Gala", descripcion: "peinados", state: true, img: "", precio: 20000 },
  //   { id: 46, nombre: "Corte Mullet", descripcion: "cortes", state: true, img: "", precio: 12500 },
  //   { id: 47, nombre: "Tinte Azul Eléctrico", descripcion: "tintes", state: true, img: "", precio: 24000 },
  //   { id: 48, nombre: "Tratamiento de Aceite de Coco", descripcion: "tratamientos", state: true, img: "", precio: 19500 },
  //   { id: 49, nombre: "Peinado Rockabilly", descripcion: "peinados", state: true, img: "", precio: 15500 },
  //   { id: 50, nombre: "Corte Bob Asimétrico", descripcion: "cortes", state: true, img: "", precio: 14500 },
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
            <CutCard haircut={{ ...h, href: '' }} key={index} />
          ))}
      </div>
    </div>
  )
}


const CutCard = ({ haircut }: { haircut: CartType }) => {
  const { addToCart, cart } = useCart();

  const ref = useRef(null)
  const isHover = useHover(ref as unknown as React.RefObject<HTMLDivElement>)

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

export default Cut