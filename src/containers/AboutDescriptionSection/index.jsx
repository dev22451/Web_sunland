import { AboutDescription } from "../../assets";
import { Fade } from "react-reveal";
export const AboutDescriptionSection = () => {
  return (
    <>
      <section className="about-description-section">
        <div className="about-description-wrapper">
          <div className="description-wrapper">
            <div className="background-text-container">
              <Fade bottom>
                <h2>ABOUT</h2>
              </Fade>
              <div className="about-content-wrapper">
                <div className="test">
                  <Fade bottom>
                    <h5> Company History </h5>
                  </Fade>
                  <Fade bottom>
                    <h4>Iconic Living Experience</h4>
                  </Fade>
                  <Fade bottom>
                    <p>
                      SUNLAND Investment Company has emerged in the Real Estate
                      Sector in Abu Dhabi as a visionary force of community
                      development. We don’t just build homes, we develop Iconic
                      Homes. We understand that luxury homes requires a heavy
                      budget to afford, but we have different approach. We
                      develop best-in-class communities with affordable prices
                      and convenient service and maintenance experience. Through
                      our comprehensive automated online platform “SUNLAND
                      Communities Mobile App” you can communicate with us, book
                      the required service, pay you rent, get notifications
                      about activities in the communities, and stay up-todate
                      with everything happening around you
                    </p>
                  </Fade>
                  <Fade bottom>
                    <button>Learn More</button>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <div className="image-wrapper">
            <Fade bottom>
              <img src={AboutDescription} alt="about-description" />
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};
