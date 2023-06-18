import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../store";
import { fetchProjectData } from "../../api";
import { DateTimeFormatOptions } from "intl";
import Grid from "@mui/material/Grid";
import "./Projects.scss";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
type AppDispatch = ThunkDispatch<RootState, void, any>;

interface ProjectProps {
  id: string;
}

interface ProjectItem {
  Name: string;
  StartDate: string;
  EndDate: string;
  Description: string;
  Link: string;
  Image: string;
}

export default function Projects({ id }: ProjectProps) {
  const [expanded, setExpanded] = React.useState<string | false>(`panel0`); // Set initial state to `panel0`
  const projects = useSelector((state: RootState) => state.data.projects);
  const dispatch: AppDispatch = useDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    dispatch(fetchProjectData());
  }, [dispatch]);

  const formatDate = (dateString: string) => {
    const options: DateTimeFormatOptions = { year: "numeric", month: "long" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const sortedProjects = projects
    ? [...projects].sort(
        (a, b) =>
          new Date(a.StartDate).getTime() - new Date(b.StartDate).getTime()
      )
    : [];

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const onHandleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div id={id} style={{ paddingBottom: "8rem" }}>
      <p className="heading-project">Projects</p>
      <Grid
        container
        alignItems="center"
        item
        xs={12}
        style={{
          paddingTop: isMobile ? "1rem" : "5rem",
          paddingBottom: isMobile ? "1rem" : "5rem",
        }}
      >
        <Grid item xs={4} textAlign="center">
          <p className="pre-text"> Projects Worked on</p>
          <p className="post-text">5.0</p>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <p className="pre-text">Experience (years)</p>
          <p className="post-text">4.0</p>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <p className="pre-text">Programming Languages</p>
          <p className="post-text">06</p>
        </Grid>
      </Grid>
      <div className="container">
        {sortedProjects &&
          [...sortedProjects].map((item: ProjectItem, index: number) => (
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              key={index}
              //   className="accordion"
              sx={{
                backgroundColor: "#181922",
                // borderRadius: "3rem",
                boxShadow: `0 0 0 1px #E9E9E9`,
                padding: expanded === `panel${index}` ? "1.5em" : "0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="exp-icon" />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
                sx={{ alignItems: "center" }}
              >
                <Typography
                  sx={{
                    width: "33%",
                    fontFamily: "JetBrains Mono",
                    fontWeight: expanded === `panel${index}` ? "bold" : "0px",
                    flexShrink: 0,
                    color: "#E9E9E9",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      width: "33%",
                      fontFamily: "JetBrains Mono",
                      fontWeight: expanded === `panel${index}` ? "bold" : "0px",
                      fontSize: isMobile
                        ? expanded === `panel${index}`
                          ? "2.5rem"
                          : "1.2rem"
                        : expanded === `panel${index}`
                        ? "3.0rem"
                        : "1.5rem",
                      flexShrink: 0,
                      color: "#E9E9E9",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  {isMobile && expanded === `panel${index}` && (
                    <Typography
                      component="span"
                      sx={{
                        width: "33%",
                        fontFamily: "JetBrains Mono",
                        fontWeight:
                          expanded === `panel${index}` ? "bold" : "0px",
                        flexShrink: 0,
                        color: "#E9E9E9",
                        fontSize: "0.8rem",
                      }}
                    >
                      <br /> {formatDate(item.StartDate)}
                    </Typography>
                  )}
                </Typography>
                <Typography
                  sx={{
                    color: expanded === `panel${index}` ? "#FFA9F7" : "#E9E9E9",
                    fontFamily: "JetBrains Mono",
                    fontSize: isMobile
                      ? expanded === `panel${index}`
                        ? "1.0rem"
                        : "0.8rem"
                      : expanded === `panel${index}`
                      ? "2.0rem"
                      : "1.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.Name}
                </Typography>
              </AccordionSummary>
              <Grid container item xs={12} style={{ paddingBottom: "2em" }}>
                {!isMobile && (
                  <Grid item xs={2}>
                    <p className="pro-date">{formatDate(item.StartDate)}</p>
                  </Grid>
                )}
                <Grid item xs={isMobile ? 12 : 10}>
                  <AccordionDetails>
                    <Typography
                      className="pro-description"
                      sx={{
                        color: "#E9E9E9",
                        fontFamily: "JetBrains Mono",
                        fontSize: isMobile ? "0.8rem" : "1.1rem",
                        display: "flex",
                        alignItems: "center",
                        paddingBottom: "2em",
                      }}
                    >
                      {item.Description}
                    </Typography>
                  </AccordionDetails>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => onHandleClick(item.Link)}
                    style={{
                      marginLeft: "1em",
                      color: "#BDBDBD",
                      borderColor: "#BDBDBD",
                      fontSize: "1.2em",
                      textTransform: "none",
                      fontFamily: "JetBrains Mono",
                    }}
                  >
                    View Project
                  </Button>
                </Grid>
              </Grid>
            </Accordion>
          ))}
      </div>
    </div>
  );
}
