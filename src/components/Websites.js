import React from 'react'
import { Link } from 'react-router-dom'
import { Grid,IconButton,Typography,useMediaQuery,Hidden } from '@material-ui/core'
import { useTheme,makeStyles } from '@material-ui/core/styles'
import backArrow from "../assets/backArrow.svg"
import fwArrow from "../assets/forwardArrow.svg"
import analytics from "../assets/analytics.svg"
import seo from "../assets/seo.svg"
import outreach from "../assets/outreach.svg"
import  Lottie  from 'lottie-react'
import ecommerce from "../assets/ecommerce.svg"
import CallToAction from "./ui/CallToAction"
const useStyles=makeStyles(theme=>({
    heading:{
        maxWidth:"40em"
    },
    arrowContainer:{
       marginTop:"0.5em"
    },
    rowContainer:{
        padding: "0em 4em 3em 5em",
        [theme.breakpoints.down("sm")]:{
            padding:"1em 2em 5em 2em"
        }
    },paragraph:{
        maxWidth:"30em"
    }
}))
const Websites = ({setSelectedIndex,setValue}) => {
    const classes=useStyles()
    const theme=useTheme()
    const matchesMd=useMediaQuery(theme.breakpoints.down("md"))
   
    const matchesSm=useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <Grid container direction="column">
            <Grid style={{marginTop:matchesSm?"0em": "2em"}} item container direction="row" className={classes.rowContainer} justifyContent={matchesMd?"center":""}>
                <Hidden mdDown>
                <Grid item className={classes.arrowContainer} style={{marginRight:"1em",marginLeft:"-3.5em"}}>
              <IconButton onClick={()=>setSelectedIndex(2)} component={Link} to="/mobileapps" >
                  <img src={backArrow} alt="back to mobile apps" />
              </IconButton>
             </Grid>
                </Hidden>
             
             <Grid item className={classes.heading} container direction="column"> 
             <Grid item>
                 <Typography align={matchesMd ? "center":""} variant="h2">
                     Website Development
                 </Typography>
             </Grid>
             <Grid item>
                 <Typography align={matchesMd ? "center":""} variant="body1" paragraph >
                 Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it.
                 </Typography>
                 <Typography align={matchesMd ? "center":""} variant="body1" paragraph >
                 From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.
                 </Typography>
              
             </Grid>
             </Grid>
             <Hidden mdDown>
             <Grid item className={classes.arrowContainer}>
                <IconButton onClick={()=>setSelectedIndex(0)} component={Link} to="/services" >
                  <img alt="Forward button to servies" src={fwArrow} /> 
                 </IconButton>
             </Grid>
             </Hidden>
            </Grid>
            <Grid item container direction={matchesSm?"column":"row"} className={classes.rowContainer} style={{marginTop:matchesSm?"4em": "10em"}} alignItems="center"  >
            <Grid item>
             <Grid container direction="column">
                 <Grid item>
                     <Typography align={matchesSm?"center":""} style={{marginLeft:matchesMd?"0.70em":"0em"}} variant="h4" gutterBottom>Analytics</Typography>
                 </Grid>
                 <Grid item>
                     <img style={{marginLeft:matchesMd?"-1.5em": "-2.75em"}} src={analytics} alt="analytics" /> 
                 </Grid>
             </Grid>
            </Grid>
            <Grid item>
              <Typography align={matchesSm?"center":""} style={{maxWidth:"25em"}} variant="body1" className={classes.paragraph}>
              Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.
              </Typography>
            </Grid>
            </Grid>
            <Grid direction={matchesSm?"column":"row"} justifyContent="flex-end" style={{margin:matchesSm?"4em 0": "10em 0"}} item container className={classes.rowContainer} alignItems="center"  >
            <Grid item>
             <Grid container direction="column">
                 <Grid item>
                     <Typography align="center" variant="h4" gutterBottom>E-Commerce</Typography>
                 </Grid>
                 <Grid item>
                     <img  src={ecommerce} alt="ecommerce" /> 
                 </Grid>
             </Grid>
            </Grid>
            <Grid item 
            style={{marginLeft:"1em"}}
            >
              <Typography align={matchesSm?"center":""}  variant="body1" paragraph style={{maxWidth:"25em"}}  className={classes.paragraph}>
It’s no secret that people like to shop online
              </Typography>
              <Typography align={matchesSm?"center":""}  variant="body1" paragraph style={{maxWidth:"25em"}} className={classes.paragraph}>
              In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.

              </Typography>
            </Grid>
            </Grid>
            <Grid item direction={matchesSm?"column":"row"} container  className={classes.rowContainer} alignItems="center"  >
            <Grid item>
             <Grid container direction="column">
                 <Grid item>
                     <Typography align={matchesSm?"center":""} style={{marginLeft:matchesMd?"0.70em":"0em"}} variant="h4" gutterBottom>Outreach</Typography>
                 </Grid>
                 <Grid item>
                     <img  src={outreach} alt="outreach" /> 
                 </Grid>
             </Grid>
            </Grid>
            <Grid item style={{marginLeft:"1em"}}>
              <Typography  align={matchesSm?"center":""}  variant="body1" className={classes.paragraph}>
Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.  </Typography>
            </Grid>
            </Grid>
            <Grid direction={matchesSm?"column":"row"} justifyContent="flex-end" style={{margin:matchesSm?"4em 0": "10em 0"}} item container className={classes.rowContainer} alignItems="center"  >
            <Grid item>
             <Grid container direction="column">
                 <Grid item>
                     <Typography align="center" variant="h4" gutterBottom>Search Engine <br/> Optimization</Typography>
                 </Grid>
                 <Grid item>
                     <img  src={seo} alt="seo" /> 
                 </Grid>
             </Grid>
            </Grid>
            <Grid item 
            style={{marginLeft:"1em"}}
            >
              <Typography align={matchesSm?"center":""}  variant="body1" paragraph style={{maxWidth:"25em"}}  className={classes.paragraph}>
              How often have you ever been to the second page of Google results?
              </Typography>
              <Typography align={matchesSm?"center":""}  variant="body1" paragraph style={{maxWidth:"25em"}} className={classes.paragraph}>
              If you’re like us, probably never
              </Typography>
              <Typography align={matchesSm?"center":""}  variant="body1" paragraph style={{maxWidth:"25em"}} className={classes.paragraph}>
              Customers don’t go there either, so we make sure your website is designed to end up on top.
              </Typography>
            </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue}/>
            </Grid>
        </Grid>
    )
}

export default Websites
