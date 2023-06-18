import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { fetchAPIData } from "../api";
import { RootState } from "../store"; // Assuming you have defined a RootState type
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
type AppDispatch = ThunkDispatch<RootState, void, any>;
function Info() {
  const data = useSelector((state: RootState) => state.data.data);
  const loading = useSelector((state: RootState) => state.data.loading);
  const error = useSelector((state: RootState) => state.data.error);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAPIData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Grid container className="info">
      <Grid> {data && <p className="Name">{data.Name}</p>}</Grid>
      <Grid> {data && <p className="Description">{data.Summary}</p>}</Grid>
      <Grid container paddingTop={"5em"} alignItems={"center"}>
        <Grid>
          <Button
            variant="outlined"
            size="large"
            style={{
              marginRight: "5em",
              color: "#BDBDBD",
              borderColor: "#BDBDBD",
              fontSize: "1.2em",
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
  );
}

export default Info;
