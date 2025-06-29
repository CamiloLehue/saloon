import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Loading from "../../../components/ui/Loading";
import { GrContactInfo, GrInsecure } from "react-icons/gr";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        localStorage.setItem("authToken", JSON.stringify({ username }));
        localStorage.removeItem("cart");
        setTimeout(() => {
            setLoading(false);
            navigate("/servicios");
        }, 1000);
    };

    const user = JSON.parse(localStorage.getItem("authToken") || "{}");

    if (loading) {
        return <Loading />;
    }

    return (
        <div className={`grid grid-cols-2 min-h-[600px] px-5`}>
            <div className="w-full h-full ">
                {user.username}
            </div>
            <div className="w-full  h-full bg-gradient-to-br from-rose-300/50 rounded-2xl flex flex-col justify-start gap-1 py-8 items-center">
                <small className="font-bold text-black/50 -skew-3 ">Accede con tus datos</small>
                <h3 className="text-4xl mb-10 font-bold text-black/50 -skew-3 ">
                    Para agendar tu hora!
                </h3>
                <form onSubmit={handleSubmit}>
                    <section className="flex flex-col justify-center items-center gap-2 scale-80">
                        <div className="group relative w-90 h-40 ">
                            <div className="absolute top-0 
                                bg-rose-900 
                                w-80 h-30 
                                translate-y-1  translate-x-1
                              -skew-3 group-hover:translate-y-6  group-hover:translate-x-6 transition-all duration-300 ">
                            </div>
                            <div className="absolute -skew-2 -top-5 left-5 w-30 h-10 z-1 bg-rose-400 border-2 border-rose-900 flex flex-col justify-center items-center">
                                <h4 className="text-rose-900 font-bold">Usuario</h4>
                            </div>
                            <div className="relative 
                                    bg-rose-400 
                                    border-2 border-rose-900
                                    w-80 h-30 
                                    -skew-3"
                            >
                                <div className="grid grid-cols-3 w-full h-full place-items-center">
                                    <div className="w-[calc(100%-2rem)] h-[calc(100%-3rem)] bg-rose-900 p-2 group-hover:translate-y-1  group-hover:translate-x-1 transition-all duration-700 ">
                                        <div className=" h-full w-full bg-rose-300 flex flex-col justify-center items-center group-hover:-translate-y-3.5  group-hover:-translate-x-3.5 transition-all duration-500">
                                            <GrContactInfo className="text-rose-900 text-4xl" />
                                        </div>
                                    </div>
                                    <div className="w-full col-span-2  pe-5">
                                        <input
                                            name="username"
                                            type="text"
                                            placeholder="Usuario"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="w-full p-2  border-2 border-rose-900 rounded text-rose-900"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative w-90 h-40  scale-95 focus:scale-100 ">
                            <div className="absolute top-0 
                                bg-rose-900 
                                w-80 h-30 
                                translate-y-1  translate-x-1
                                -skew-3 group-hover:translate-y-6  group-hover:translate-x-6 transition-all duration-300 "
                            >
                            </div>
                            <div className="absolute -skew-2 -top-5 left-5 w-30 h-10 z-1 bg-rose-400 border-2 border-rose-900 flex flex-col justify-center items-center">
                                <h4 className="text-rose-900 font-bold">Contraseña</h4>
                            </div>
                            <div className="relative 
                                bg-rose-400 
                                border-2 border-rose-900
                                w-80 h-30 
                                -skew-3"
                            >
                                <div className="grid grid-cols-3 w-full h-full place-items-center">
                                    <div className="w-[calc(100%-2rem)] h-[calc(100%-3rem)] bg-rose-900 p-2 group-hover:translate-y-1  group-hover:translate-x-1 transition-all duration-700 ">
                                        <div className=" h-full w-full bg-rose-300 flex flex-col justify-center items-center group-hover:-translate-y-3.5  group-hover:-translate-x-3.5 transition-all duration-500">
                                            <GrInsecure className="text-rose-900 text-4xl" />

                                        </div>
                                    </div>
                                    <div className="w-full col-span-2  pe-5">
                                        <input
                                            name="password"
                                            type="password"
                                            placeholder="********"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full p-2  border-2 border-rose-900 rounded text-rose-900"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="flex justify-center flex-col items-center gap-5 scale-80">
                        <label
                            className="relative text-[#8b0836] flex cursor-pointer items-center justify-center gap-[1em] scale-90"
                            htmlFor="heart"
                        >
                            <input className="peer appearance-none" id="heart" name="heart" type="checkbox" />
                            <span
                                className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#8b0836]"
                            >
                            </span>
                            <svg
                                className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:1000] [stroke-dashoffset:1000] peer-checked:[stroke-dashoffset:0]"
                                viewBox="0 0 68 87"
                                fill="transparent"
                                height="87"
                                width="68"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M28.048 74.752c-.74 0-3.428.03-3.674-.175-3.975-3.298-10.07-11.632-12.946-15.92C7.694 53.09 5.626 48.133 3.38 42.035 1.937 38.12 1.116 35.298.93 31.012c-.132-3.034-.706-7.866 0-10.847C2.705 12.67 8.24 7.044 15.801 7.044c1.7 0 3.087-.295 4.55.875 4.579 3.663 5.515 8.992 7.172 14.171.142.443 3.268 6.531 2.1 7.698-.362.363-1.161-10.623-1.05-12.071.26-3.37 1.654-5.522 3.15-8.398 3.226-6.205 7.617-7.873 14.52-7.873 2.861 0 5.343-.274 8.049 1.224 16.654 9.22 14.572 23.568 5.773 37.966-1.793 2.934-3.269 6.477-5.598 9.097-1.73 1.947-4.085 3.36-5.774 5.424-2.096 2.562-3.286 5.29-5.598 7.698-4.797 4.997-9.56 10.065-14.522 14.872-1.64 1.588-10.194 6.916-10.672 7.873-.609 1.217 2.76-.195 4.024-.7"
                                    stroke-width="4px"
                                    pathLength="1000"
                                    stroke="#FFF"
                                ></path>
                            </svg>
                            <p className="text-[1em] font-semibold [user-select:none]">Acepto los <span className="text-rose-100">Términos y Condiciones</span></p>
                        </label>
                        <div>
                            <label>
                                ¿Aún no tienes cuenta? <Link to="/registrar" className="text-rose-900">¡Registrate aquí!</Link>
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center pt-8">
                        <button
                            typeof="button"
                            type="submit"
                            className="group relative  h-23   ">
                            <div className="absolute top-0 
                                bg-rose-900 
                                w-full h-[calc(100%-2.5rem)] 
                                translate-y-2  translate-x-2
                                -skew-3 group-hover:translate-y-6  group-hover:translate-x-6 transition-all duration-300 "
                            >
                            </div>
                            <div className="relative 
                                bg-rose-400 
                                border-2 border-rose-900
                             h-[calc(100%-2.5rem)]
                                -skew-3
                                px-10
                                "

                            >
                                <div className="flex justify-center items-center h-full w-full">
                                    <h3>Ingresar</h3>
                                </div>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;