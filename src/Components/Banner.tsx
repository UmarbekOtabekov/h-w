import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg"
import nuqtalar from "../assets/Group 2.svg"
function Banner() {
    return (
        <div className="mt-3 h-95 flex">
            <div className="bg-toq-kok h-full relative w-230">
                <img src={arrow} className="cursor-pointer absolute left-5 top-43" alt="" />
                <img src={arrow} className="cursor-pointer absolute right-5 rotate-180 top-43" alt="" />
                <img src={nuqtalar} className="absolute cursor-pointer bottom-9 left-88" alt="" />
                <div className="flex absolute top-19 right-26 flex-col gap-3 items-start">
                    <span className="text-3xl font-semibold text-white">
                        СМЕСИТЕЛИ <br />
                        RAIBER
                    </span>
                    <span className="text-xl font-medium text-white ">
                        уже в наличии
                    </span>
                    <button className="px-6 py-3 bg-sariq rounded-md">
                        ПОДРОБНЕЕ
                    </button>
                </div>
            </div>
            <div>
                <div className="bg-och h-[50%] text-white text-xl pr-21.5 font-semibold py-11 pl-60">
                    <span className="w-fit flex flex-col">
                        УНИТАЗЫ <br />
                        <span>
                            ДО 10 000 ₽
                        </span>
                    </span>
                    <Link className="text-sm font-medium" to={"/"}>
                        ПОДРОБНЕЕ
                    </Link>
                </div>
                <div className="bg-yashil h-[50%] text-white text-xl pr-21.5 font-semibold py-11 pl-60">
                    <span className="w-fit flex flex-col">
                        ТОВАРЫ <br />
                        <span className="flex gap-1">
                            СО
                            <span>
                                СКИДКОЙ
                            </span>
                        </span>
                    </span>
                    <Link className="text-sm font-medium" to={"/"}>
                        ПОДРОБНЕЕ
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;