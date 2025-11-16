import "./components.css"

// fon svg
import sun from "../assets/sun.svg"; 
import moon from "../assets/moon.svg"
import setting from "../assets/setting.svg";
import { useTheme } from "../context/themeContext";
import { useState } from "react";
import Colors from "./colors";
import Logo from "./logo";

const FonSetting = () => {
    const { theme, toggleTheme } = useTheme();

    const [open, setOpen] = useState(false)
    const openProfil = () => {
        setOpen(!open)
    }

    const close = () => {
        setOpen(!open)
    }

    return <>
            <section className="change">
                <div className="changeLogo">
                    <Logo />
                </div>
                <div className="colors">
                    
                    {/* dark/light mode */}
                    <button className="sun" onClick={toggleTheme}>
                        <img src={theme === "light" ? moon : sun} alt={theme === "light" ? "Dark" : "Light"} />
                    </button>

                    {/* colors */}
                    <button className="setting" onClick={openProfil}>
                        <img src={setting} alt="" />
                    </button>
                </div> 
            </section>
                 

                {open && <Colors close={close} />}
           </>
}

export default FonSetting