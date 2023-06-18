import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../store";
import { fetchSkillData } from "../../api";
import { DateTimeFormatOptions } from "intl";
import Grid from "@mui/material/Grid";
import "./Skills.scss";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
type AppDispatch = ThunkDispatch<RootState, void, any>;

interface SkillProps {
  id: string;
}

interface SkillsItem {
  Name: string;
  Level: number;
}

export default function Skills({ id }: SkillProps) {
  const [expanded, setExpanded] = React.useState<string | false>(`panel0`); // Set initial state to `panel0`
  const skills_list = useSelector((state: RootState) => state.data.skills);
  const dispatch: AppDispatch = useDispatch();

  const skills = skills_list
    ? [...skills_list].sort((a, b) => b.Level - a.Level)
    : [];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    dispatch(fetchSkillData());
  }, [dispatch]);

  return (
    <div id={id} style={{ paddingBottom: "8rem", backgroundColor: "#2B2C38" }}>
      <div className="container" style={{ padding: "4rem" }}>
        {skills && (
          <Grid container spacing={2} alignItems="center" textAlign="center">
            {!isMobile ? (
              <>
                <Grid item xs={6}>
                  {skills.map((skill, index) => {
                    if (index % 2 === 0) {
                      const levelString =
                        "#   ".repeat(skill.Level) +
                        "-   ".repeat(5 - skill.Level);
                      return (
                        <Grid
                          container
                          spacing={2}
                          key={index}
                          style={{ paddingBottom: "2rem" }}
                        >
                          <Grid item xs={5} textAlign="left">
                            <p className="skill-name">{skill.Name}</p>
                          </Grid>
                          <Grid item xs={5}>
                            <p className="skill-level">{levelString}</p>
                          </Grid>
                        </Grid>
                      );
                    } else {
                      return null; // Skip rendering on odd index to alternate between columns
                    }
                  })}
                </Grid>
                <Grid item xs={6}>
                  {skills.map((skill, index) => {
                    if (index % 2 === 1) {
                      const levelString =
                        "#   ".repeat(skill.Level) +
                        "-   ".repeat(5 - skill.Level);
                      return (
                        <Grid
                          container
                          spacing={2}
                          key={index}
                          style={{ paddingBottom: "2rem" }}
                        >
                          <Grid item xs={5} textAlign="left">
                            <p className="skill-name">{skill.Name}</p>
                          </Grid>
                          <Grid item xs={5}>
                            <p className="skill-level">{levelString}</p>
                          </Grid>
                        </Grid>
                      );
                    } else {
                      return null; // Skip rendering on even index to alternate between columns
                    }
                  })}
                </Grid>
              </>
            ) : (
              <Grid item xs={12}>
                {skills.map((skill, index) => {
                  const levelString =
                    "#   ".repeat(skill.Level) + "-   ".repeat(5 - skill.Level);
                  return (
                    <Grid
                      container
                      spacing={2}
                      key={index}
                      style={{ paddingBottom: "2rem" }}
                    >
                      <Grid item xs={5} textAlign="left">
                        <p className="skill-name">{skill.Name}</p>
                      </Grid>
                      <Grid item xs={5}>
                        <p className="skill-level">{levelString}</p>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            )}
          </Grid>
        )}
      </div>
    </div>
  );
}
