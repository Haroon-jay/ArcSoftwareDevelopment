import React from "react";
import Lottie from "lottie-react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import backArrow from "../assets/backArrow.svg";
import fwArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import roots from "../assets/root.svg";
import documentsAnimation from "../animations/documentsAnimation/data";
import automationAnimation from "../animations/automationAnimation/data.json";
import userAnimation from "../animations/uxAnimation/data";
import { Hidden } from "@material-ui/core";
import CallToAction from "./ui/CallToAction";
const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    padding: "0em 5em 5em 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 2em 5em 2em",
    },
  },
  itemContainer: {
    maxWidth: "35em",
  },
}));
const CustomSoftware = ({ setSelectedIndex, setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container className={classes.container} direction="column">
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
              onClick={() => setSelectedIndex(0)}
              component={Link}
              to="/services"
            >
              <img src={backArrow} alt="back to service" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item className={classes.heading} container direction="column">
          <Grid item>
            <Typography align={matchesMd ? "center" : ""} variant="h2">
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMd ? "center" : ""}
              variant="body1"
              paragraph
            >
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography
              align={matchesMd ? "center" : ""}
              variant="body1"
              paragraph
            >
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography
              align={matchesMd ? "center" : ""}
              variant="body1"
              paragraph
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography
              align={matchesMd ? "center" : ""}
              variant="body1"
              paragraph
            >
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              onClick={() => setSelectedIndex(2)}
              component={Link}
              to="/mobileapps"
            >
              <img alt="Forward button" src={fwArrow} />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "12em" }}
        direction="row"
        justifyContent="center"
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy.</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="light" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em", margin: matchesSm ? "5em 0" : "" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money.</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="light" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save time.</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="light" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.rowContainer}
        container
        alignItems={matchesMd ? "center" : ""}
        direction={matchesMd ? "column" : "row"}
        justifyContent="space-between"
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSm ? "column" : "row"}
          style={{ marginBottom: matchesMd ? "10em" : "" }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSm ? "center" : ""} variant="h4">
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSm ? "center" : ""}
                variant="body1"
                paragraph
              >
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography
                align={matchesSm ? "center" : ""}
                variant="body1"
                paragraph
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                align={matchesSm ? "center" : ""}
                variant="body1"
                paragraph
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
              animationData={documentsAnimation}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} md>
          <Grid item md>
            <Lottie
              style={{ maxHeight: 265, maxWidth: 275 }}
              animationData={scaleAnimation}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                style={{ textAlign: !matchesMd ? "right" : "center" }}
                variant="h4"
              >
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{ textAlign: !matchesMd ? "right" : "center" }}
                paragraph
              >
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        className={classes.rowContainer}
        item
        container
        direction="row"
        style={{ margin: "10em 0" }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={roots}
              alt="roots"
              height={matchesSm ? "100%" : "450em"}
              width={matchesSm ? "100%" : "450em"}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              {" "}
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.rowContainer}
        container
        direction="row"
        justifyContent="space-between"
        style={{ marginBottom: "10em" }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMd ? "10em" : "" }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSm ? "center" : ""} variant="h4">
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSm ? "center" : ""}
                variant="body1"
                paragraph
              >
                Why waste time when you don’t have to?
              </Typography>
              <Typography
                align={matchesSm ? "center" : ""}
                variant="body1"
                paragraph
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.{" "}
              </Typography>
              <Typography
                align={matchesSm ? "center" : ""}
                variant="body1"
                paragraph
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.{" "}
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
              animationData={automationAnimation}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column-reverse" : undefined}
          className={classes.itemContainer}
          md
        >
          <Grid item md justifyContent={matchesMd ? "center" : undefined}>
            <Lottie
              style={{
                maxHeight: 225,
                maxWidth: 205,
                marginLeft: matchesMd ? "3em" : "",
              }}
              animationData={userAnimation}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                style={{ textAlign: !matchesMd ? "right" : "center" }}
                variant="h4"
              >
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{ textAlign: !matchesMd ? "right" : "center" }}
                paragraph
              >
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography
                variant="body1"
                style={{ textAlign: !matchesMd ? "right" : "center" }}
                paragraph
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant="body1"
                style={{ textAlign: !matchesMd ? "right" : "center" }}
                paragraph
              >
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
