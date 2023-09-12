import { rentalServicesData } from "../../assets/common";
import { ServiceCard } from "../../components";
import { Fade } from "react-reveal";

export const RentingServicePageGrid = () => {
  return (
    <>
      <section className="renting-service-page-grid-container">
        <div className="renting-service-page-grid-wrapper">
          <div className="grid-detail-wrapper">
            <Fade bottom>
              <h4 className="title">Top Best Property</h4>
            </Fade>
            <Fade bottom>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </Fade>
          </div>
          <div className="cards-grid-wrapper">
            {rentalServicesData.map((card) => {
              return (
                <div>
                  <Fade bottom>
                    <ServiceCard service={card} />
                  </Fade>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
