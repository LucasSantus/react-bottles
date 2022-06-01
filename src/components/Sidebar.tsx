import { useState } from "react";
import { Link } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default function Sidebar() {
    const [open, setOpen] = useState(true);

    const menu_items = [
        { 
            title: "Dashboard", icon: <HomeIcon /> 
        },
    ];

    return (
        <div
            className={`${open ? "w-72" : "w-20"} bg-slate-900 h-screen p-5 pt-8 relative duration-300`}
        >
            <ArrowCircleLeftIcon 
                className={
                    `text-gray-300 absolute cursor-pointer -right-4 top-9 w-7 border-2 border-white rounded-full
                    hover:text-white
                    active:text-slate-600 
                    ${!open && "rotate-180"}`
                }
                fontSize="large"
                onClick={() => setOpen(!open)}
                />
            <div className="flex gap-x-4 items-center">
                {/* <img
                    src="./src/assets/logo.png"
                    className={`cursor-pointer duration-500 ${
                    open && "rotate-[360deg]"
                    }`}
                /> */}

                <h1
                    className={`text-white font-medium text-xl ${
                        !open && "scale-0"
                    }`}
                >
                    Adega Ubuntu
                </h1>
            </div>
            <ul className="pt-6">
                {menu_items.map((item, index) => (
                    <Link to="/" key={index}>
                        <li
                            className={`
                                flex items-center rounded-md cursor-pointer text-lg gap-x-4 duration-200
                                ${open ? "p-3" : "p-2"}
                                text-gray-300
                                hover:bg-slate-800 
                                active:bg-slate-600 
                                focus:outline-none focus:ring focus:ring-white`}
                        >
                            {item.icon}
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {item.title}
                            </span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};