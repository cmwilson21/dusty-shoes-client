import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { loadTrips } from "../../actions/trips";
import { Grid, Card, CardContent } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { imgDetails } from "../../Globals";

const JournalList = () => {
  const trips = useSelector((state) => state.trips);
  const loggedIn = useSelector((state) => state.sessions.loggedIn);
  const currentUser = useSelector((state) => state.sessions.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      dispatch(loadTrips(localStorage.getItem("jwt"), currentUser));
    } else {
      history.push("/login");
    }
  }, [loggedIn, currentUser, dispatch, history]);

  const tripsLi = trips.map((trip, index) => (
    <div key={index} align="center">
      {trip.been_there === true ? (
        <Grid item md={3}>
          <Card sx={{ maxWidth: 345 }} style={{ marginTop: "12px" }}>
            <CardContent>
              <NavLink to={`/trips/${trip.id}`}>
                {trip.city}, {trip.country}
              </NavLink>
              <br />
              <img
                style={{ ...imgDetails }}
                src={trip.image_url}
                alt="travel"
              />
            </CardContent>
            <CheckIcon />
          </Card>
        </Grid>
      ) : null}
    </div>
  ));

  return (
    <div>
      <h4>Go somewhere and click Been There to see it in your journal.</h4>
      {tripsLi}
    </div>
  );
};

export default JournalList;
