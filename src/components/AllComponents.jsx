import MenuBar from "./menuBar"

// components
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
                        <MenuBar />         {/*menubar */}
                   
                   {/* content */}

                     <section className="content">
                        <div className="fonSettings">
                            <FonSetting />       {/*fon */}
                        </div>
                        {/* pages */}
                        <Suspense>
                            <Routes>
                                {routes.map((item, index) => (
                                    <Route key={index} path={item.path} element={item.element} />
                                ))}
                            </Routes>
                        </Suspense>

                        {/* content end */}
                    </section>  
                </div>
           </>
}

export default AllComponents