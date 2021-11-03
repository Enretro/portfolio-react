import "./about.css"
import Award from "../../img/vega.png"
import Knez from "../../img/knez.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Knez} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">O sebi</h1>
        <p className="a-sub">Znano je dejstvo, da bralca usmerja berljivost vsebine.</p>
        <p className="a-desc">
          Eno je forma - en je Vsebina. <strong>Manj je več</strong>s pozornostjo na<strong>vsebini</strong> sta hvaležni vrlini.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              Baron <em>Georg Freiherr von Vega priznanje</em> 1985 za matematične dosežke.
            </h4>
            <p className="a-award-desc">Gotovo veste, da imajo v ZDA štiri osnovne obroke hranjenja: zajterk, kosilo, večerja, desert, ter da brez postreščka poslujejo le moteli.</p>
            <a className="a-links" href={"https://github.com/Enretro?tab=repositories"}>
              {" "}
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
