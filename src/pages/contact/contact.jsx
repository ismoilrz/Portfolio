import { useState } from "react";
import { Contact } from "../../constants/contactData";
import "./contactt.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    const token = "8375803762:AAGaQQVb9prTxtc7ZPGKLbzvxuXjHD0ag8I"; 
    const chat_id = "6166055008"; 
    const text = `👤 Ism: ${name}\n📞 Phone: ${phone}\n📧 Email: ${email}\n💬 Massage: ${message}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)}`;

    try {
      const res = await fetch(url);
      if (res.ok) {
        alert("Xabaringiz yuborildi! 🚀");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        alert("Xatolik yuz berdi 😢");
      }
    } catch (err) {
      console.error(err);
      alert("Xatolik yuz berdi 😢");
    }
  };

  return (
    <section className="contactPage">
      <h1>Contact Me</h1>
      <div className="contactMe">
        <h3>Have You Any Question ?</h3>
        <p>I'M AT YOUR SERVICE</p>
        <div className="contact">
          {Contact.map((item, index) => (
            <a key={index} href={item.link}>
              <div className="platform">
                <img src={item.logo} alt="Logo" />
                <h5>{item.name}</h5>
                <p>{item.username}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="massage">
        <h3>SEND ME A MESSAGE</h3>
        <div className="massageInputs">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>
        <button className="submit" onClick={handleSend}>
          Submit
        </button>
    </section>
  );
};

export default ContactPage;
