import { useCallback, useEffect, useRef, useState } from "react" // <-- se añadió useRef
import { GrFormTrash, GrShop } from "react-icons/gr"
import { useCart } from "../pages/shop/context/CartContext";
import { useNavigate } from "react-router";

function Header() {
    const navigate = useNavigate();
    const { cart, uniqueItems, removeFromCart, getTotalAmount, getTotalItems, clearCart } = useCart();
    const user = JSON.parse(localStorage.getItem("authToken") || "{}");

    const menu = [
        { id: 1, name: 'Inicio', href: '/' },
        { id: 2, name: 'Servicios', href: '/servicios' },
        { id: 3, name: 'Crear mi reserva', href: '/reservar' },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const cartRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    }, []);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClickOutside); // <-- clic fuera

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleKeyDown, handleClickOutside]);

    return (
        <div className='relative w-full max-w-[1500px] flex justify-center items-center h-full mx-auto py-5 gap-10'>
            <nav className="relative bg-white shadow shadow-rose-950/30 ps-10 pe-3 rounded-full py-4">
                <ul className="flex gap-10 ">
                    {menu.map((item, index) => (
                        <>
                            {
                                item.id === 3
                                    ?
                                    <li key={index}>
                                        <a href={item.href} className=" font-light bg-rose-500 px-4 rounded-full text-white py-2 shadow">{item.name}</a>
                                    </li>
                                    :
                                    <li key={index}>
                                        <a href={item.href} className="text-rose-500 font-light">{item.name}</a>
                                    </li>
                            }
                        </>
                    ))}
                </ul>
            </nav>
            {user.username && <div className="absolute right-10 top-3 h-17  rounded-full flex items-center justify-center gap-5">
                <div>
                    <nav>
                        <ul className="flex justify-center items-center ">
                            <li className="cursor-pointer" onClick={() => { navigate('/mis-reservas') }}>Mis reservas</li>
                        </ul>
                    </nav>
                </div>
                <GrShop
                    onClick={() => setIsOpen(!isOpen)}
                    size={25}
                    className="hover:text-rose-500 transition-all duration-300 cursor-pointer"
                />
                {
                    !isOpen &&
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="absolute -right-0.5 cursor-pointer bg-white text-rose-600 top-9 h-5.5 w-5.5 rounded-full flex justify-center items-center">
                        <p className="font-bold">{getTotalItems()}</p>
                    </div>
                }

                {
                    isOpen &&
                    <div
                        ref={cartRef}
                        className="w-90 min-h-90 pb-5 absolute top-14 right-0 bg-white/10 border-s border-s-zinc-50/20 border-t border-t-zinc-50/40 rounded-2xl backdrop-blur-2xl z-20">
                        <div className="p-5">
                            <h2 className="text-lg text-white">Listado de Artículos</h2>
                        </div>
                        <div className="p-5 py-2">
                            <div className="flex justify-end items-center">
                                <button
                                    onClick={() => clearCart()}
                                >
                                    Vaciar carro
                                </button>
                            </div>
                            <nav className="flex flex-col justify-start items-start gap-3">
                                {
                                    uniqueItems(cart).map((id, index) => {
                                        const itemGroup = cart.filter(i => i.id === id);
                                        const item = itemGroup[0];
                                        const quantity = itemGroup.length;
                                        const subtotal = itemGroup.reduce((sum, i) => sum + (i.precio || 0), 0);

                                        return (
                                            <div key={index} className="w-full px-4 py-3 flex justify-between items-start bg-white rounded-2xl">
                                                <div className="flex flex-col">
                                                    <p className="text-black font-medium">{item.nombre}</p>
                                                    <p className="text-sm text-zinc-600">{quantity} unidad(es)</p>
                                                </div>
                                                <div className="flex justify-center items-center gap-5">
                                                    <p className="text-black/80">${subtotal.toLocaleString("es-CL")}</p>
                                                    <GrFormTrash
                                                        onClick={() => removeFromCart(item)}
                                                        size={17}
                                                        className="text-red-500 cursor-pointer hover:text-black transition-all duration-200"
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </nav>
                            <div className="py-5 border-t bg-white/15 border-zinc-200/40 rounded-2xl my-4 px-4 flex justify-between items-center">
                                <p className="text-white font-semibold">Total:</p>
                                <p className="text-white font-bold text-lg">${getTotalAmount().toLocaleString("es-CL")}</p>
                            </div>
                            <div className=" px-4">
                                <button
                                    onClick={() => navigate("/reservar")}
                                    className="bg-rose-500 text-white rounded-full px-5 py-2 w-full hover:bg-rose-600 transition">
                                    Crear reserva
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>}
        </div>
    )
}

export default Header;