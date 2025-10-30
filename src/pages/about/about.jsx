import "./aboutt.css"

const AboutPage = () => {
    const birthday = "3 july 2006";
    const country = "Uzbekistan";
    const age = "19";
    const city = "Khorezm";
    const email = "ismoilrz26@gmail.com";
    const phoneNum = "+998(94) 8536747"

    return <>
                <section className="about">
                    <h1>About Me</h1>

                    <div className="aboutInfo">
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
                    <div className="skills">
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
                        <div className="skillsRepo">
                               <div class="ProgresTitle">
                                    <span>HTML</span>
                                    <span>95%</span>
                               </div>
                                    <progress value="95" max="100"></progress>
                               <div class="ProgresTitle">
                                    <span>CSS</span>
                                    <span>80%</span>
                               </div>
                                    <progress value="80" max="100"></progress>
                               <div class="ProgresTitle">
                                    <span>JavaScript</span>
                                    <span>60%</span>
                               </div>
                                    <progress value="60" max="100"></progress>
                               <div class="ProgresTitle">
                                    <span>React</span>
                                    <span>45%</span>
                               </div>
                                    <progress value="45" max="100"></progress>
                        </div>
                    </div>
                </section>
           </>
}

export default AboutPage;