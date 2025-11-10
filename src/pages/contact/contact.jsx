import { Contact } from "../../constants/contactData";
import "./contactt.css"

const ContactPage = () => {
    return <>
                <section className="contactPage">
                    <h1>Contact Me</h1>
                     <div className="contactMe">
                        <h3>Have You Any Question ?</h3>
                        <p>I'M AT YOUR SERVICE</p>
                        <div className="contact">
                            {Contact.map((item, index) => (
                                <a key={index} href={item.link}>
                                    <div className="platform">
                                        <img src={item.logo} alt="lOgo" />
                                        <h5>{item.name}</h5>
                                        <p>{item.username}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div> 

                    <div className="massage">
                        <h3>SEND MEN AN MASSAGE</h3>
                        <div className="massageInputs">
                            <input type="text" placeholder="Name" />
                            <input type="number" placeholder="Phone" />
                            <input type="text" placeholder="Email" />
                           <textarea name="#" id="#" placeholder="Massage"></textarea>
                        </div>
                    </div>
                        <button className="submit">Submit</button>

                </section>
           </>
}

export default ContactPage;