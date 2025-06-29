import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi"
import { useNavigate } from "react-router"
import { useCart } from "../shop/context/CartContext";
import type { CartType } from "../shop/type/ShopType";
import { GrFavorite } from "react-icons/gr";

function Home() {
  const navigate = useNavigate();

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
    <div className="h-full w-full relative">
      <section id="slider" className="flex flex-col justify-evenly h-full -translate-y-10">
        <div className="flex flex-col justify-center items-center -skew-3">
          <div className="bg-rose-500 px-10 translate-y-5">
            <h2 className="text-2xl text-rose-50">Bienvenidos</h2>
          </div>
          <div className="bg-rose-500 px-10 z-10 translate-y-6">
            <h1 className="text-5xl font-bold text-rose-50">SALÓN DE BELLEZA</h1>
          </div>
          <div className="bg-purple-950/50 px-10 ">
            <h2 className="text-[10rem] font-black text-neutral-50/90">I S A M A R</h2>
          </div>
          <button
            onClick={() => navigate('/reservar')}
            className="inner-block bg-rose-500 border-4 border-rose-400  hover:border-rose-200 text-white hover:text-rose-200 font-bold py-5 px-20  mt-5"
          >
            Reserva tu hora Aquí
          </button>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-3 gap-10 h-[400px] w-full">
          <div className="col-span-3 w-full flex justify-center items-center ">
            <h2 className="bg-cyan-800 -skew-3 px-5 py-1">Top Servicios</h2>
          </div>

          {haircuts
            .filter(h => h.id === 22 || h.id === 30 || h.id === 49)
            .map((h, index) => (
              <CutCard haircut={{ ...h, href: '' }} key={index} />
            ))}

        </div>
      </section>
      <section >
        <div className="w-full relative  rounded-xs pt-50">
          <div className="relative w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d1471.7561655808438!2d-73.80269724259365!3d-42.45939115752431!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-42.45929419535205!2d-73.80248266620383!5e0!3m2!1sen!2scl!4v1751231021548!5m2!1sen!2scl"
              width="100%"
              height="550"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div
          className="w-full flex flex-col justify-center items-center">
          <div className="py-10 text-center w-full">
            <b>La Chacra 2, Castro, Chile.</b>
            <p>Lunes a Jueves: <span className="font-bold text-rose-200">9:00 a.m
              - 20:30 p.m.</span></p>
            <p>Viernes a Sábado: <span className="font-bold text-rose-200">10:00
              a.m - 19:30 p.m.</span></p>
            <p>Domingo: <span
              className="font-bold text-rose-200">Cerrado</span></p>
          </div>
          <ul
            className="flex flex-row gap-8 text-3xl justify-center align-bottom">
            <li><a className="text-white" href="#">
              <BiLogoFacebook />
            </a></li>
            <li><a className="text-white" href="#">
              <BiLogoInstagram />
            </a></li>
          </ul>
        </div>
      </section>
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
      className="relative flex flex-col justify-center items-center gap-2  cursor-pointer">
      <div className="group relative w-full h-[300px]">
        <div className="absolute top-0 
                                bg-rose-900 
                                w-full h-full 
                                translate-y-2  translate-x-2                                -skew-3 group-hover:translate-y-3  group-hover:translate-x-3 transition-all duration-300 "
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
        <div className="absolute -left-3 z-30 -skew-3 bottom-22 bg-zinc-600/50 px-5 py-2  backdrop-blur-md ">
          <div className="absolute left-0 top-0 h-full w-2 bg-white"></div>
          <div className="absolute left-0 top-0 h-full w-4 bg-white/50"></div>
          <h5 className="relative font-bold uppercase text-white text-nowrap"> {haircut.nombre}</h5>
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
            <div className="relative w-full h-full bg-gradient-to-t from-rose-200/80">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home