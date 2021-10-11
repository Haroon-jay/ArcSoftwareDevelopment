import React from 'react'
import Lottie from "lottie-react";
import { makeStyles,useTheme } from "@material-ui/core/styles"
import animationData from "../animations/landinganimation/data"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { useMediaQuery } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import ButtonArrow from './ui/ButtonArrow';
import CustomSoftwareIcon from "../assets/Custom Software Icon.svg"
import mobileAppIcon from "../assets/mobileIcon.svg"
import { Card,CardContent } from '@material-ui/core';
import websiteIcon from "../assets/websiteIcon.svg"
import revolutionBackground from "../assets/repeatingBackground.svg"
import infoBackground from "../assets/infoBackground.svg"
import CallToAction from './ui/CallToAction';
import { Link } from 'react-router-dom';
const useStyles=makeStyles(theme=>({
    animation:{
        maxWidth:"50em",
        minWidth:"21em",
        marginTop:"2em",
        marginLeft:"10%",
        [theme.breakpoints.down("sm")]:{
            maxWidth:"35em"
        }
    },
    icon:{
        marginLeft:"2em",
        [theme.breakpoints.down("sm")]:{
            marginLeft:0
        }
    },
    estimateButton:{
        fontFamily:"pacifico",
      fontSize:"0.9rem",
      textTransform:"none",
      color:"white",
        backgroundColor:theme.palette.common.orange,
        fontWeight:550,
        borderRadius:50,
        height:45,
        marginRight:30,

        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]:{
            fontSize:"0.8em"
        }
    },buttonContainer:{
        marginTop:"1em"
    },
    learnButtonHero:{
        ...theme.typography.learnButton,
        fontSize:"0.9rem",
        height:45,
        [theme.breakpoints.down("sm")]:{
            fontSize:"0.8em"
        }
    },
    learnButton:{
        ...theme.typography.learnButton,
        fontSize:"0.7rem",
        height:35,
        [theme.breakpoints.down("sm")]:{
            marginBottom:"2em"
        }
    },subtitle:{
    marginBottom:"0.8em"
    },
    serviceContainer:{
        marginTop:"12em",
        [theme.breakpoints.down("sm")]:{
            padding:5,
            marginTop:"8em"
        }
    },
    mainContainer:{
        marginTop:"4em",
        [theme.breakpoints.down("md")]:{
            marginTop:"3em"
        },
        [theme.breakpoints.down("xs")]:{
            marginTop:"2em"
        }
    },
    specialText:{
       color:theme.palette.common.orange,
       fontWeight:600
    },
    heroTextContainer:{
        minWidth:"21.5em",
      
    },
    revolutionBg:{
        backgroundImage:`url(${revolutionBackground})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100%",
        width:"100%"
    },
    infoBg:{
        backgroundImage:`url(${infoBackground})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100%",
        width:"100%"
    },
    revolutionCard:{
        position:"absolute",
        boxShadow:theme.shadows[10],
        borderRadius:15,
        padding:"8em",
        [theme.breakpoints.down("sm")]:{
            paddingTop:"7em",
            paddingBottom:"7em",
            paddingLeft:0,
            paddingRight:0,
            borderRadius:0,
            width:"90%"
        }
    }
}))
const LandingPage = ({setValue,setSelectedIndex}) => {
    const classes=useStyles()
    const theme=useTheme()
    const matches=useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXs=useMediaQuery(theme.breakpoints.down("xs"))
    return (
        <>
        <Grid container direction="column" className={classes.mainContainer}>
          <Grid item> 
          {/* HeroBlock */}
           <Grid container alignItems="center" justifyContent=  {!matches && "flex-end"} direction="row">
           <Grid sm item className={classes.heroTextContainer}>
               <Typography variant="h2" align="center">
               Bringing West Coast technology <br/> to the Midwest
                   </Typography>
                
                 <Grid container className={classes.buttonContainer} justifyContent="center">
                     <Grid item>
                         <Button onClick={()=>setValue(5)} className={classes.estimateButton} component={Link} to="/estimate" variant="contained">Free Estimate</Button>
                     </Grid>
                     <Grid item>
                         <Button className={classes.learnButtonHero}  component={Link} to="/revolution" variant="outlined"> <span style={{marginRight:6}}> Learn More </span>
                         <ButtonArrow  onClick={()=>setValue(2)} width={15} height={15} fill={theme.palette.common.blue} />
                         </Button>
                     </Grid>
                 </Grid>
             </Grid>
             <Grid className={classes.animation} sm item>
             <Lottie  height={200} width={200} loop autoplay animationData={animationData}></Lottie>
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
              <Grid container justifyContent={matches? "center":"flex-end"} direction="row" className={classes.serviceContainer}>
                  <Grid item style={{marginLeft:!matches&& "5em",textAlign:matches && "center"}}>
                      <Typography variant="h4">IOS/Android App Development</Typography>
                      <Typography variant="subtitle1" className={classes.subtitle}>Extend Functionality. Extend Access. Increase Engagement</Typography>
                      <Typography variant="subtitle1">Integrate your web experience or create a standalone app {!matches && <br/>} with either mobile platform</Typography>
                     <Button onClick={()=>{setValue(1);setSelectedIndex(2)}} component={Link} to="/mobileapps" variant="outlined" className={classes.learnButton}><span style={{marginRight:6}}>Learn More</span>
                     <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}  />
                     </Button>
                  </Grid>
                  <Grid item style={{marginRight:matches?0:"5em"}}>
                      <img className={classes.icon} alt="mobile" src={mobileAppIcon}/>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item>
              <Grid container justifyContent={matches && "center"} direction="row" className={classes.serviceContainer}>
                  <Grid item style={{marginLeft:!matches&& "5em",textAlign:matches && "center"}}>
                      <Typography variant="h4">Website Development</Typography>
                      <Typography variant="subtitle1" className={classes.subtitle}>Reach More. Discover More. Sell More.</Typography>
                      <Typography variant="subtitle1">Optimized for Search Engines. Built for Speed.</Typography>
                     <Button onClick={()=>{setValue(1);setSelectedIndex(3)}} component={Link} to="/websites" variant="outlined" className={classes.learnButton}><span style={{marginRight:6}}>Learn More</span>
                     <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}  />
                     </Button>
                  </Grid>
                  <Grid item>
                      <img className={classes.icon} alt="Website" src={websiteIcon}/>
                  </Grid>
              </Grid>
          </Grid>
        {/* revolution */}
        <Grid item >
            <Grid container style={{height:"80em",marginTop:"12em"}} alignItems="center" justifyContent="center">
            <Card className={classes.revolutionCard}>
             <CardContent>
                 <Grid style={{textAlign:"center"}} direction="column" container>
                    <Grid item>
                        <Typography variant="h3" gutterBottom>
                            The Revolution
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">
                            Visionary insights coupled with cutting edge technology is a recipe for revolution.
                        </Typography>
                         <Button onClick={()=>{setValue(2)}} component={Link} to="/revolution" className={classes.learnButtonHero} variant="outlined"> <span style={{marginRight:6}}> Learn More </span>
                         <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                         </Button>
                    </Grid>
                 </Grid>
             </CardContent>
         </Card>
         <div className={classes.revolutionBg}/>

            </Grid>
      
        </Grid>
        {/* infoblock */}
        <Grid item>
        <Grid container alignItems="center" style={{height:"60em"}}>
            <Grid item container style={{position:"absolute",textAlign:matchesXs?"center":"inherit"}} 
        // spacing={matchesXs?10:0}
       direction={matchesXs?"column":"row"} >
            <Grid sm item style={{marginLeft: matchesXs ?0: matches? "2em":"4em"}}>
                <Grid container style={{marginBottom:matchesXs&&"10em"}} direction="column">
                    <Typography style={{color:"white"}} variant="h2">
                      About us
                    </Typography>
                    <Typography variant="subtitle2">
                     Let's get Personal.
                    </Typography>
                    <Grid item >
                    <Button onClick={()=>{setValue(3)}} component={Link} to="/about" style={{color:"white",borderColor:"white"}} variant="outlined" className={classes.learnButton}><span style={{marginRight:6}}>Learn More</span>
                     <ButtonArrow width={15} height={15} fill={theme.palette.common.white}  />
                     </Button> </Grid>
                </Grid>
            </Grid>
            <Grid sm item style={{marginRight: matchesXs?0: matches?"2em": "4em",textAlign: matchesXs?"center": "right"}}>
                <Grid container direction="column">
                    <Typography style={{color:"white"}} variant="h2">
                      Contact Us
                    </Typography>
                    <Typography variant="subtitle2">
                    Say hello <span role="image" aria-label="hand">👋</span> 
                    </Typography>
                    <Grid item >
                    <Button onClick={()=>{setValue(4)}}  component={Link} to="/contact" 
                    style={{color:"white",borderColor:"white"}} variant="outlined" className={classes.learnButton}><span style={{marginRight:6}}>Learn More</span>
                     <ButtonArrow width={15} height={15} fill={theme.palette.common.white}  />
                     </Button> </Grid>
                </Grid>
            </Grid>
            </Grid>
            
           

            <div className={classes.infoBg} />
        </Grid>
        </Grid>
        {/* CTA */}
        <Grid item>
         <CallToAction setValue={setValue} />
        </Grid>
        </Grid>
        
        </>
    )
}

export default LandingPage
