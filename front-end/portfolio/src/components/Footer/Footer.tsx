import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.scss";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <Grid container className="foot" style={{ marginTop: "2em" }} py={4}>
      <Grid container justifyContent={"center"} item xs={7}>
        <span className="ms-3">Évry-Courcouronnes, France </span>
      </Grid>
      <Grid item xs={5} container justifyContent={"center"} spacing={5}>
        <Grid item>
          <a
            className="icon"
            href="https://www.linkedin.com/in/mufaddal-enayath-hussain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </Grid>
        <Grid item>
          <a
            className="icon"
            href="https://github.com/muffu52"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </Grid>
        <Grid item>
          <a className="icon" href="mailto:enayathmufu@yahoo.com">
            <FaEnvelope />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
