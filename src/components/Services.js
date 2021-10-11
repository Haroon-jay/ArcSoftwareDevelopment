import React from "react"
import { Link } from "react-router-dom"
import { makeStyles,useMediaQuery,useTheme } from "@material-ui/core"
import { Grid,Typography,Button } from "@material-ui/core"
import CustomSoftwareIcon from "../assets/Custom Software Icon.svg"
import mobileAppIcon from "../assets/mobileIcon.svg"
import ButtonArrow from './ui/ButtonArrow';
import websiteIcon from "../assets/websiteIcon.svg"
const useStyles=makeStyles(theme=>({
    serviceContainer:{
        marginTop:"8em",
        [theme.breakpoints.down("sm")]:{
            padding:5,
            marginTop:"8em"
        }
    }, icon:{
        marginLeft:"2em",
        [theme.breakpoints.down("sm")]:{
            marginLeft:0
        }
    },subtitle:{
        marginBottom:"0.8em"
        }, specialText:{
            color:theme.palette.common.orange,
            fontWeight:600
         }, learnButton:{
            ...theme.typography.learnButton,
            fontSize:"0.7rem",
            height:35,
            [theme.breakpoints.down("sm")]:{
                marginBottom:"2em"
            }
        }
}))
export default function Services({setValue,setSelectedIndex}){
    const classes=useStyles()
    const theme=useTheme()
    const matches=useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXs=useMediaQuery(theme.breakpoints.down("xs"))

    return(
        <Grid container direction="column"> 
        <Grid item>
            <Typography   variant="h2" style={{textAlign: matches &&"center",  marginLeft:!matches&& "2em",marginTop:matches?"1em":"2em"}} gutterBottom>Services</Typography>
        </Grid>
            <Grid item>
              <Grid container
              style={{marginTop:matchesXs?"1em":  "4em"}}
              justifyContent={matches? "center":"flex-end"} direction="row" className={classes.serviceContainer}>
                  <Grid item style={{marginLeft:!matches&& "5em",textAlign:matches && "center",width:matches?undefined:"35em"}}>
                      <Typography variant="h4">IOS/Android App Development</Typography>
                      <Typography variant="subtitle1" className={classes.subtitle}>Extend Functionality. Extend Access. Increase Engagement</Typography>
                      <Typography variant="subtitle1">Integrate your web experience or create a standalone app {!matches && <br/>} with either mobile platform</Typography>
                     <Button onClick={()=>{setValue(1);setSelectedIndex(2)}} component={Link} to="/mobileapps" variant="outlined" className={classes.learnButton}><span style={{marginRight:6}}>Learn More</span>
                     <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}  />
                     </Button>
                  </Grid>
                  <Grid item style={{marginRight:matches?0:"5em"}}>
                      <img className={classes.icon} width="250em" alt="mobile" src={mobileAppIcon}/>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item>
              <Grid container justifyContent={matches && "center"} direction="row" className={classes.serviceContainer}>
                  <Grid item style={{marginLeft:!matches&& "5em",textAlign:matches && "center"}}>
                      <Typography variant="h4">Custom Software Development</Typography>
                      <Typography variant="subtitle1" className={classes.subtitle}>Save Energy. Save time. Save Money</Typography>
                      <Typography variant="subtitle1">Complete Digital Solution, from investigation to{" "} <span className={classes.specialText}>celebration </span></Typography>
                     <Button  onClick={()=>{setValue(1);setSelectedIndex(1)}} component={Link} to="/customsoftware" variant="outlined" className={classes.learnButton}><span style={{marginRight:6}}>Learn More</span>
                     <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}  />
                     </Button>
                  </Grid>
                  <Grid item>
                      <img className={classes.icon} alt="Custom" src={CustomSoftwareIcon}/>
                  </Grid>
              </Grid>
          </Grid>
      
          <Grid item>
              <Grid style={{marginBottom:"8em"}}  container justifyContent={matches ? "center":"flex-end"} direction="row" className={classes.serviceContainer}>
                  <Grid item style={{textAlign:matches && "center",width:matches?undefined:"35em"}}>
                      <Typography variant="h4">Website Development</Typography>
                      <Typography variant="subtitle1" className={classes.subtitle}>Reach More. Discover More. Sell More.</Typography>
                      <Typography variant="subtitle1">Optimized for Search Engines. Built for Speed.</Typography>
                     <Button onClick={()=>{setValue(1);setSelectedIndex(3)}} component={Link} to="/websites" variant="outlined" className={classes.learnButton}><span style={{marginRight:6}}>Learn More</span>
                     <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}  />
                     </Button>
                  </Grid>
                  <Grid item style={{marginRight:!matches&& "5em"}}>
                      <img className={classes.icon} width="250em" alt="Website" src={websiteIcon}/>
                  </Grid>
              </Grid>
          </Grid>
        </Grid>
    )
}