import MenuBar from "./menuBar"

import "./components.css"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routes } from "../constants/routes"
import FonSetting from "./fon"
import { useTheme } from "../context/themeContext"

const AllComponents = () => {
    const { theme } = useTheme();

    return <>
                <div className={`wrap ${theme}`}>
                    <div className="components">
                        <MenuBar />
                    </div>
                   
                     <section className="content">
                        <div className="fonSettings">
                            <FonSetting />
                        </div>
                        <Suspense>
                            <Routes>
                                {routes.map((item, index) => (
                                    <Route key={index} path={item.path} element={item.element} />
                                ))}
                            </Routes>
                        </Suspense>
                    </section>
                </div>
           </>
}

export default AllComponents