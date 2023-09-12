import { useState } from "react";
import {
  LatestPost1,
  LatestPost2,
  Location,
  Logo,
  Mail,
  Phone,
  RightArrow,
} from "../../assets";
import { socialHandlesData } from "../../assets/common";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

export const Footer = () => {
  const [subscriberEmail, setSubscriberEmail] = useState("");

  const submitRequest = () => {
    setSubscriberEmail("");
  };
  return (
    <>
      <section className="footer-section">
        <div className="footer-content-wrapper">
          <Fade bottom>
            <div className="footer-head-wrapper">
              <img src={Logo} alt="Sunland-investments" />
              {/* <div className="newsletter-form-input-wrapper">
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={subscriberEmail}
                  onChange={(event) => {
                    setSubscriberEmail(event.target.value);
                  }}
                />
                <button
                  className={
                    subscriberEmail === ""
                      ? "subscribe-button subscribe-button-disabled"
                      : "subscribe-button"
                  }
                  disabled={subscriberEmail === ""}
                  onClick={submitRequest}
                >
                  Subscribe
                </button>
              </div> */}
              <div className="social-links-wrapper">
                {socialHandlesData.map((social) => {
                  return (
                    <a href={social.url} target="_blank" rel="noreferrer">
                      <div className="icon-container">{social.icon}</div>
                    </a>
                  );
                })}
              </div>
            </div>
          </Fade>
          <div className="footer-body-wrapper">
            <Fade bottom>
              <div className="body-column-wrapper">
                <p className="title">ABOUT US</p>
                <p className="description">
                  Contrary to popular belief, Lorem simply random text. It has
                  roots in a piece of classical Latin literature.
                </p>
                <div className="details-wrapper">
                  <div className="about-detail">
                    <div className="icon-wrapper">
                      <Location />
                    </div>
                    <p>Abu Dhabi, Rabdan Mall, 2nd floor, Office 205</p>
                  </div>
                  <div className="about-detail">
                    <div className="icon-wrapper">
                      <Phone />
                    </div>
                    <a href="tel:+971 509080595">+971 509080595</a> |{" "}
                    <a href="tel:+971 565855530">+971 565855530</a>
                  </div>
                  <div className="about-detail">
                    <div className="icon-wrapper">
                      <Mail />
                    </div>
                    <a href="mailto:info@domain.com">
                      sunland.property.management@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="body-column-wrapper">
                <p className="title">Company</p>
                <div className="details-wrapper">
                  <div className="link-wrapper">
                    <RightArrow />
                    <Link to="/">Home</Link>
                  </div>
                  <div className="link-wrapper">
                    <RightArrow />
                    <Link to="/about">About Us</Link>
                  </div>
                  <div className="link-wrapper">
                    <RightArrow />
                    <Link to="/renting-services">Renting Services</Link>
                  </div>
                  {/* <div className="link-wrapper">
                    <RightArrow />
                    <Link to="/">Maintenance Services</Link>
                  </div> */}
                  <div className="link-wrapper">
                    <RightArrow />
                    <Link to="/contact">Contact Us</Link>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="body-column-wrapper">
                <p className="title">Latest Posts</p>
                <div className="latest-posts-wrapper">
                  <div className="latest-post">
                    <img src={LatestPost1} alt="" />
                    <div className="post-detail">
                      <p className="post-title">Improvements In Maintenance</p>
                      <p className="post-date"> January 23, 2023 </p>
                    </div>
                  </div>

                  <div className="latest-post">
                    <img src={LatestPost2} alt="" />
                    <div className="post-detail">
                      <p className="post-title">Improvements In Maintenance</p>
                      <p className="post-date"> January 23, 2023 </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="body-column-wrapper">
                <p className="title">Opening Hours</p>
                <div className="schedule-wrapper">
                  <div className="schedule">
                    <p className="day">Sun - Mon</p>
                    <p className="time"> 08:00 - 17:00 </p>
                  </div>
                  <div className="schedule">
                    <p className="day">Tue - Wed</p>
                    <p className="time"> 08:00 - 17:00 </p>
                  </div>
                  <div className="schedule">
                    <p className="day">Thurs</p>
                    <p className="time"> 08:00 - 17:00 </p>
                  </div>
                  <div className="schedule">
                    <p className="day">Fri - Sat</p>
                    <p className="time"> Closed </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="sub-footer">
          <p className="copyright-content">
            <span>Copyright &copy; 2023 Sunland Investment</span>
            <span> All Rights Reserved. </span>
          </p>
        </div>
      </section>
    </>
  );
};
