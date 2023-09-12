import { Link, useLocation } from "react-router-dom";
import { CloseModalIcon, Logo, MenuIcon } from "../../assets";
import { generateEmailBody, navItems } from "../../assets/common";
import { slide as Menu } from "react-burger-menu";
import { Fade } from "react-reveal";
import ReactModal from "react-modal";
import { useState } from "react";
import { Email } from "../../assets/common";

export const Navbar = () => {
  const formFields = ["name", "phoneNumber", "email", "subject"];
  const initialFormData = formFields.reduce((formData, fieldName) => {
    formData[fieldName] = "";
    return formData;
  }, {});

  const [showModal, setShowModal] = useState(false);
  const [getQuoteFormData, setGetQuoteFormData] = useState(initialFormData);

  const handleGetQuoteForm = (event) => {
    setGetQuoteFormData((previousData) => ({
      ...previousData,
      [event.target.name]: event.target.value,
    }));
  };

  const isFormValid = Object.values(getQuoteFormData).some(
    (value) => value === ""
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    Email.send({
      Host: process.env.REACT_APP_SMTP_HOST,
      Username: process.env.REACT_APP_SMTP_HOST_USER,
      Password: process.env.REACT_APP_SMTP_HOST_PASS,
      To: getQuoteFormData.email,
      From: "vaibhav.verma.hp@gmail.com",
      Subject: "Get a Quote",
      Body: generateEmailBody(getQuoteFormData),
    }).then((message) => alert(message));

    setGetQuoteFormData({});
  };

  const location = useLocation();
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <div className="logo-container">
            <Link to="/">
              <img src={Logo} alt="Sunland investments" />
            </Link>
          </div>
          <div className="nav-items-wrapper">
            {navItems.map((nav) => {
              return (
                <Link
                  className={
                    location.pathname === nav.path ? "active" : "inactive"
                  }
                  to={nav.path}
                >
                  <p
                    className={
                      location.pathname === nav.path
                        ? "selected-line "
                        : "selected-line hidden"
                    }
                  ></p>
                  <p>{nav?.name}</p>
                </Link>
              );
            })}
            <button onClick={() => setShowModal(true)}> Get A Quote </button>
          </div>
          <div className="sidebar-wrapper">
            <Menu
              right
              pageWrapId={"page-wrap"}
              customBurgerIcon={<MenuIcon />}
            >
              {navItems.map((nav) => {
                return (
                  <Link
                    className={
                      location.pathname === nav.path
                        ? "query-action-button active"
                        : "query-action-button inactive"
                    }
                    to={nav.path}
                  >
                    <Fade right>{nav?.name}</Fade>
                  </Link>
                );
              })}
              <Fade right>
                <button
                  onClick={() => setShowModal(true)}
                  className="query-action-button focused"
                >
                  Get A Quote
                </button>
              </Fade>
            </Menu>
          </div>
        </div>
      </div>
      <div className="modal-wrapper">
        <ReactModal
          className="modal-content"
          overlayClassName="modal-overlay"
          isOpen={showModal}
        >
          <div className="react-modal-content-wrapper">
            <div className="modal-header">
              <h4 className="modal-title"> Get A Quote </h4>
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
                      onChange={handleGetQuoteForm}
                      value={getQuoteFormData[fieldName] || ""}
                      type="number"
                      required
                    />
                  ) : (
                    <input
                      key={fieldName}
                      name={fieldName}
                      placeholder={`Your ${
                        fieldName === "email" ? "Email" : fieldName
                      } *`}
                      onChange={handleGetQuoteForm}
                      value={getQuoteFormData[fieldName] || ""}
                      type={fieldName === "email" ? "email" : "text"}
                      required
                    />
                  )
                )}
              </div>
              <textarea
                name="message"
                placeholder="Additional message *"
                rows={4}
                onChange={handleGetQuoteForm}
                value={getQuoteFormData.message || ""}
                required
              ></textarea>
              <button
                disabled={isFormValid}
                className="submit-button"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
          </div>
        </ReactModal>
      </div>
    </>
  );
};
