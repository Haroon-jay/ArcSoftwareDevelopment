import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import footerAdornment from "../../assets/Footer Adornment.svg"
import { Grid,Hidden } from '@material-ui/core'
import { Link } from 'react-router-dom'
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"
const useStyles=makeStyles(theme=>({
    footer:{
           backgroundColor:theme.palette.common.blue,
           widht:"100%",
           zIndex:1302,
           position:"relative"
    },
    adornment:
    {
        width:"25rem",
        verticalAlign:"bottom",
        [theme.breakpoints.down("md")]:{
            width:"20rem"
        },
        [theme.breakpoints.down("xs")]:{
            width:"14rem"
        }
    },
    mainContainer:{
        position:"absolute",

    },
    link:{
      color:"white",
      fontFamily:"Arial",
      fontSize:"0.75rem"  ,
      fontWeight:"bold",
      textDecoration:"none"
    },
    gridItem:{
        margin:"3em"
    },socialImage:{
        height:"3.2em",
        width:"3.2em",
        [theme.breakpoints.down("xs")]:{
            height:"2.2em",
            width:"2.2em"
        }
    },socialContainer:{
        position:"absolute",
        marginTop:"-6em",
        right:"1.5em",
        [theme.breakpoints.down("xs")]:{
            right:"0.6em"
        }
    }
}))
const Footer = ({value,setValue,selectedIndex,setSelectedIndex}) => {
    const classes=useStyles()
    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
            <Grid justifyContent="center" container className={classes.mainContainer}>
          <Grid item className={classes.gridItem} > 
          <Grid container direction="column"  spacing={2}>
              <Grid onClick={()=>setValue(0)} component={Link} to="/" item className={classes.link}>
                  Home
              </Grid>
          </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
          <Grid container direction="column"  spacing={2}>
              <Grid  onClick={()=>{setValue(1);setSelectedIndex(0)}} component={Link} to="/services" item className={classes.link}>
                  Services
              </Grid>
              <Grid item   onClick={()=>{setValue(1);setSelectedIndex(1)}} component={Link} to="/customsoftware" className={classes.link}>
                  Custom Software Development
              </Grid>
              <Grid item onClick={()=>{setValue(1);setSelectedIndex(2)}}  component={Link} to="/mobileapps" className={classes.link}>
                  IOS/Android App Development
              </Grid>
              <Grid item  onClick={()=>{setValue(1);setSelectedIndex(3)}} component={Link} to="/websites" className={classes.link}>
                Website Development
              </Grid>
          </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
          <Grid container direction="column"  spacing={2}>
              <Grid item onClick={()=>setValue(2)}  component={Link} to="/revolution" className={classes.link}>
                  Revolution
              </Grid>
              <Grid item onClick={()=>setValue(2)} component={Link} to="/revolution" className={classes.link}>
                 Vision
              </Grid>
              <Grid item onClick={()=>setValue(2)} component={Link} to="/revolution" className={classes.link}>
                 Technology
              </Grid>
              <Grid item onClick={()=>setValue(2)} component={Link} to="/revolution" className={classes.link}>
                 Process
              </Grid>
          </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
          <Grid container direction="column"  spacing={2}>
              <Grid item onClick={()=>setValue(3)} component={Link} to="/about" className={classes.link}>
                  About us
              </Grid>
              <Grid item onClick={()=>setValue(3)} component={Link} to="/about" className={classes.link}>
               History
              </Grid>
              <Grid item onClick={()=>setValue(3)} component={Link} to="/about" className={classes.link}>
               Team
              </Grid>
          </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
          <Grid container direction="column"   spacing={2}>
              <Grid item onClick={()=>setValue(4)} component={Link} to="/contact" className={classes.link}>
                  Contact us
              </Grid>
            
          </Grid>
          </Grid>
            </Grid>
            </Hidden>
           <img src={footerAdornment} alt="decorative slash" className={classes.adornment} />
           <Grid spacing={2} container justifyContent="flex-end" className={classes.socialContainer}>
               <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank" > <img alt="facebook-logo" className={classes.socialImage} src={facebook}/> </Grid>
               <Grid item component={"a"} href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">  <img alt="twitter logo" className={classes.socialImage} src={twitter}/> </Grid>
               <Grid item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">  <img alt="insta logo" className={classes.socialImage} src={instagram}/> </Grid>
           </Grid>
        </footer>
    )
}

export default Footer
