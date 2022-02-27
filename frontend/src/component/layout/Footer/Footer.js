import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Contact </h4>
        <p>dummy@gmail.com</p>
        <p>+91-999999xxxx</p>

        {/* <img src={playStore} alt="playstore" /> */}
        {/* <img src={appStore} alt="Appstore" /> */}
      </div>

      <div className="midFooter">
        <h2>E - Mall</h2>
        <p>Good product with low prise</p>

        <p>Copyrights 2021 &copy; Prakash</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://instagram.com/_prakash.kumar.singh_?utm_medium=copy_link" rel="noreferrer" target="_blank">Instagram</a>
        <a href="https://www.youtube.com/channel/UCcwSrSL3MprmAwZruWXUtFQ/playlists" rel="noreferrer" target="_blank">Youtube</a>
      </div>
    </footer>
  );
};

export default Footer;
