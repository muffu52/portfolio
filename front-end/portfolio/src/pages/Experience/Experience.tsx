import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RubiksCube from "../../components/RubiksCube/RubiksCube";
import Grid from "@mui/material/Grid";
import "./Experience.scss";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../store";
import { Button } from "@mui/material";
import { fetchExperienceData } from "../../api";
import { DateTimeFormatOptions } from "intl";
import AIS from "../../images/logo/AIS.png";
import TRUE from "../../images/logo/true.svg";
import SMILE from "../../images/logo/Smile.png";
import praditsoft from "../../images/logo/praditsoft.png";
import Link from "@mui/material/Link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
type AppDispatch = ThunkDispatch<RootState, void, any>;

interface ExperienceProps {
  id: string;
}

interface ExperienceItem {
  Title: string;
  Company: string;
  StartDate: string;
  EndDate: string;
  Location: string;
  Description: string;
  Link: string;
}

function Experience({ id }: ExperienceProps) {
  const images = [SMILE, TRUE, AIS];
  const experience = useSelector((state: RootState) => state.data.experience);
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const sortedExperience = experience
    ? [...experience].sort(
        (a, b) =>
          new Date(b.StartDate).getTime() - new Date(a.StartDate).getTime()
      )
    : [];
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const formatDate = (dateString: string) => {
    const options: DateTimeFormatOptions = { year: "numeric", month: "long" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    dispatch(fetchExperienceData());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 900); // Set your desired screen size here
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id={id}>
      <Grid container style={{ paddingBottom: "8rem" }}>
        <Grid height={"0%"} item xs={12} md={"auto"}>
          <p className="heading">Experience</p>
        </Grid>
        <Grid container alignItems="center" item xs={12}>
          {images.map((image, index) => (
            <Grid
              key={index}
              item
              xs={3}
              textAlign="center"
              onClick={() => handleTabClick(index)}
              style={{
                cursor: "pointer",
                opacity: activeTab === index ? 1 : 0.5, // Apply opacity to inactive tabs
                filter: "grayscale(100%) brightness(0%) invert(100%)",
              }}
            >
              <img
                className="logo-img"
                src={image}
                alt={`Image ${index + 1}`}
              />
            </Grid>
          ))}
          <Grid
            onClick={() => handleTabClick(3)}
            item
            key={3}
            xs={3}
            textAlign={"center"}
            style={{
              cursor: "pointer",
              opacity: activeTab === 3 ? 1 : 0.5, // Apply opacity to inactive tabs
            }}
          >
            <img className="logo-img" src={praditsoft} alt={`Image ${4 + 1}`} />
          </Grid>
          {sortedExperience.length > 0 && (
            <Grid style={{ marginBottom: "4rem", marginLeft: "2rem" }}>
              <div className="exp-info">
                <p className="exp-Date">{`${formatDate(
                  sortedExperience[activeTab].StartDate
                )} - ${formatDate(sortedExperience[activeTab].EndDate)}`}</p>
                <Link
                  className="exp-Link"
                  href={sortedExperience[activeTab].Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OpenInNewIcon
                    style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
                  />
                </Link>
              </div>
              <p className="exp-Title">{sortedExperience[activeTab].Title}</p>
              <p className="exp-Company">{`${sortedExperience[activeTab].Company} (${sortedExperience[activeTab].Location})`}</p>
              <p className="exp-Description">
                {sortedExperience[activeTab].Description.split(". ")[0]}.
              </p>
              <ul>
                {sortedExperience[activeTab].Description.split(". ")
                  .slice(1)
                  .map((item, index) => (
                    <li className="exp-Description" key={index}>
                      {item}
                    </li>
                  ))}
              </ul>
            </Grid>
          )}
        </Grid>
        <Grid container justifyContent={"center"} marginRight={"20%"}>
          <RubiksCube />
        </Grid>
      </Grid>
    </div>
  );
}

export default Experience;
{
  /* {experience &&
                [...experience]
                  .sort(
                    (a, b) =>
                      new Date(b.StartDate).getTime() -
                      new Date(a.StartDate).getTime()
                  )
                  .map((item: ExperienceItem, index: number) => (
                    <Grid key={index} style={{ paddingBottom: "4rem" }}>
                      <p className="Degree">{item.Company}</p>
                    </Grid>
                  ))} */
}

{
  /* <Grid container alignItems={"center"} item xs={12}>
          {images.map((image, index) => (
            <Grid item xs={3} textAlign={"center"}>
              <img
                className="logo-img"
                key={index}
                style={{
                  filter: "grayscale(100%) brightness(0%) invert(100%)",
                  //   marginBottom: "1rem",
                }}
                src={image}
                alt={`Image ${index + 1}`}
              />
            </Grid>
          ))}
          <Grid item xs={3} textAlign={"center"}>
            <img className="logo-img" src={praditsoft} alt={`Image ${4 + 1}`} />
          </Grid>
        </Grid> */
}
