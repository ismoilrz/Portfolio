import { Link } from "react-router-dom";
import { Projects } from "../../constants/projecktData";
import "./portfolioo.css"

const PortfolioPage = () => {
    return <>
                <section className="portfolio">
                    <h1>Portfolio</h1>
                    <div className="project">
                        <div className="projectsTop">
                            <p>Some of my projects:</p>
                            <Link to={"/contact"}><button>Contact</button></Link>
                        </div>
                        <div className="projects">
                            {Projects.map((item, index) => (
                                <a
                                 key={index}
                                 href={item.path}
                                 className="projectLink"
                                 target="_blank"
                                 rel="noopener noreferrer" >      
                                    <div className="projectImg">
                                        <img src={item.img} alt="ProjectImg" />
                                    </div>
                                </a>
                            ))}
                        </div>  
                    </div>
                </section>
           </>
}

export default PortfolioPage;