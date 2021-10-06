import React from "react";

export default function ContactComponent() {
  const cons = {
    backgroundColor: "#e0d010",
    marginLeft: "10px",
    borderRadius: "25px",
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm" style={cons}>
          <a href="mailto:leminhkien1998@gmail.com">
            <img src="../asset/mail.png" width="50%" />
          </a>
          <img src="../asset/phone.png" width="50%" />
          <a href="https://www.facebook.com/billkien00/" target="_blank">
            <img src="../asset/facebook.png" width="50%" />
          </a>

          <img src="../asset/skype.png" width="50%" />
        </div>

        <div className="col-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.573961943579!2d139.5371613151067!3d35.51481148023345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018580fa82adebf%3A0x81899ae26b8424fa!2sNakayama%20Station!5e0!3m2!1svi!2sjp!4v1633529997806!5m2!1svi!2sjp"
            width="100%"
            height="400%"
            // style="border:0;"
            // allowfullscreen=""
            // loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
