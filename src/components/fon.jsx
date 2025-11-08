import "./components.css"

// fon svg
import sun from "../assets/sun.svg"; 
import moon from "../assets/moon.svg"
import setting from "../assets/setting.svg";
import { useTheme } from "../context/themeContext";

const FonSetting = () => {
    const { theme, toggleTheme } = useTheme();

    return <>
                 <div className="colors">
                    
                    {/* dark/light mode */}
                    <button className="sun" onClick={toggleTheme}>
                        <img src={theme === "light" ? moon : sun} alt={theme === "light" ? "Dark" : "Light"} />
                    </button>

                    {/* colors */}
                    <button className="setting">
                        <img src={setting} alt="" />
                    </button>
                </div> 
           </>
}

export default FonSetting