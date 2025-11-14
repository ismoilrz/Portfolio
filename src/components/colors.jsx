import { useTheme } from "../context/themeContext";
import "./components.css";

const Colors = ({ close }) => {
  const { setAccentColor } = useTheme();

  // change color
  const colors = [
    { name: "red", value: "rgb(203, 3, 3)" },
    { name: "orange", value: "rgb(255, 72, 0)" },
    { name: "green", value: "#00c39fff" },
    { name: "blue", value: "rgb(0, 157, 255)" },
    { name: "pink", value: "rgb(241, 160, 255)" }
  ];

          return (
            <div className="colorsMenu">
              <div className="colorss">
                <p>Theme Colors</p>
                <div className="changeColor">              
                  {/* change color Btns */}
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      className={`${color.name}Btn`}  
                      onClick={() => setAccentColor(color.value)} 
                    />
                  ))}
                  {/* change color exit btn */}
                  <button className="closeBtn" onClick={close}>X</button>
                </div>
              </div>
            </div>
          );
};

export default Colors;
