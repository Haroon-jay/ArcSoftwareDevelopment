import React, { useState } from "react";
import Lottie from "lottie-react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import axios from "axios";
import {
  Grid,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  TextField,
  useMediaQuery,
  CircularProgress,
  Snackbar
} from "@material-ui/core";
import { cloneDeep } from "lodash";
import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import people from "../assets/people.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";

import EstimateAnimation from "../animations/estimateAnimation/data.json";
const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you interested in",
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "software",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "IOS/Android App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "mobile",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "website",
        selected: false,
        cost: 0,
      },
    ],
  },
];
const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  {
    id: 2,
    title: "Which type of website do you require?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "12em",
    height: "10em",
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "2em",
    borderRadius: 5,
  },
  specialText:{
    fontFamily:"Raleway",
    fontWeight:700,
    fontSize:"1.5rem",
    color:theme.palette.common.orange
  },
  estimateButton: {
    borderRadius: 50,
    fontFamily: "pacifico",
    fontSize: "1.25rem",
    textTransform: "none",
    marginTop: "3em",
    backgroundColor: theme.palette.common.orange,
    height: 50,
    color: theme.palette.common.white,
    width: 225,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));
const Estimate = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const [questions, setQuestions] = useState(softwareQuestions);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: "", bg: "" });
  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };
  const prevQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };
  const navigationPrevDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);

    if (currentlyActive[0].id === 1) {
      return true;
    } else {
      return false;
    }
  };
  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === 6) {
      return true;
    }
    return false;
  };
  const sendEstimate=async()=>{
    setLoading(true)

    try{
    const res = await axios.post(
      "https://us-central1-arc-dev-fedf6.cloudfunctions.net/sendMail",
      { name, email, phone }
    )
    setAlert({
      open: true,
      message: "Estimate Sent Succesfully",
      bg: "#4bb543",
    });

  }
    catch(e){
    console.log(e)}
  setLoading(false)
  setOpen(false)
  }
  const handleSelect = (id, option) => {
    console.log(option);
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const newSelected = newQuestions[activeIndex].options[id - 1];
    const prevSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );
    // newSelected.selected = !newSelected.selected;

    switch (currentlyActive[0].subtitle) {
      case "Select one.":
        if (prevSelected[0]) {
          console.log(prevSelected[0].selected);
          prevSelected[0].selected = !prevSelected[0].selected;
          console.log(prevSelected[0].selected);
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }
    setQuestions(newQuestions);
  };
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
  const getTotal = () => {
    let cost = 0;
    const selections = questions
      .map((question) => {
        return question.options.filter((option) => option.selected);
      })
      .filter((item) => item.length > 0);
    console.log(selections);
     for(let i=0;i<selections.length;i++){ 
      if(selections[i][0].cost>2){ 
    cost+= selections[i].reduce((accum,item)=>accum+item.cost,0)}
    else{
      cost*=selections[i][0].cost
    }
    }

     console.log("reduced",cost)
     setTotal(cost)
  };

  return (
    <Grid container>
      <Grid item container direction="column" lg alignItems={matchesMd?"center":undefined}>
        <Grid item style={{ marginTop: "2em", marginLeft: !matchesMd && "5em" }}>
          <Typography  align={matchesMd?"center":undefined} variant="h2">Estimate</Typography>
        </Grid>
        <Grid
          item
          style={{ marginRight:!matchesMd && "10em", maxWidth: "50em", marginTop: matchesMd?"3em": "7.5em" }}
        >
          <Lottie
            animationData={EstimateAnimation}
            height="100%"
            width="100%"
            autoplay
            loop
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        direction="column"
        lg
        style={{ marginRight: matchesMd?"0em": "2em", marginBottom: "25em" }}
      >
        {questions
          .filter((question) => question.active)
          .map((question, i) => (
            <>
              <Grid item key={i}>
                <Typography
                  variant="h2"
                  align="center"
                  style={{
                    fontWeight: 500,

                    fontSize: "2.25rem",
                    marginTop: "4em",
                    lineHeight: 1.25,
                    marginLeft:matchesSm?"1em":"0em",
                    marginRight:matchesSm?"1em":"0em"
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: "2.5em" }}
                  gutterBottom
                >
                  {question.subtitle}{" "}
                </Typography>
              </Grid>
              <Grid item container>
                {question.options.map((option,i) => (
                  <Grid
                  key={option.id+i}
                    direction="column"
                    item
                    container
                    md
                    component={Button}
                    onClick={() => handleSelect(option.id, option)}
                    style={{
                      display: "grid",
                      textTransform: "none",
                      borderRadius: 0,
                      padding: "2em 0em",
                      marginBottom:matchesSm?"1.5em":"0em",
                      backgroundColor: option.selected
                        ? theme.palette.common.orange
                        : null,
                    }}
                  >
                    <Grid item style={{ maxWidth: "14em" }}>
                      <Typography
                        variant="h6"
                        align="center"
                        style={{ marginBottom: "1em" }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {" "}
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        className={classes.icon}
                        alt={option.iconAlt}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </>
          ))}

        <Grid
          item
          container
          justifyContent="space-between"
          style={{ width: "18em", marginTop: "3em" }}
        >
          <Grid item>
            <IconButton
              disabled={navigationPrevDisabled()}
              onClick={prevQuestion}
            >
              <img
                src={navigationPrevDisabled() ? backArrowDisabled : backArrow}
                alt="back"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disabled={navigationNextDisabled()}
              onClick={nextQuestion}
            >
              <img
                src={
                  navigationNextDisabled() ? forwardArrowDisabled : forwardArrow
                }
                alt="forward"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            onClick={() => {
              setOpen(true);
              getTotal();
            }}
          >
            Get Estimate{" "}
          </Button>
        </Grid>
      </Grid>
      <Dialog
      fullScreen={matchesSm}
        open={open}
        style={{ zIndex: 1400 }}
        onClose={() => setOpen(false)}
      >
        <Grid container alignItems="center"  justifyContent="">
          {matchesSm &&
          <Grid style={{marginTop:"0.3em",cursor:"pointer",marginLeft:"1em"}} item>
            <img onClick={()=>setOpen(false)}  src={backArrow}/>
          </Grid>}
          <Grid item style={{marginTop:"0.6em", margin:"0 auto"}}>
            <Typography  variant="h2" align="center">
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid container>
            <Grid item container direction="column">
              <Grid item>
                <TextField
                  value={name}
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                  label="Name"
                  id="name"
                />
              </Grid>
              <Grid item>
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
              <Grid item>
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
        
            <Grid item style={{marginTop:"3em"}}>
              <Typography variant="body1" align="center" paragraph>
                We can create this digital solution for an estimated <span className={classes.specialText}> ${total.toFixed(2)}</span>
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Fill out your name,phone number and email, place your request
                and we will get back to you with details moving forward and a
                final price
              </Typography>
            </Grid>
            <Grid item justifyContent="center" container>
            <Button
            style={{marginTop:"2em",marginRight:10}}
            variant="contained"
            className={classes.estimateButton}
            disabled={!name || !email || !phone}
            onClick={sendEstimate}
          >

            { loading?<CircularProgress/>: "Send Request" }
          </Button>
          </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
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

export default Estimate;
