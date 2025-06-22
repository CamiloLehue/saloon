import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi"
import { useNavigate } from "react-router"

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <section id="slider" className="flex flex-col justify-evenly h-full">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl text-rose-50">Bienvenidos</h2>
          <h1 className="text-5xl font-bold text-rose-50">SALÓN DE BELLEZA</h1>
          <h2 className="text-[10rem] font-black text-neutral-50/90">I S A M A R</h2>
          <button
            onClick={() => navigate('/reservar')}
            className="inner-block border border-rose-100 hover:border-rose-200 text-white hover:text-rose-200 font-bold py-3 px-10 rounded-full mt-5"
          >
            Reserva tu hora Aquí
          </button>
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

export default Home