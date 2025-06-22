import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem("authToken");

    return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoute;