import { Link, useLocation } from "react-router-dom"
import { MenuData } from "../constants/menuData"
import "./components.css"
import Logo from "./logo";

const MenuBar = () => {
    const location = useLocation();

    return <>
                <section className="menuBar">
                    <Logo />     {/*logo */}

                    <div className="navbar">   {/*navbar */}
                        {MenuData.map((item) => (
                            <Link
                            key={item.key}
                            to={item.path}
                            className={location.pathname === item.path ? "link active" : "link"}>
                                {item.icon}
                                <p>{item.label}</p>
                            </Link>
                        ))}
                    </div>
                </section>
           </>
}

export default MenuBar


