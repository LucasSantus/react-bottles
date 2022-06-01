import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <div className="flex justify-center items-center bg-slate-800 w-full h-screen">
            <div className="text-white text-center">
                <h1 className="text-9xl font-bold">404</h1>
                <p className="text-2xl">A página requisitada não foi encontrada.</p>
                <Link to="/">
                    <button
                        className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-2 px-6 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Voltar para Dashboard
                    </button>
                </Link>
            </div>
        </div>
    );
};