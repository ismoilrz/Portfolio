import "./components.css"

import sun from "../assets/sun.svg"; 
import setting from "../assets/setting.svg";

const FonSetting = () => {
    return <>
                 <div className="colors">
                    <div className="sun">
                        <img src={sun} alt="" />
                    </div>
                    <div className="setting">
                        <img src={setting} alt="" />
                    </div>
                </div> 
           </>
}

export default FonSetting