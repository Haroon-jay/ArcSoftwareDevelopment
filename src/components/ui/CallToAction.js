import React from 'react'
import { Grid,Typography,Button } from '@material-ui/core'
import { makeStyles,useTheme } from "@material-ui/core/styles"
import ButtonArrow from './ButtonArrow'
import background from "../../assets/background.jpg"
import { useMediaQuery } from '@material-ui/core'
import { Link } from 'react-router-dom'
import mobileBackground from "../../assets/mobileBackground.jpg"
const useStyles=makeStyles(theme=>({
learnButton:{
    ...theme.typography.learnButton,
    fontSize:"0.7rem",
    height:35,
    [theme.breakpoints.down("sm")]:{
        marginBottom:"2em"
    }
},
background:{
    backgroundImage:`url(${background})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundAttachment:"fixed",
    backgroundRepeat:"no-repeat",
    height:"40em",
    width:"100%",
    [theme.breakpoints.down("md")]:{
        backgroundImage:`url(${mobileBackground})`,
        backgroundAttachment:"inherit"
    }
},
estimateButton:{
    borderRadius:50,
    fontFamily:"pacifico",
    fontSize:"0.9rem",
    textTransform:"none",
    backgroundColor:theme.palette.common.orange,
    height:70,
    color:theme.palette.common.white,
    marginRight:"4em",
    marginLeft:"2em",
    [theme.breakpoints.down("sm")]:{
     marginLeft:0,
     marginRight:0
    },
width:185,
    fontSize:"1rem",
    fontWeight:"bold",
    "&:hover":{
      backgroundColor:theme.palette.secondary.light
    }
}
}))
const CallToAction = ({setValue}) => {
    const classes=useStyles()

    const theme=useTheme()
    const matchesSm=useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <Grid container style={{height:"30em"}} alignItems="center"
        direction= {matchesSm?"column": "row"}
         justifyContent={ matchesSm?"center": "space-between"} className={classes.background}>
            <Grid item style={{marginLeft: !matchesSm &&"5em",textAlign:matchesSm?"center":"inherit"}}>
              <Grid container direction="column">
                <Grid item>
                    <Typography variant="h2">
                        Simple Software.<br/> Revolutionary Results.
                    </Typography>
                    <Typography variant="subtitle2" style={{fontSize:"1.5rem"}}>
                    Take Advantage of the 21st Century.
                    </Typography>
                    <Grid container item justifyContent={matchesSm&&"center"} >
                    <Button onClick={()=>{setValue(2)}}   component={Link} to="/revolution" variant="outlined" className={classes.learnButton}>
                        <span style={{marginRight:4}}>Learn More</span>
                     <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}  />
                     </Button> </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
                <Button onClick={()=>{setValue(5)}}  variant="contained" component={Link} to="/estimate" className={classes.estimateButton}> Free Estimate</Button>
            </Grid>
         
            </Grid>
    )
}

export default CallToAction
