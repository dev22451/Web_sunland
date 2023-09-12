import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ServiceCard } from "../../components";
import { rentalServicesData } from "../../assets/common";
import { Fade } from "react-reveal";

export const RentingServicesSection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="renting-services-section">
      <div className="overlay-bg"></div>
      <div className="overlay-screen">
        <div className="content-wrapper">
          <Fade bottom>
            <div className="title-wrapper">
              <h3 className="section-title">Unlock you perfect space</h3>
              <p className="section-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </Fade>
          <div className="service-carousel-container">
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
              showDots={false}
              infinite
              autoPlay={false}
              autoPlaySpeed={3000}
              transitionDuration={500}
              removeArrowOnDeviceType={[
                "tablet",
                "mobile",
                "desktop",
                "superLargeDesktop",
              ]}
              dotListClass="custom-dot-list-style"
            >
              {rentalServicesData.map((service, index) => {
                return (
                  <Fade key={index} bottom>
                    <ServiceCard service={service} />
                  </Fade>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
