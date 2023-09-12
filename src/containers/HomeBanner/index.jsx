import { Fade } from "react-reveal";
import { Navbar } from "../Navbar";
import { Link, useLocation } from "react-router-dom";
import { Video } from "../../assets";

export const HomeBanner = () => {
  const location = useLocation();
  return (
    <>
      <div className="banner-container">
        <Navbar />
        <div className="home-banner-wrapper">
          <video muted autoPlay loop className="myVideo clipped-video">
            <source src={Video} type="video/mp4" />
          </video>
          <div
            className={
              location.pathname === "/"
                ? "overlay-screen clipped"
                : "overlay-screen"
            }
          >
            <div className="banner-text-wrapper">
              <Fade bottom>
                <h2 className="banner-text">
                  Unlocking Doors to Your Home: Your New Key in Abu Dhabi
                </h2>
              </Fade>
              <div className="button-group">
                <Fade left>
                  <Link to="/contact">
                    <button className="contact-button">Contact Us</button>
                  </Link>
                </Fade>
                <Fade right>
                  <Link to="/about">
                    <button className="learn-more-button">Learn More</button>
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
