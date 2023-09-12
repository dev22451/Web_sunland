import { useState } from "react";
import { Fade } from "react-reveal";
import { useLocation } from "react-router-dom";
import Select from "react-select";

const enquiryOptions = [
  { value: "General", label: "General" },
  { value: "Renting", label: "Renting" },
  { value: "Maintenance", label: "Maintenance" },
];

export const ContactForm = () => {
  const [contactDetails, setContactDetails] = useState({});

  const location = useLocation();

  const handleFormDetailChange = (event, name) => {
    console.log(event, "event");
    let fieldTitle = name || event.target.name;
    let fieldValue =
      event.target && event.target.value !== undefined
        ? event.target.value
        : event.value;

    console.log(fieldTitle, fieldValue, "dataaa");

    setContactDetails((prevContactDetails) => ({
      ...prevContactDetails,
      [fieldTitle]: fieldValue,
    }));
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
    }),
    singleValue: (provided, state) => ({
      ...provided,
    }),
    control: (provided, state) => ({
      ...provided,
      "&:focus": {
        outlineColor: "#b97d6d",
        borderColor: "#b97d6d",
      },
    }),
  };

  return (
    <>
      <section className="contact-form-section">
        <div className="overlay-bg"></div>
        <div className="overlay-screen">
          <div className="content-wrapper">
            <Fade bottom>
              <div className="contact-section-left-pane">
                <div className="contact-section-title-container">
                  <p className="title">Get in touch with us</p>
                  <h4 className="sub-title">Let’s connect! </h4>
                </div>
                <p className="description">
                  We're here to make your real estate journey a memorable and
                  rewarding experience. Whether you have questions, inquiries,
                  or simply want to explore your options, our dedicated team is
                  ready to assist you.
                </p>
              </div>
            </Fade>
            <Fade bottom delay={1000}>
              <div className="contact-section-right-pane">
                <div className="contact-form-container">
                  <div className="enquiry-type-wrapper field-wrapper ">
                    <label htmlFor="enquiryType">Enquiry Type</label>
                    <Select
                      className="select-component"
                      defaultValue={contactDetails?.enquiryType || ""}
                      name="enquiryType"
                      onChange={(event) =>
                        handleFormDetailChange(event, "enquiryType")
                      }
                      placeholder="Select Enquiry Type"
                      options={enquiryOptions}
                      styles={customStyles}
                    />
                  </div>
                  <div className="field-wrapper">
                    <label>Your Information</label>
                    <input
                      name="iAm"
                      type="text"
                      placeholder="I'm a"
                      required
                      onChange={(event) => handleFormDetailChange(event)}
                    />
                    <div className="inline-fields-wrapper">
                      <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        onChange={(event) => handleFormDetailChange(event)}
                      />
                      <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        onChange={(event) => handleFormDetailChange(event)}
                      />
                    </div>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      onChange={(event) => handleFormDetailChange(event)}
                    />
                    <textarea rows={4} placeholder="Message"></textarea>
                  </div>
                  {/* <div className="field-wrapper">
                    <label>Property Details</label>
                    <Select
                      className="select-component"
                      defaultValue={contactDetails?.propertyType || ""}
                      name="enquiryType"
                      onChange={(event) =>
                        handleFormDetailChange(event, "propertyType")
                      }
                      placeholder="Select Property Type"
                      options={propertyOptions}
                    />
                    <div className="inline-fields-wrapper">
                      <input
                        name="maxPrice"
                        type="number"
                        placeholder="Max price (in Lakhs)"
                        inputmode="numeric"
                        onChange={(event) => handleFormDetailChange(event)}
                      />
                      <input
                        name="size"
                        type="number"
                        placeholder="Minimum Size (in Sq ft)"
                        inputmode="numeric"
                        onChange={(event) => handleFormDetailChange(event)}
                      />
                    </div>
                    <div className="inline-fields-wrapper">
                      <input
                        name="bedsCount"
                        type="number"
                        placeholder="Number of Beds"
                        inputmode="numeric"
                        onChange={(event) => handleFormDetailChange(event)}
                      />
                      <input
                        name="bathsCount"
                        type="number"
                        placeholder="Number of Baths"
                        inputmode="numeric"
                        onChange={(event) => handleFormDetailChange(event)}
                      />
                    </div>
                  </div> */}
                  <button className="form-submit-button"> Submit </button>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};
