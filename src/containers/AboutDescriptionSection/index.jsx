import { Link, useLocation } from "react-router-dom";
import { AboutDescription, CloseModalIcon } from "../../assets";
import { Fade } from "react-reveal";
import { useState } from "react";
import ReactModal from "react-modal";
export const AboutDescriptionSection = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
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
                    {location.pathname === "/" ? (
                      <Link to="/about">
                        <button>Learn More</button>
                      </Link>
                    ) : (
                      <button onClick={() => setShowModal(true)}>
                        Chairman Message
                      </button>
                    )}
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
      <ReactModal
        className="modal-content"
        overlayClassName="modal-overlay"
        isOpen={showModal}
      >
        <div className="react-modal-content-wrapper">
          <div className="modal-header">
            <h4 className="modal-title"> Message from our Chairman</h4>
            <div
              className="modal-close-icon-container"
              onClick={() => setShowModal(false)}
            >
              <CloseModalIcon />
            </div>
          </div>
          <div className="modal-body-container" style={{ lineHeight: "170%" }}>
            “Community-Centric Approach” SUNLAND's legacy is not solely built on
            bricks and mortar; it's anchored in the communities it nurtured. The
            company has consistently demonstrated a deep sense of responsibility
            toward creating inclusive living spaces that foster a sense of
            belonging. Its emphasis on green spaces, attention to architecture
            details, and smart infrastructure has redefined modern living in Abu
            Dhabi.
          </div>
        </div>
      </ReactModal>
    </>
  );
};
