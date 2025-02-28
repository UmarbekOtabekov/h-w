import { NavLink } from "react-router-dom"
import catalog from "../assets/catalog.svg"
import search from "../assets/icon.svg"
import person from "../assets/Frame.svg"
import heart from "../assets/heart.svg"
import basket from "../assets/basket.svg"
function Navbar() {
    return (
        <nav className="flex">
            <NavLink to={"/"} className="bg-toq-kok h-16 flex items-center gap-3 text-white px-5 w-fit pr-8 py-5 font-medium">
                <img src={catalog} alt="" />
                <span className="flex items-center gap-1">
                    КАТАЛОГ <span>
                        ТОВАРОВ
                    </span>
                </span>
            </NavLink>
            <NavLink to={"/"} className="bg-och h-16 font-medium text-white flex items-center px-5 py-4">
                <span>
                    АКЦИИ
                </span>
            </NavLink>
            <NavLink to={"/"} className="bg-kok h-16 font-medium text-white flex items-center px-5 py-4">
                <span>
                    БРЕНДЫ
                </span>
            </NavLink>
            <div className="px-6 items-center h-16 gap-1 justify-between flex bg-white w-170">
                <input type="text" className="outline-none placeholder:font-medium placeholder:text-black py-2 flex-1" placeholder="Что вы ищете?" />
                <img className="cursor-pointer" src={search} alt="" />
            </div>
            <div className="bg-och-osmon h-16 gap-5 flex items-center px-9">
                <img className="cursor-pointer" src={person} alt="" />
                <img className="cursor-pointer" src={heart} alt="" />
                <img className="cursor-pointer" src={basket} alt="" />
            </div>
        </nav>
    )
}

export default Navbar