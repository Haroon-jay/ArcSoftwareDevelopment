import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  useMediaQuery,
  Hidden,
  IconButton,
} from "@material-ui/core";
import backArrow from "../assets/backArrow.svg";
import fwArrow from "../assets/forwardArrow.svg";
import swiss from "../assets/swissKnife.svg";
import mobileAnimation from "../animations/integrationAnimation/data.json";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";
import CallToAction from "./ui/CallToAction";
const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    padding: "0em 4em 3em 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 2em 5em 2em",
    },
  },
}));
export default function MobileApps({ setSelectedIndex, setValue }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column">
      <Grid
        style={{ marginTop: matchesSm ? "0em" : "2em" }}
        item
        container
        direction="row"
        className={classes.rowContainer}
        justifyContent={matchesMd ? "center" : undefined}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              onClick={() => setSelectedIndex(1)}
              component={Link}
              to="/customsoftware"
            >
              <img src={backArrow} alt="back to service" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item className={classes.heading} container direction="column">
          <Grid item>
            <Typography align={matchesMd ? "center" : ""} variant="h2">
              IOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMd ? "center" : ""}
              variant="body1"
              paragraph
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              align={matchesMd ? "center" : ""}
              variant="body1"
              paragraph
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              align={matchesMd ? "center" : ""}
              variant="body1"
              paragraph
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              onClick={() => setSelectedIndex(3)}
              component={Link}
              to="/websites"
            >
              <img alt="Forward button" src={fwArrow} />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        style={{ margin: "10em 0" }}
        container
        direction={matchesMd ? "column" : "row"}
        alignItems={matchesMd ? "center" : ""}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesMd ? "center" : ""}
              variant="h4"
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMd ? "center" : ""}
              variant="body1"
              paragraph
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              align={matchesMd ? "center" : ""}
              variant="body1"
              paragraph
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            style={{ maxWidth: "20em" }}
            autoplay
            loop
            animationData={mobileAnimation}
          />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesMd ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMd ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography
              align={matchesMd ? "center" : "right"}
              variant="body1"
              paragraph
            >
              This significantly reduces costs and creates a more unified brand
              experience across all devices.{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{ marginBottom: "15em" }}
        direction={matchesMd ? "column" : "row"}
        className={classes.rowContainer}
        item
      >
        <Grid direction="column" item container md alignItems="center">
          <Grid item>
            <Typography gutterBottom variant="h4">
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="swiss" />
          </Grid>
        </Grid>
        <Grid
          style={{ margin: matchesMd && "5em 0" }}
          direction="column"
          item
          container
          alignItems="center"
          md
        >
          <Grid item>
            <Typography gutterBottom variant="h4">
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              style={{ maxWidth: matchesMd ? "20em" : "26em" }}
              alt="access"
            />
          </Grid>
        </Grid>
        <Grid direction="column" item alignItems="center" container md>
          <Grid item>
            <Typography gutterBottom variant="h4">
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt="engagement" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />{" "}
      </Grid>
    </Grid>
  );
}
