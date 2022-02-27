import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="https://mail.google.com/">
        <Button>Contact: pk9923446@gmail..com</Button>
      </a>
    </div>
  );
};

export default Contact;
