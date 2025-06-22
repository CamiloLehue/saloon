import { useState } from "react";
import { useNavigate } from "react-router";

function Register() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    console.log(password);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        localStorage.setItem("authToken", JSON.stringify({ username }));
        localStorage.removeItem("cart");
        navigate("/servicios");
    };

    const user = JSON.parse(localStorage.getItem("authToken") || "{}");

    return (
        <div className="grid grid-cols-2 min-h-[600px] pt-10">
            <div className="w-full h-full flex flex-col justify-start items-center ">
                <h1 className="text-3xl mb-8">Registrarme</h1>
                <form onSubmit={handleSubmit} className="w-2/3 max-w-md space-y-4">
                    <input
                        type="text"
                        placeholder="Usuario"
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-rose-300 rounded"
                        required
                    />
                    <input
                        type="mail"
                        placeholder="user@example.com"
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-rose-300 rounded"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-rose-300 rounded"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Repetir Contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-rose-300 rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full rounded-full bg-white mt-10  text-rose-600 p-2 hover:bg-rose-400 hover:text-white"
                    >
                        Crear Cuenta
                    </button>
                </form>
            </div>
            <div className="w-full h-full ">
                {
                    user.username
                }
            </div>

        </div>
    );
}

export default Register;