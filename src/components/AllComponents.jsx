
import MenuBar from "./menuBar"

import "./components.css"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routes } from "../constants/routes"

const AllComponents = () => {
    return <>
                <div className="wrap">
                    <div className="components">
                        <MenuBar />
                    </div>
                    <section className="content">
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