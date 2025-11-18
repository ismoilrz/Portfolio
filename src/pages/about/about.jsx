import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";


import { Link } from "react-router-dom";
import "./aboutt.css"
import Contacts from "../../components/contacts";
// import Models from "../../components/models";
// import Models2 from "../../components/models2";
import Models from "../../components/models3D/models";
import Models2 from "../../components/models3D/models2";

const AboutPage = () => {
     // my dec Info
    const birthday = "3 july 2006";
    const country = "Uzbekistan";
    const age = "19";
    const city = "Khorezm";
    const email = "ismoilrz26@gmail.com";
    const phoneNum = "+998(94) 8536747"

    return <>
    {/*ABOUT */}
                <section className="about">
                    {/*ABOUT title */}
                    <h1>About Me</h1>

                    {/*about info */}
                    <div className="aboutInfo">
                        <div className="aboutInfoTxt">
                         <h3>I'm Ro'zmetov Ismoil and <span className="myName">Fronted Developer</span></h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptate hic dignissimos neque, inventore ipsa asperiores
                            dolores. Dolores esse, hic mollitia porro vero vitae quod
                            nihil accusamus repellendus, laborum omnis molestias. Odio 
                            voluptatum, quo id iusto, blanditiis beatae officiis tempore 
                            labore deleniti illum iste libero? Error, porro. Tenetur cum 
                            possimus eos tempora dignissimos adipisci aspernatur natus!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius 
                            ullam tempore, tempora reiciendis possimus quisquam quibusdam 
                            quae quo ipsam itaque.
                        </p>
                        </div>
                        <div className="model2">
                          <Models2 />
                        </div>
                    </div>
                    <div className="skills">
                       <div className="skillsInfoDes">
                         {/*my dec info */}
                          <div className="skillsInfo">
                            <div className="skillsInfoMain">
                                <p>Birthday: <span>{birthday}</span></p>
                                <p>Country: <span>{country}</span></p>
                                <p>City: <span>{city}</span></p>
                            </div>
                            <div className="skillsInfoMain">
                                 <p>Age: <span>{age}</span></p>
                                 <p>Email: <span>{email}</span></p>
                                 <p>Phone: <span>{phoneNum}</span></p>
                            </div>
                        </div>
                        {/*about btns */}
                            <div className="skillsBtns">
                              <div className="slideBtn">
                                    <Swiper
                                   direction="vertical"
                                   slidesPerView={1}
                                   spaceBetween={30}
                                   mousewheel
                                   pagination={{ clickable: true }}
                                   modules={[Mousewheel, Pagination]}
                                   className="mySwiper">
                                   <SwiperSlide>
                                        <a href="/CV.pdf" download>
                                             <button className="cvBtn">Download CV 1 </button>
                                        </a>
                                   </SwiperSlide>

                                   <SwiperSlide>
                                        <a href="/Ismoil_Rozmetov_CV.pdf" download>
                                             <button className="cvBtn">Download CV 2</button>
                                        </a> 
                                   </SwiperSlide>
                              </Swiper>

                              <div className="btnView">
                                   <p>CV 2</p>
                                   <p>⇓</p>
                              </div>
                              </div>

                             <div className="menuBtns">
                               <Link to={"/"}><button className="pageBtn">Home</button></Link>
                               <Link to={"/portfolio"}><button className="pageBtn">Portfolio</button></Link>
                             </div>
                            </div>
                       </div>
                       {/*my progress */}
                        <div className="skillsRepo">
                               <div className="ProgresTitle">
                                    <span>HTML</span> <span>95%</span>
                               </div>
                                    <progress value="95" max="100"></progress>
                               <div className="ProgresTitle">
                                    <span>CSS</span> <span>80%</span>
                               </div>
                                    <progress value="80" max="100"></progress>
                               <div className="ProgresTitle">
                                    <span>JavaScript</span><span>60%</span>
                               </div>
                                    <progress value="60" max="100"></progress>
                               <div className="ProgresTitle">
                                    <span>React</span><span>45%</span>
                               </div>
                                    <progress value="45" max="100"></progress>
                        </div>
                    </div>
                    <Contacts />
                    <div className="models">
                         <Models />
                    </div>
                </section>
           </>
}

export default AboutPage;