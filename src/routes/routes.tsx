import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import RegisterBottle from "../pages/bottles/Register";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/error/404";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Dashboard />} />

                <Route path="register/bottle/" element={<RegisterBottle />} />

                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}