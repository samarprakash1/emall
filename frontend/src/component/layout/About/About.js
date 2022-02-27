import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import myimage from "./lgao.jpeg"
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/_prakash.kumar.singh_?utm_medium=copy_link";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax",objectFit:"cover", height: "10vmax", margin: "2vmax 0" }}
              src={myimage}
              alt="Founder"
            />
            <Typography>Prakash Kumar</Typography>
            {/* <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button> */}
            <span>
              Sample website. Click and contect through instagram<Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
              <br></br>
              
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow us on</Typography>
            <a
              href="https://www.youtube.com/channel/UCcwSrSL3MprmAwZruWXUtFQ/playlists"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/_prakash.kumar.singh_?utm_medium=copy_link" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
