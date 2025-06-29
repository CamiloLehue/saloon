import { Outlet, useNavigate } from 'react-router'
import Header from './Header'
import { useCart } from '../pages/shop/context/CartContext';

function Template() {
    const navigate = useNavigate();
    const { clearCart } = useCart();

    const user = JSON.parse(localStorage.getItem("authToken") || "{}");

    const handleClickRemoveToken = () => {
        localStorage.removeItem("authToken");
        clearCart();

        navigate("/auth");
        alert("Sesión cerrada");
    };

    return (
        <div className="h-full min-h-screen w-full text-white  bg-fixed bg-cover bg-center backdrop-blur"
            style={{
                backgroundImage: 'url("/bg-hero2.jpeg")',
            }}>
            <div className='bg-gradient-to-bl from-rose-700 to-rose-300/50 w-full h-full'>
                <div className='relative bg-white p-2 w-full h-full flex justify-between items-center gap-10'>
                    <div className='px-5 flex justify-center items-center gap-3'>
                        <small className='text-black'>+56 9 5566 3435</small>
                        <small className='text-black'>Castro, Chiloé </small>
                    </div>
                    <div className='left-[50%] -translate-x-1/2  top-0 absolute w-full h-full flex justify-center items-center'>
                        <h1 className='text-rose-400 font-black'>SALON ISAMAR</h1>
                    </div>

                    <nav>
                        {
                            user.username ?
                                <ul className='relative flex justify-end items-center gap-0.5 text-black'>
                                    <div className='bg-black/5 px-10 rounded-full py-2'>
                                        <p className='text-rose-500'>{user.username}</p>
                                    </div>
                                    <li
                                        onClick={() => handleClickRemoveToken()}
                                        className='bg-rose-400 border border-rose-400 py-1 px-6 rounded-full text-white cursor-pointer'>
                                        Cerrar Sesión
                                    </li>
                                </ul> :
                                <ul className='relative flex justify-end items-center gap-0.5 text-black'>
                                    <li
                                        onClick={() => navigate("/registrar")}
                                        className='bg-rose-400 border border-rose-400 py-1 px-6 rounded-full text-white cursor-pointer'>Crear Cuenta</li>
                                    <li
                                        onClick={() => navigate("/auth")}
                                        className='border border-rose-400 py-1 px-6 rounded-full cursor-pointer'>Iniciar Sesión</li>
                                </ul>

                        }

                    </nav>
                </div>
                <div className='max-w-[1500px]  mx-auto py-5 flex flex-col justify-center items-center gap-10 h-full'>
                    <Header />
                    <div className=' py-5  w-full h-full'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template