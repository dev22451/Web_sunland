import { Fade } from "react-reveal";

export const Map = () => {
  return (
    <section className="map-section">
      <Fade bottom>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="map"
              className="gmap_iframe"
              width="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Abu Dhabi, Rabdan Mall, 2nd floor, Office 205&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </Fade>
    </section>  
  );
};
