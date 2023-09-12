import { RightArrow } from "../../assets";
import { Navbar } from "../Navbar";
import { Fade } from "react-reveal";

export const MiniBanner = ({ background, path }) => {
  return (
    <>
      <div className="banner-container">
        <Navbar />
        <div
          className="home-banner-wrapper"
          style={{
            backgroundImage: `url(${background})`,
            height: "60vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay-screen">
            <div className="banner-text-wrapper">
              <Fade bottom>
                <h2 className="banner-text">{path}</h2>
              </Fade>
              <Fade>
                <p>
                  <span>Home &nbsp;</span> <RightArrow />
                  &nbsp;
                  <span>{path}</span>
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
