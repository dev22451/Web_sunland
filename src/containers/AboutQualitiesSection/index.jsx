import { qualityData } from "../../assets/common";
import { Fade } from "react-reveal";
export const AboutQualitiesSection = () => {
  return (
    <>
      <section className="qualities-section">
        <div className="overlay-bg"></div>
        <div className="overlay-screen">
          {qualityData.map((quality, index) => {
            return (
              <div
                className={
                  index % 2 === 0
                    ? "quality-wrapper"
                    : "quality-wrapper reverse"
                }
                key={index}
              >
                <div className="quality-content-wrapper">
                  <Fade bottom>
                    <h4 className="quality-title"> {quality.title} </h4>
                  </Fade>
                  <Fade bottom>
                    <p className="quality-description">
                      {" "}
                      {quality.description}{" "}
                    </p>
                  </Fade>
                </div>
                <Fade bottom>
                  <img
                    className="quality-image"
                    src={quality.image}
                    alt={quality.title}
                  />
                </Fade>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
