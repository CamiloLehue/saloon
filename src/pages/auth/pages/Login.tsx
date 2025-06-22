import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        localStorage.setItem("authToken", JSON.stringify({ username }));
        localStorage.removeItem("cart");
        navigate("/servicios");
    };

    const user = JSON.parse(localStorage.getItem("authToken") || "{}");

    return (
        <div className="grid grid-cols-2 min-h-[600px]">
            <div className="w-full h-full ">
                {
                    user.username
                }
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center ">
                <h1 className="text-3xl mb-8">Inicia Sesión</h1>
                <form onSubmit={handleSubmit} className="w-2/3 max-w-md space-y-4">
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-rose-300 rounded"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-rose-300 rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full rounded-full bg-white  text-rose-600 p-2 rounded hover:bg-rose-400 hover:text-white"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;