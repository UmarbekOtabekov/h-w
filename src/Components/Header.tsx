import logo from "../assets/logo.svg"
import moscow from "../assets/city.svg"
import down from "../assets/Group 3.svg"
import { Link } from "react-router-dom"
function Header() {
    return (
        <nav className="flex items-center justify-between py-11">
            <img src={logo} className="cursor-pointer" alt="" />
            <img src={moscow} className="cursor-pointer" alt="" />
            <div className="flex items-center gap-2">
                <span className="text-lg font-medium">8 495 018-32-10</span>
                <img className="cursor-pointer" src={down} alt="" />
                <span className="text-sm underline text-kok">
                    Заказать звонок
                </span>
            </div>
            <div className="flex items-center text-kok gap-3">
                <Link to={"/"}>
                    Оплата
                </Link>
                <Link to={"/"}>
                    Доставка
                </Link>
                <Link to={"/"}>
                    Поставщикам
                </Link>
                <Link to={"/"}>
                    Статьи
                </Link>
                <Link to={"/"}>
                    Контакты
                </Link>
            </div>
        </nav>
    )
}

export default Header