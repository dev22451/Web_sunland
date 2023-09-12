import { Fade } from "react-reveal";
import {
  Email,
  generateEmailBody,
  maintenanceServiceData,
} from "../../assets/common";
import { useState } from "react";
import ReactModal from "react-modal";
import {
  AppStore,
  CloseModalIcon,
  CloseSolidIcon,
  GooglePlay,
  ImageIcon,
} from "../../assets";
import ImageUploading from "react-images-uploading";

export const MaintenanceServiceSection = () => {
  const formFields = ["name", "phoneNumber", "email", "maintenanceTitle"];
  const initialFormData = formFields.reduce((formData, fieldName) => {
    formData[fieldName] = "";
    return formData;
  }, {});

  const [rentingServiceQueryFormData, setRentingServiceQueryFormData] =
    useState(initialFormData);
  const [showModal, setShowModal] = useState(false);
  const [maintenanceTitle, setMaintenanceTitle] = useState("");

  const handleRentingServiceQueryForm = (event) => {
    setRentingServiceQueryFormData((previousData) => ({
      ...previousData,
      [event.target.name]: event.target.value,
    }));
  };

  const isFormValid = Object.entries(rentingServiceQueryFormData).some(
    ([key, value]) => {
      if (key === "maintenanceTitle") {
        return false;
      } else if (value.trim() === "" || /^[^\w\s]+$/.test(value)) {
        return true;
      } else {
        return false;
      }
    }
  );

  // IMAGE UPLOADING
  const [images, setImages] = useState([]);
  const maxNumber = 4;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFormData = {
      ...rentingServiceQueryFormData,
      maintenanceTitle: maintenanceTitle,
    };

    const imagesWithName = images.map((item, index) => ({
      ...item,
      data: item.data_url,
      name: `image-${index + 1}`,
    }));

    Email.send({
      Host: process.env.REACT_APP_SMTP_HOST,
      Username: process.env.REACT_APP_SMTP_HOST_USER,
      Password: process.env.REACT_APP_SMTP_HOST_PASS,
      To: rentingServiceQueryFormData.email,
      From: "vaibhav.verma.hp@gmail.com",
      Subject: "Get a Quote",
      Body: generateEmailBody(newFormData),

      Attachments: imagesWithName,
    }).then((message) => alert(message));
  };

  return (
    <>
      <section className="maintenance-service-section">
        <div className="maintenance-service-wrapper">
          <Fade bottom>
            <div className="title-wrapper">
              <h3 className="section-title">Maintenance Services Sections</h3>
              <p className="section-description">
                Seamless Care Beyond Four Walls” Also Available on SUNLAND
                Communities Mobile App (AppStore & GooglePlay Download Links)
              </p>
              <div className="download-button-wrapper">
                <a
                  href="https://www.play.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={GooglePlay} alt="google-play" />
                </a>
                <a
                  href="https://www.apps.apple.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AppStore} alt="app-store" />
                </a>
              </div>
            </div>
          </Fade>
          <div className="services-grid-container">
            <div className="grid-wrapper">
              {maintenanceServiceData.map((service, index) => {
                return (
                  <div className={`service-info-card card${index + 1}`}>
                    <img
                      className="service-image"
                      src={service.image}
                      alt={service.title}
                    />
                    <div className="service-card-overlay">
                      <div className="overlay-details-wrapper">
                        <h4 className="title"> {service.title} </h4>
                        <p className="description"> {service.description} </p>
                        <button
                          className="more-info-button"
                          onClick={() => {
                            setMaintenanceTitle(service.title);
                            setShowModal(true);
                          }}
                        >
                          Request Service
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
                      fieldName === "maintenanceTitle"
                        ? maintenanceTitle
                        : rentingServiceQueryFormData[fieldName]
                    }
                    disabled={fieldName === "maintenanceTitle"}
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
            <div className="image-uploader-wrapper">
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg"]}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <h4>Upload Images (Max. 4)</h4>
                    <button
                      style={isDragging ? { color: "red" } : null}
                      onClick={onImageUpload}
                      className="image-upload-button"
                      {...dragProps}
                    >
                      <ImageIcon />
                    </button>
                    <div className="images-preview-wrapper">
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image.data_url} alt="" width="100" />

                          <div onClick={() => onImageRemove(index)}>
                            <CloseSolidIcon />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </ImageUploading>
            </div>
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
