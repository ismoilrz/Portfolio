import { Link, useLocation } from "react-router-dom"
import { MenuData } from "../constants/menuData"
import "./components.css"

const MenuBar = () => {
    const location = useLocation()

    return <>
                <section className="menuBar">
                    <div className="menuBarLogo">
                        <div> <address>BAK<span>III</span></address></div>
                    </div>

                    <div className="navbar">
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


