import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ToggleButton = ({select, setSelect}) => {

    const TOGGLE_CLASSES = "text-sm font-medium flex items-center rounded-full gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";
    return (
        <div className="relative flex w-fit items-center rounded-full">
            <button className={`${TOGGLE_CLASSES} ${select === "light"?"text-white bg-grape":"text-slate-300"}`}
                onClick={()=>setSelect("light")}
            >
                <FiMoon className="relative z-10 text-lg md:text-sm"/>
                <span className="relative z-10">Light</span>
            </button>
            <button className={`${TOGGLE_CLASSES} ${select === "dark"?"text-white bg-grape":"text-slate-900"}`}
                onClick={()=>setSelect("dark")}
            >
                <FiSun className="relative z-10 text-lg md:text-sm" />
                <span className="relative z-10">Dark</span>
            </button>
        </div>
    )
}

export default ToggleButton;