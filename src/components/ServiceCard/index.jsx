import ReactModal from "react-modal";
import {
  CloseModalIcon,
  Lift,
  Location,
  RentingServiceCardImage,
} from "../../assets";
import { useState } from "react";
import { Email, generateEmailBody } from "../../assets/common";

export const ServiceCard = ({ service }) => {
  const { img, tag, location, propertyName, bhk, amenities, contactNumber } =
    service;

  const formFields = ["name", "phoneNumber", "email", "propertyName"];
  const initialFormData = formFields.reduce((formData, fieldName) => {
    formData[fieldName] = "";
    return formData;
  }, {});

  const [rentingServiceQueryFormData, setRentingServiceQueryFormData] =
    useState(initialFormData);
  const [showModal, setShowModal] = useState(false);

  const handleRentingServiceQueryForm = (event) => {
    setRentingServiceQueryFormData((previousData) => ({
      ...previousData,
      [event.target.name]: event.target.value,
    }));
  };

  const isFormValid = Object.entries(rentingServiceQueryFormData).some(
    ([key, value]) => {
      if (key === "propertyName") {
        return false;
      }

      // Check if the value is empty or contains only spaces or special characters
      else if (value.trim() === "" || /^[^\w\s]+$/.test(value)) {
        return true;
      } else {
        return false;
      } // Valid if the value is not empty and doesn't contain only spaces or special characters
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFormData = {
      ...rentingServiceQueryFormData,
      propertyName: propertyName,
    };

    Email.send({
      Host: process.env.REACT_APP_SMTP_HOST,
      Username: process.env.REACT_APP_SMTP_HOST_USER,
      Password: process.env.REACT_APP_SMTP_HOST_PASS,
      To: rentingServiceQueryFormData.email,
      From: "vaibhav.verma.hp@gmail.com",
      Subject: "Request Recieved!",
      Body: "<h1>Thankyou!</h1>",
    }).then((message) => alert(message));

    Email.send({
      Host: process.env.REACT_APP_SMTP_HOST,
      Username: process.env.REACT_APP_SMTP_HOST_USER,
      Password: process.env.REACT_APP_SMTP_HOST_PASS,
      To: "droidmaster27@gmail.com",
      From: "vaibhav.verma.hp@gmail.com",
      Subject: "Get a Quote",
      Body: generateEmailBody(newFormData),
    });

    // rentingServiceQueryFormData({});
  };

  const whatsappMessage = `📞🏡 Hi Sunland Investments LLC! 🌞%0A%0AI'm interested in your renting services for the property "${propertyName}." 🏠 Could you please provide more details about the rental options available? 🤔%0A%0AAdditionally, I'd like to know if you also offer maintenance services to ensure the property stays in top-notch condition. 🛠️💼%0A%0ALooking forward to hearing from you and exploring your services! 🏢%0A%0AThank you! 😊`;
  return (
    <>
      <div className="service-card-wrapper">
        <div className="service-card-head-container">
          <img className="service-card-image" src={img} alt={propertyName} />
          <span className="service-tag"> {tag} </span>
        </div>
        <div className="service-card-body-container">
          <div className="service-details-wrapper">
            <div className="location-wrapper">
              <Location />
              <span className="location"> {location} </span>
            </div>
            <p className="property-name"> {propertyName} </p>
            <p className="bhk-details"> {bhk} BHK Apartments </p>
          </div>
          <hr className="divider-line" />
          <div className="service-amenities-wrapper">
            {amenities.map((amenity) => {
              return <div className="amenity-badge">{amenity}</div>;
            })}
          </div>
          <hr className="divider-line" />
          <div className="service-card-footer-action-button-wrapper">
            <a
              href={`https://api.whatsapp.com/send?phone=${contactNumber}&text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="call-now-button"> WhatsApp </button>
            </a>
            <button
              className="enquire-button"
              onClick={() => setShowModal(true)}
            >
              {" "}
              Enquire{" "}
            </button>
          </div>
        </div>
      </div>
      <ReactModal
        className="modal-content"
        overlayClassName="modal-overlay"
        isOpen={showModal}
      >
        <div className="react-modal-content-wrapper">
          <div className="modal-header">
            <h4 className="modal-title"> Request A Service </h4>
            <div
              className="modal-close-icon-container"
              onClick={() => setShowModal(false)}
            >
              <CloseModalIcon />
            </div>
          </div>
          <div className="modal-body-container">
            <div className="input-fields-wrapper">
              {formFields.map((fieldName) =>
                fieldName === "phoneNumber" ? (
                  <input
                    key={fieldName}
                    name={fieldName}
                    placeholder="Phone Number"
                    onChange={handleRentingServiceQueryForm}
                    value={rentingServiceQueryFormData[fieldName]}
                    type="number"
                    required
                  />
                ) : (
                  <input
                    key={fieldName}
                    name={fieldName}
                    placeholder={`Your ${
                      fieldName === "email"
                        ? "Email"
                        : fieldName === "propertyName"
                        ? "Property Name"
                        : fieldName
                    } *`}
                    onChange={handleRentingServiceQueryForm}
                    value={
                      fieldName === "propertyName"
                        ? propertyName
                        : rentingServiceQueryFormData[fieldName]
                    }
                    disabled={fieldName === "propertyName"}
                    type={fieldName === "email" ? "email" : "text"}
                    required
                  />
                )
              )}
            </div>
            <input
              name="address"
              placeholder="Address *"
              onChange={handleRentingServiceQueryForm}
              value={rentingServiceQueryFormData.address}
              required
            />
            <textarea
              name="message"
              placeholder="Additional message"
              rows={4}
              onChange={handleRentingServiceQueryForm}
              value={rentingServiceQueryFormData.message}
              required
            ></textarea>
            <button
              disabled={isFormValid}
              className="submit-button"
              onClick={handleSubmit}
            >
              Request Service
            </button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};
