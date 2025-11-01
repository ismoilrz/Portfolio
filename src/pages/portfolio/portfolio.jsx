import { Projects } from "../../constants/projecktData";
import "./portfolioo.css"

const PortfolioPage = () => {
    return <>
                <section className="portfolio">
                    <h1>Portfolio</h1>
                    <div className="project">
                        <p>Some of my projects:</p>
                        <div className="projects">
                            {Projects.map((item, index) => (
                                <a
                                 key={index}
                                 href={item.path}
                                 className="projectLink"
                                 target="_blank"
                                 rel="noopener noreferrer" >
                                    
                                    <div className="projectImg">
                                        <img src={item.img} alt="" />
                                    </div>
                                </a>
                            ))}
                        </div>  
                    </div>
                </section>
           </>
}

export default PortfolioPage;