import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RubiksCube from "./RubiksCube/RubiksCube";
import Info from "./Info2";
import Grid from "@mui/material/Grid";
import "./body-boo.scss";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";
import { Button } from "@mui/material";
import { fetchAPIData } from "../api";
type AppDispatch = ThunkDispatch<RootState, void, any>;

interface EducationProps {
  id: string;
}

function Body({ id }: EducationProps) {
  const data = useSelector((state: RootState) => state.data.data);
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const onHandleClick = () => {
    window.location.href = "mailto:enayathmufu@yahoo.com";
  };

  useEffect(() => {
    dispatch(fetchAPIData());
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
      <Grid
        container
        style={{ paddingTop: "8rem", paddingBottom: "8rem", height: "100vh" }}
      >
        <Grid container item xs={12} md={7}>
          <Grid container className="info">
            <Grid> {data && <p className="Name">{data.Name}</p>}</Grid>
            <Grid>{data && <p className="Description">{data.Summary}</p>}</Grid>
            <Grid container paddingTop={"5em"} alignItems={"center"}>
              <Grid>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={onHandleClick}
                  style={{
                    marginRight: "5em",
                    color: "#BDBDBD",
                    borderColor: "#BDBDBD",
                    fontSize: "1.2em",
                    textTransform: "none",
                    fontFamily: "JetBrains Mono",
                  }}
                >
                  Contact
                </Button>
              </Grid>
              <Grid>
                <p className="Description">Let's work together!</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {!isScreenSmall && (
          <Grid item xs={12} md={5}>
            <RubiksCube />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default Body;
