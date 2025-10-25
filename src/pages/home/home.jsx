import sun from "../../assets/sun.svg"; 
import setting from "../../assets/setting.svg";
import "./homee.css"

const HomePage = () => {
    return <>
                <div className="colors">
                    <div className="sun">
                        <img src={sun} alt="" />
                    </div>
                    <div className="setting">
                        <img src={setting} alt="" />
                    </div>
                </div>
                <section className="info">
                    <div className="IamInfo">
                        <h2>Hello, my name is <span className="myName">Ro'zmetov Ismoil</span></h2>
                        <h2>I'm a <span>Fronted Developer</span></h2>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Necessitatibus, quo nihil consequatur dolore voluptas asperiores, 
                           quam, accusantium architecto labore autem ipsa. Debitis.
                       </p>
                       <button>More About Me</button>
                    </div>
                    <div className="pick">
                        <img src="https://i.pinimg.com/originals/01/7a/34/017a34f775c4e1e6b3651e6e554b382c.jpg" alt="" />
                    </div>
                </section>
           </>
}

export default HomePage;