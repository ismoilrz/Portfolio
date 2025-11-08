// socials svg
import insta from "../assets/instagram.svg"
import teleg from "../assets/telelgram.svg"
import num from "../assets/phone.svg"
import git from "../assets/gitHub.svg"

import "./components.css"

const Contacts = () => {

    // my socials url
    const instagram = "https://www.instagram.com/ismoil.rz?igsh=MWxseG0zanVkbWNrcw==";
    const telegram = "http://t.me/Ismoilrz";
    const gitHub = "https://github.com/ismoilrz";
    const phone = "tel:+998948536747";

    return <>
                {/* socials section */}

                <div className="socials">
                    <a href={instagram} target="_blank" aria-label="Instagram">  {/* instagram */ }
                        <div className="socialsUrl">
                            <img src={insta} alt="" />
                        </div>
                    </a>
                    <a href={telegram} target="_blank" aria-label="telegram">    {/* telegram */}
                        <div className="socialsUrl">
                            <img src={teleg} alt="" />
                        </div>
                    </a>
                    <a href={gitHub} target="_blank" aria-label="gitHub">  {/*git hub */}
                        <div className="socialsUrl">
                            <img src={git} alt="" />
                        </div>
                    </a>
                    <a href={phone} aria-label="Phone Number">    {/* my phone */}
                        <div className="socialsUrl">
                            <img src={num} alt="" />
                        </div>
                    </a>
                </div>

                {/* socials section end */}
           </>
}

export default Contacts