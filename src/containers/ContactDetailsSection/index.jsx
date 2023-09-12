import { contactDetailsData } from "../../assets/common";

export const ContactDetailsSection = () => {
  return (
    <>
      <section className="contact-details-section">
        <div className="contact-details-wrapper">
          <div className="title-wrapper">
            <h4 className="section-title">
              Feel Free To Contact Us Today And Get Your Solution
            </h4>
            <p className="section-description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established fact that a reader.
            </p>
          </div>
          <div className="contact-detail-cards-wrapper">
            {contactDetailsData.map((contact) => {
              return (
                <div className="contact-detail-card">
                  <div className="icon-wrapper">{contact.icon}</div>
                  <h4 className="card-title"> {contact.title} </h4>
                  <a
                    href={
                      contact.type === "tel" || contact.type === "mailto"
                        ? `${contact.type}:${contact.detailetail}`
                        : `${contact.link}`
                    }
                    className="card-detail"
                  >
                    {contact.detail}
                  </a>
                  {contact.subDetail && (
                    <a
                      href={
                        contact.type === "tel" || contact.type === "mailto"
                          ? `${contact.type}:${contact.subDetail}`
                          : `${contact.link}`
                      }
                      className="card-detail"
                    >
                      {contact.subDetail}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
