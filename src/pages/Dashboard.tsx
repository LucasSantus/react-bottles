import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const headers = [
    {
        id: 1,
        name: 'Líquido',
        
    },
    {   
        id: 2,
        name: 'Volume',
    },
    {
        id: 3,
        name: 'Garrafa',
    },
    {
        id: 4,
        name: "Preço"
    }
]

const contents = [
    {
        id: 1,
        model: "Plástico",
        volume: "1L",
        liquid: "Água",
        price: "R$ 3.00"
    },
    {
        id: 2,
        model: "Plástico",
        volume: "2L",
        liquid: "Água",
        price: "R$ 5.00"
    },
    {
        id: 3,
        model: "Plástico",
        volume: "5L",
        liquid: "Água",
        price: "R$ 9.00"
    },
]

export default function Dashboard() {
    return (
        <div className="flex bg-slate-800 w-full h-screen">

            <Sidebar />

            <div className="h-screen flex-1 p-7">
                <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
                <div className="container">
                    <div className="flex justify-end w-full pb-10">
                        <Link to="register/bottle/">
                            <button
                                className="mt-6 bg-indigo-600 border border-transparent rounded-md py-2 px-6 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Registrar
                            </button>
                        </Link>
                    </div>

                    <table className="text-white w-full table">
                        <thead>
                            <tr>
                                {headers.length > 0 ? (
                                    headers.map((item) => (
                                        <th className="text-left p-2" key={item.id}>{item.name}</th>
                                    ))) : (
                                        <></>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {contents.length > 0 ? (
                                contents.map((item) => (
                                    <tr className="border-t-2 border-slate-500 text-slate-400" key={item.id}>
                                        <td className="p-2">{item.liquid}</td>
                                        <td className="p-2">{item.volume}</td>
                                        <td className="p-2">{item.model}</td>
                                        <td className="p-2">{item.price}</td>
                                    </tr>
                                ))) : (
                                    <></>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};