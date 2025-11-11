import "./components.css"

const Colors = ({close}) => {
    return<>
            <div className="colorsMenu">
                <div className="colorss">
                    <p>Theme Colors</p>
                    <div className="changeColor">
                        <button className="redBtn"></button>
                        <button className="orangeBtn"></button>
                        <button className="greenBtn"></button>
                        <button className="blueBtn"></button>
                        <button className="pinkBtn"></button>
                        <button className="closeBtn" onClick={close}>X</button>
                    </div>
                </div>
            </div>
          </>
}

export default Colors