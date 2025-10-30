
import { Link } from "react-router-dom";
import Contacts from "../../components/contacts";
import "./homee.css"

const HomePage = () => {
    return <>
                <section className="info">
                    <div className="IamInfo">
                        <h2>Hello, my name is <span className="myName">Ro'zmetov Ismoil</span></h2>
                        <h2>I'm a <span>Fronted Developer</span></h2>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Necessitatibus, quo nihil consequatur dolore voluptas asperiores, 
                           quam, accusantium architecto labore autem ipsa. Debitis.
                       </p>
                       <Link to="/about"><button>More About Me</button></Link>
                    </div>
                    <div className="pick">
                        <img src="https://avatars.mds.yandex.net/i?id=4afe21048edad5ccc8f53ba367d7742a_l-9242319-images-thumbs&n=13" alt="" />
                    </div>
                </section>
                <Contacts />
           </>
}

export default HomePage;