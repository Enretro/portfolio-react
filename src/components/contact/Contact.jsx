import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef, useState } from "react"
import emailjs from "emailjs-com"
import { ThemeContext } from "../../context"

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const handleSubmit = e => {
    e.preventDefault()
    emailjs.sendForm("service_y6v8peq", "template_e5xtrzj", formRef.current, "user_fZNkcHgrKvYjByelnVVHu").then(
      result => {
        console.log(result.text)
        setDone(true)
      },
      error => {
        console.log(error.text)
      }
    )
  }

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Pogovoriva se o projektu.</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +386 41 374 082
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              info@blog.pro
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Kajuhova ulica 12, 8281 Senovo, Posavje, Republika Slovenija.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Zaupaj svoje želje</b> Stopi v stik. Vselej sem na voljo, zlasti če mi je projekt blizu.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Naziv" name="user_name" />
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Zadeva" name="user_subject" />
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="E-naslov" name="user_email" />
            <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Sporočilo" name="message" />
            <button>Odpošlji</button>
            {done && "Hvala..."}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
