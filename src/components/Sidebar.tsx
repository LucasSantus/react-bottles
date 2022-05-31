import { useState } from "react";

export default function Sidebar() {
    const [open, setOpen] = useState(true);

    const menu_items = [
        { title: "Dashboard", src: "Chart_fill" },
        // { title: "Inbox", src: "Chat" },
        // { title: "Accounts", src: "User", gap: true },
    ];

    return (
        <div
            className={`${
                open ? "w-72" : "w-20"
            } bg-slate-900 h-screen p-5  pt-8 relative duration-300`}
        >
            <img
                src="./src/assets/control.png"
                className={
                    `absolute cursor-pointer -right-3 top-9 w-7 border-slate
                    border-2 rounded-full  ${!open && "rotate-180"}`
                }
                onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
                <img
                    src="./src/assets/logo.png"
                    className={`cursor-pointer duration-500 ${
                    open && "rotate-[360deg]"
                    }`}
                />
                <h1
                    className={`text-white origin-left font-medium text-xl duration-200 ${
                        !open && "scale-0"
                    }`}
                >
                    Adega UBUNTU
                </h1>
            </div>
            <ul className="pt-6">
                {menu_items.map((item, index) => (
                    <li
                        key={index}
                        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
                    >
                        <img src={`./src/assets/${item.src}.png`} />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            {item.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};