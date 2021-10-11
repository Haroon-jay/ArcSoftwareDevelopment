import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Typography,
  Button,
  TextField,
  useMediaQuery,
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";
import ButtonArrow from "./ui/ButtonArrow";
import mobileBackground from "../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    borderRadius: 50,
    fontFamily: "pacifico",
    fontSize: "0.9rem",
    textTransform: "none",
    backgroundColor: theme.palette.common.orange,
    height: 50,
    color: theme.palette.common.white,
    marginRight: "4em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    borderRadius: 50,
    height: 45,
    width: 245,

    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    fontFamily: "pacifico",
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      width: 145,
      fontSize: "0.8rem",
      height: 40,
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));
const Contact = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: "", bg: "" });
  const onChange = (e) => {
    let valid;
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(e.target.value);
        valid =
          /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
            e.target.value
          ) ||
          (!isNaN(parseFloat(e.target.value)) &&
            isFinite(e.target.value) &&
            e.target.value.length > 9);
        if (!valid) {
          setPhoneHelper("Invalid Phone Number");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://us-central1-arc-dev-fedf6.cloudfunctions.net/sendMail",
        { name, email, message, phone }
      );
      console.log(res);
      setLoading(false);
      setOpen(false);
      setAlert({
        open: true,
        message: "Message Sent Succesfully",
        bg: "#4bb543",
      });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (e) {
      setAlert({
        open: true,
        message: "Something went wrong:(",
        bg: "#ff3232",
      });
      setLoading(false);
    }
  };
  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        style={{
          marginBottom: matchesMd && "5em",
          marginTop: matchesSm ? "1em" : matchesMd && "5em",
        }}
        justifyContent="center"
        alignItems="center"
        xl={3}
        lg={4}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item align={matchesMd ? "center" : undefined}>
              <Typography variant="h2" style={{ lineHeight: 1 }}>
                Contact us
              </Typography>
              <Typography
                style={{ color: theme.palette.common.blue }}
                variant="body1"
              >
                We're Waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                  variant="body1"
                >
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="tell:55555555"
                  >
                    {" "}
                    555-5555-555
                  </a>
                </Typography>
              </Grid>
            </Grid>

            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="email"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                  variant="body1"
                >
                  {" "}
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="mailto:haroonjawad6@gmail.com"
                  >
                    {" "}
                    haroonjawad6@gmail.com{" "}
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "25em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  value={name}
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                  label="Name"
                  id="name"
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  value={email}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  fullWidth
                  onChange={onChange}
                  label="Email"
                  id="email"
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  helperText={phoneHelper}
                  value={phone}
                  error={phoneHelper.length !== 0}
                  fullWidth
                  onChange={onChange}
                  label="Phone"
                  id="phone"
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "25em" }}>
              <TextField
                fullWidth
                rows={8}
                InputProps={{ disableUnderline: true }}
                value={message}
                className={classes.message}
                id="message"
                multiline
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid
              item
              style={{ marginTop: "2em" }}
              container
              justifyContent="center"
            >
              <Button
                onClick={() => setOpen(true)}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                className={classes.sendButton}
                variant="contained"
              >
                Send Message{" "}
                <img
                  style={{ marginLeft: "0.7em" }}
                  src={airplane}
                  alt="airplane"
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        fullScreen={matchesSm}
        style={{ marginTop: "5em", zIndex: "1302" }}
        fullWidth
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>{" "}
            </Grid>

            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                value={name}
                fullWidth
                onChange={(e) => setName(e.target.value)}
                label="Name"
                id="name"
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                value={email}
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                fullWidth
                onChange={onChange}
                label="Email"
                id="email"
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                helperText={phoneHelper}
                value={phone}
                error={phoneHelper.length !== 0}
                fullWidth
                onChange={onChange}
                label="Phone"
                id="phone"
              />
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                rows={8}
                InputProps={{ disableUnderline: true }}
                value={message}
                className={classes.message}
                id="message"
                multiline
                placeholder="Tell us more about your project"
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            style={{ marginTop: "1em" }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Button color="primary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={handleSubmit}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                className={classes.sendButton}
                variant="contained"
              >
                {loading ? (
                  <CircularProgress size={30} />
                ) : (
                  <>
                    {" "}
                    Send Message{" "}
                    <img
                      style={{ marginLeft: "0.7em" }}
                      src={airplane}
                      alt="airplane"
                    />{" "}
                  </>
                )}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        lg={8}
        xl={9}
        alignItems="center"
        justifyContent={matchesMd ? "center" : ""}
        direction={matchesMd ? "column" : "row"}
        className={classes.background}
      >
        <Grid
          item
          style={{
            marginLeft: !matchesMd && "3em",
            textAlign: matchesMd ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item align={matchesMd ? "center" : undefined}>
              <Typography variant="h2">
                Simple Software.
                <br /> Revolutionary Results.
              </Typography>
              <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                Take Advantage of the 21st Century.
              </Typography>
              <Grid container item justifyContent={matchesMd ? "center" : ""}>
                <Button
                  onClick={() => {
                    setValue(2);
                  }}
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButton}
                >
                  <span style={{ marginRight: 4 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item justifyContent={matchesMd ? "flex-end" : ""}>
          <Button
            onClick={() => {
              setValue(5);
            }}
            variant="contained"
            component={Link}
            to="/estimate"
            className={classes.estimateButton}
          >
            {" "}
            Free Estimate
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.bg } }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={3000}
      ></Snackbar>
    </Grid>
  );
};

export default Contact;
