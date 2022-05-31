import Sidebar from "../components/Sidebar";

const headers = [
    {
        name: 'Modelo',
    },
    {   
        name: 'Volume',
    },
    {
        name: 'Líquido',
    },
    {
        name: "Preço"
    }
]

const contents = [
    {
        model: "Plástico",
        volume: "2L",
        liquid: "Água",
        price: "R$ 20.00"
    },
    {
        model: "Plástico",
        volume: "2L",
        liquid: "Água",
        price: "R$ 20.00"
    },
    {
        model: "Plástico",
        volume: "2L",
        liquid: "Água",
        price: "R$ 20.00"
    },
]

export default function Dashboard() {
    return (
        <div className="flex bg-slate-800">
            <Sidebar />
            <div className="h-screen flex-1 p-7">
                <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
                <div className="container pt-20">
                    <table className="text-white w-full table">
                        <thead>
                            <tr>
                                {headers.length > 0 ? (
                                    headers.map((item) => (
                                        <th className="place-items-start">{item.name}</th>
                                    ))) : (
                                        <></>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody className="">
                            {contents.length > 0 ? (
                                contents.map((item) => (
                                    <tr className="border-t-2 border-slate-500 m-8">
                                        <td>{item.model}</td>
                                        <td>{item.volume}</td>
                                        <td>{item.liquid}</td>
                                        <td>{item.price}</td>
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