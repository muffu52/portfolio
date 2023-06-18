import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RubiksCube from "../../components/RubiksCube/RubiksCube";
import Grid from "@mui/material/Grid";
import "./Education.scss";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../store";
import { Button } from "@mui/material";
import { fetchEducationData } from "../../api";
import { DateTimeFormatOptions } from "intl";
type AppDispatch = ThunkDispatch<RootState, void, any>;

interface EducationProps {
  id: string;
}

interface EducationItem {
  Institution: string;
  Degree: string;
  StartDate: string;
  EndDate: string;
  Location: string;
  Description: string;
}

function Education({ id }: EducationProps) {
  const education = useSelector((state: RootState) => state.data.education);
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const onHandleClick = () => {
    window.location.href = "mailto:enayathmufu@yahoo.com";
  };

  const formatDate = (dateString: string) => {
    const options: DateTimeFormatOptions = { year: "numeric", month: "long" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    dispatch(fetchEducationData());
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
      <Grid container>
        {!isScreenSmall && (
          <Grid item xs={12} md={5}>
            <p className="heading">Education</p>
            <RubiksCube />
          </Grid>
        )}
        <Grid container item xs={12} md={7}>
          <Grid container className="info1">
            {isScreenSmall && <p className="heading">Education</p>}
            {education &&
              [...education]
                .sort(
                  (a, b) =>
                    new Date(b.StartDate).getTime() -
                    new Date(a.StartDate).getTime()
                )
                .map((item: EducationItem, index: number) => (
                  <Grid
                    key={index}
                    style={{ marginBottom: "4rem", marginLeft: "2rem" }}
                  >
                    <p className="Date">{`${formatDate(
                      item.StartDate
                    )} - ${formatDate(item.EndDate)}`}</p>
                    <p className="Degree">{item.Degree}</p>
                    <p className="Institution">{`${item.Institution} (${item.Location})`}</p>
                    <p className="Description">{item.Description}</p>
                  </Grid>
                ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Education;
