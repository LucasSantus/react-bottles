import { FormBottle } from "../../components/Form";
import Sidebar from "../../components/Sidebar";

export default function RegisterBottle(){
    return (
        <div className="flex bg-slate-800 w-full h-screen">
            <Sidebar />
            <div className="h-screen flex-1 p-7">
                <h1 className="text-2xl font-semibold text-white">Registrar Garrafa</h1>
                <div className="container">
                    <FormBottle type={"register"} />
                </div>
            </div>
        </div>
    )
}