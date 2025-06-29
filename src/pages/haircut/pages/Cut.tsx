import { useParams } from "react-router";
import type { CartType } from "../../shop/type/ShopType";
import { useCart } from "../../shop/context/CartContext";
import { GrFavorite } from "react-icons/gr";
// import { useHaircuts } from "../../haircut/hooks/useHairCut";

function Cut() {

  const { id } = useParams();
  // const haircuts = useHaircuts();

  const haircuts = [
    { "id": 1, "nombre": "Corte Clásico Mujer", "descripcion": "cortes", "state": true, "imagen_src": "/cortes/corte-clasico-mujer.jpg", "precio": 12000 },
    { "id": 2, "nombre": "Corte en Capas", "descripcion": "cortes", "state": true, "imagen_src": "/cortes/corte-en-capas.jpg", "precio": 13500 },
    { "id": 3, "nombre": "Corte Bob", "descripcion": "cortes", "state": true, "imagen_src": "/cortes/corte-bob.jpg", "precio": 14000 },
    { "id": 4, "nombre": "Corte Pixie", "descripcion": "cortes", "state": true, "imagen_src": "/cortes/corte-pixie.jpg", "precio": 13000 },
    { "id": 5, "nombre": "Corte Clásico Hombre", "descripcion": "cortes", "state": true, "imagen_src": "/cortes/corte-clasico-hombre.jpg", "precio": 10000 },
    { "id": 6, "nombre": "Corte Fade", "descripcion": "cortes", "state": true, "imagen_src": "/cortes/corte-fade.jpg", "precio": 11000 },
    { "id": 7, "nombre": "Corte Infantil", "descripcion": "cortes", "state": true, "imagen_src": "/cortes/corte-infantil.jpg", "precio": 9000 },
    { "id": 8, "nombre": "Corte Undercut", "descripcion": "cortes", "state": true, "imagen_src": "/cortes/corte-undercut.jpg", "precio": 11500 },
    { "id": 9, "nombre": "Corte con Máquina", "descripcion": "cortes", "state": true, "imagen_src": "/cortes/corte-con-maquina.jpg", "precio": 8500 },
    { "id": 10, "nombre": "Corte Desvanecido", "descripcion": "cortes", "state": true, "imagen_src": "/cortes/corte-desvanecido.jpg", "precio": 12000 },

    { "id": 11, "nombre": "Tinte Completo", "descripcion": "tintes", "state": true, "imagen_src": "/tintes/tinte-completo.jpg", "precio": 25000 },
    { "id": 12, "nombre": "Tinte Raíces", "descripcion": "tintes", "state": true, "imagen_src": "/tintes/tinte-raices.jpg", "precio": 18000 },
    { "id": 13, "nombre": "Tinte Fantasía", "descripcion": "tintes", "state": true, "imagen_src": "/tintes/tinte-fantasia.jpg", "precio": 28000 },
    { "id": 14, "nombre": "Balayage", "descripcion": "tintes", "state": true, "imagen_src": "/tintes/balayage.jpg", "precio": 30000 },
    { "id": 15, "nombre": "Mechas Californianas", "descripcion": "tintes", "state": true, "imagen_src": "/tintes/mechas-californianas.jpg", "precio": 27000 },
    { "id": 16, "nombre": "Mechas Babylights", "descripcion": "tintes", "state": true, "imagen_src": "/tintes/mechas-babylights.jpg", "precio": 29000 },
    { "id": 17, "nombre": "Tinte Hombre", "descripcion": "tintes", "state": true, "imagen_src": "/tintes/tinte-hombre.jpg", "precio": 16000 },
    { "id": 18, "nombre": "Reflejos", "descripcion": "tintes", "state": true, "imagen_src": "/tintes/reflejos.jpg", "precio": 20000 },
    { "id": 19, "nombre": "Tinte Semipermanente", "descripcion": "tintes", "state": true, "imagen_src": "/tintes/tinte-semipermanente.jpg", "precio": 19000 },
    { "id": 20, "nombre": "Decoloración", "descripcion": "tintes", "state": true, "imagen_src": "/tintes/decoloracion.jpg", "precio": 26000 },

    { "id": 21, "nombre": "Alisado Keratina", "descripcion": "tratamientos", "state": true, "imagen_src": "/tratamientos/alisado-keratina.jpg", "precio": 28000 },
    { "id": 22, "nombre": "Botox Capilar", "descripcion": "tratamientos", "state": true, "imagen_src": "/tratamientos/botox-capilar.jpg", "precio": 25000 },
    { "id": 23, "nombre": "Tratamiento Hidratante", "descripcion": "tratamientos", "state": true, "imagen_src": "/tratamientos/tratamiento-hidratante.jpg", "precio": 18000 },
    { "id": 24, "nombre": "Tratamiento Reparador", "descripcion": "tratamientos", "state": true, "imagen_src": "/tratamientos/tratamiento-reparador.jpg", "precio": 20000 },
    { "id": 25, "nombre": "Shock de Queratina", "descripcion": "tratamientos", "state": true, "imagen_src": "/tratamientos/shock-de-queratina.jpg", "precio": 23000 },
    { "id": 26, "nombre": "Tratamiento Antifrizz", "descripcion": "tratamientos", "state": true, "imagen_src": "/tratamientos/tratamiento-antifrizz.jpg", "precio": 19000 },
    { "id": 27, "nombre": "Tratamiento Brillo Extremo", "descripcion": "tratamientos", "state": true, "imagen_src": "/tratamientos/tratamiento-brillo-extremo.jpg", "precio": 18500 },
    { "id": 28, "nombre": "Peeling Capilar", "descripcion": "tratamientos", "state": true, "imagen_src": "/tratamientos/peeling-capilar.jpg", "precio": 17000 },
    { "id": 29, "nombre": "Tratamiento Reestructurante", "descripcion": "tratamientos", "state": true, "imagen_src": "/tratamientos/tratamiento-reestructurante.jpg", "precio": 22000 },
    { "id": 30, "nombre": "Tratamiento Detox Capilar", "descripcion": "tratamientos", "state": true, "imagen_src": "/tratamientos/tratamiento-detox-capilar.jpg", "precio": 17500 },

    { "id": 31, "nombre": "Peinado Ondas Sueltas", "descripcion": "peinados", "state": true, "imagen_src": "/peinados/peinado-ondas-sueltas.jpg", "precio": 14000 },
    { "id": 32, "nombre": "Peinado Recogido Bajo", "descripcion": "peinados", "state": true, "imagen_src": "/peinados/peinado-recogido-bajo.jpg", "precio": 16000 },
    { "id": 33, "nombre": "Moño Alto", "descripcion": "peinados", "state": true, "imagen_src": "/peinados/mono-alto.jpg", "precio": 14500 },
    { "id": 34, "nombre": "Trenzas Boxeadoras", "descripcion": "peinados", "state": true, "imagen_src": "/peinados/trenzas-boxeadoras.jpg", "precio": 15000 },
    { "id": 35, "nombre": "Peinado de Novia", "descripcion": "peinados", "state": true, "imagen_src": "/peinados/peinado-de-novia.jpg", "precio": 29000 },
    { "id": 36, "nombre": "Peinado con Rulos", "descripcion": "peinados", "state": true, "imagen_src": "/peinados/peinado-con-rulos.jpg", "precio": 13500 },
    { "id": 37, "nombre": "Peinado con Plancha", "descripcion": "peinados", "state": true, "imagen_src": "/peinados/peinado-con-plancha.jpg", "precio": 13000 },
    { "id": 38, "nombre": "Peinado Infantil", "descripcion": "peinados", "state": true, "imagen_src": "/peinados/peinado-infantil.jpg", "precio": 11000 },
    { "id": 39, "nombre": "Semi Recogido", "descripcion": "peinados", "state": true, "imagen_src": "/peinados/semi-recogido.jpg", "precio": 15000 },
    { "id": 40, "nombre": "Peinado Glam", "descripcion": "peinados", "state": true, "imagen_src": "/peinados/peinado-glam.jpg", "precio": 17000 },

    { "id": 41, "nombre": "Corte Flequillo", "descripcion": "cortes", "state": true, "imagen_src": "/cortes/corte-flequillo.jpg", "precio": 9000 },
    { "id": 42, "nombre": "Tinte Rojo Intenso", "descripcion": "tintes", "state": true, "imagen_src": "/tintes/tinte-rojo-intenso.jpg", "precio": 22000 },
    { "id": 43, "nombre": "Tratamiento de Argán", "descripcion": "tratamientos", "state": true, "imagen_src": "/tratamientos/tratamiento-de-argan.jpg", "precio": 21000 },
    { "id": 44, "nombre": "Trenza Holandesa", "descripcion": "peinados", "state": true, "imagen_src": "/peinados/trenza-holandesa.jpg", "precio": 14000 },
    { "id": 45, "nombre": "Peinado de Gala", "descripcion": "peinados", "state": true, "imagen_src": "/peinados/peinado-de-gala.jpg", "precio": 20000 },
    { "id": 46, "nombre": "Corte Mullet", "descripcion": "cortes", "state": true, "imagen_src": "/cortes/corte-mullet.jpg", "precio": 12500 },
    { "id": 47, "nombre": "Tinte Azul Eléctrico", "descripcion": "tintes", "state": true, "imagen_src": "/tintes/tinte-azul-electrico.jpg", "precio": 24000 },
    { "id": 48, "nombre": "Tratamiento de Aceite de Coco", "descripcion": "tratamientos", "state": true, "imagen_src": "/tratamientos/tratamiento-de-aceite-de-coco.jpg", "precio": 19500 },
    { "id": 49, "nombre": "Peinado Rockabilly", "descripcion": "peinados", "state": true, "imagen_src": "/peinados/peinado-rockabilly.jpg", "precio": 15500 },
    { "id": 50, "nombre": "Corte Bob Asimétrico", "descripcion": "cortes", "state": true, "imagen_src": "/cortes/corte-bob-asimetrico.jpg", "precio": 14500 }
  ];

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
  const { addToCart, cart, removeFromCart } = useCart();


  const handleClick = ({ type }: { type: string }) => {

    if (type === "add") {
      addToCart(haircut)
    } else if (type === "remove") {
      if (cart.find(c => c.id === haircut.id)) {
        removeFromCart(haircut)
      } else {
        addToCart(haircut)
      }
    }


  }

  return (
    <div
      onClick={() => handleClick({ type: "remove" })}
      className="relative flex flex-col justify-center items-center gap-2 scale-80 cursor-pointer">
      <div className="group relative w-full h-[300px]">
        <div className="absolute top-0 
                                bg-rose-900 
                                w-full h-full 
                                translate-y-8  translate-x-8
                                -skew-3 group-hover:translate-y-3  group-hover:translate-x-3 transition-all duration-300 "
        >
        </div>
        <div className="absolute -skew-3 -top-5 left-5 w-30 h-10 z-1 bg-rose-400 border-2 border-rose-900 flex flex-col justify-center items-center">
          <h4 className="text-rose-900 font-bold">{haircut.id}</h4>
        </div>
        <div className="absolute -skew-3 -bottom-10 right-5 w-50 h-17 z-1 bg-rose-400 border-4 border-rose-900 flex flex-col justify-center items-center">
          <h1 className="text-rose-900 font-bold">$ {haircut.precio}</h1>
        </div>
        {
          cart.find(c => c.id === haircut.id) &&
          <div
            onClick={() => handleClick({ type: "add" })}
            className="absolute z-50 -skew-3 bottom-10 text-green-800 -left-10 w-50 h-12  bg-green-300 border-4 border-green-900 flex  justify-center items-center gap-2">
            {cart.find(c => c.id === haircut.id) ? <h2 className=" flex items-center gap-2 font-bold"><GrFavorite />
              En Carrito  </h2> : null}

          </div>
        }
        <div className="absolute -left-3 z-30 -skew-3 top-10 bg-warning/20 px-10 py-5 backdrop-blur-md ">
          <div className="absolute left-0 top-0 h-full w-2 bg-white"></div>
          <div className="absolute left-0 top-0 h-full w-4 bg-white/50"></div>
          <h1 className="relative font-bold uppercase text-white"> {haircut.nombre}</h1>
        </div>
        <div className="relative 
                                bg-rose-400 
                                border-2 border-rose-900
                                w-full h-full 
                                -skew-3"
        >
          <div className="relative flex justify-center items-center w-full h-full overflow-hidden ">
            <img src={`/services/${haircut.imagen_src}`} alt="" className="absolute blur left-0 top-0 w-full h-full object-cover" />
            <img src={`/services/${haircut.imagen_src}`} alt="" className="absolute left-0 top-0 w-full h-full object-contain scale-150 
            " />
            <div className="relative w-full h-full bg-gradient-to-t from-rose-200/70">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cut