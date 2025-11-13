import ReactCompareImage from "react-compare-image";
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
                        
                         <div className="dis flex justify-center items-center h-screen bg-black">
                            <div className="compare-container rounded-xl overflow-hidden shadow-xl">
                                <ReactCompareImage
                                leftImage="https://i.ytimg.com/vi/9DftXJozAgo/maxresdefault.jpg"
                                rightImage="https://strategyjournal.ru/wp-content/uploads/2023/12/belyj-haker.jpg"
                                sliderLineColor="black"
                                handle={
                                    <div
                                      style={{
                                        width: "2px",
                                        height: "500px", 
                                        background: "var(--accent-color)",
                                        position: "relative",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                      }}
                                    >
                                      <button
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          whiteSpace: "nowrap",
                                          color: "var(--accent-color)",
                                          width: "120px",
                                          height: "40px",
                                          borderRadius: "50px",
                                          backgroundColor: "#fff7",
                                          border: "none",
                                          cursor: "grab",
                                        }}
                                      >
                                        ◀ ▶
                                      </button>
                                    </div>
                                  }

                                />
                            </div>
                            </div>
                        
                </section>
                <Contacts />
           </>
}

export default HomePage;