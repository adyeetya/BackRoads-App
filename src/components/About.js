import AboutInfo from './AboutInfo';
import aboutimg from "../images/about.jpeg";
const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>
          about <span>us</span>
        </h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={aboutimg}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <AboutInfo />
      </div>
    </section>
  )
}

export default About
