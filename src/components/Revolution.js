import React from "react"
import { makeStyles,useTheme } from "@material-ui/core/styles"
import { Grid,Typography,useMediaQuery } from "@material-ui/core"
import vision from "../assets/vision.svg"
import Lottie from "lottie-react"
import techAnimation from "../animations/technologyAnimation/data.json"
import consultation from "../assets/consultationIcon.svg"
import mockup from "../assets/mockupIcon.svg"
import review from "../assets/reviewIcon.svg"
import design from "../assets/designIcon.svg"
import build from "../assets/buildIcon.svg"
import launch from "../assets/launchIcon.svg"
import maintain from "../assets/maintainIcon.svg"
import iterate from "../assets/iterateIcon.svg"
const useStyles=makeStyles(theme=>({
    rowContainer:{
        padding: "0em 5em 5em 5em",
        [theme.breakpoints.down("sm")]:{
            padding:"1em 2em 5em 2em"
        }
    }
}))
export default function Revolution({setValue,setSelectedIndex}){
const classes=useStyles()
const theme=useTheme()
const matchesMd=useMediaQuery(theme.breakpoints.down("md"))
const matchesSm=useMediaQuery(theme.breakpoints.down("sm"))
return(
    <Grid container direction="column">
        <Grid item className={classes.rowContainer} style={{marginTop:"2em"}}>
            <Typography variant="h2" align={matchesMd?"center":""} style={{fontFamily:"Pacifico"}}>The Revolution</Typography>
        </Grid>
        <Grid item container alignItems="center" direction={matchesMd?"column":"row"} style={{marginTop:"5em"}} className={classes.rowContainer}>
            <Grid item lg>
                <img style={{maxWidth:matchesSm?"300px": "40em",marginRight: !matchesMd && "5em",marginBottom:matchesMd &&"2em"}} src={vision} alt="vision"/>
            </Grid>
            <Grid style={{textAlign:matchesMd?"center": "right",maxWidth:"40em"}} item container direction="column" lg>
                <Grid item >
                    <Typography  variant="h4" gutterBottom>Vision</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body1" paragraph>
                        The rise of computers, and subsequently the Internet, has completely altered every aspect of human life. This has increased our comfort, broadened our connections, and reshaped how we view the world.
                        </Typography>
<Typography variant="body1" paragraph>
We want to help businesses capitalize on the latest and greatest technology. The best way to predict the future is to be the one building it, and we want to help guide the world into this next chapter of technological expansion, exploration, and innovation.
</Typography>
<Typography variant="body1" paragraph>
By holding ourselves to rigorous standards and pristine quality, we can ensure you have the absolute best tools necessary to thrive in this new frontier.
</Typography>

                      </Grid>
            </Grid>
        </Grid>
        <Grid item container alignItems="center" style={{marginTop:"8em",marginBottom:"8em"}}  direction={matchesMd?"column":"row"} className={classes.rowContainer}>
         
            <Grid style={{maxWidth:"40em",textAlign:matchesMd && "center"}} item container direction="column" lg>
                <Grid item >
                    <Typography  variant="h4" gutterBottom>Technology</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body1" paragraph>
                        In 2013, Facebook invented a new way of building websites. This new system, React.js, completely revolutionizes the process and practice of website developmen
                        </Typography>
<Typography variant="body1" paragraph>
Instead of chaining together long individual pages, like traditional websites, React websites are built with little chunks of code called components. These components are faster, easier to maintain, and are easily reused and customized, each serving a singular purpose.

</Typography>
<Typography variant="body1" paragraph>
Two years later they shocked the world by releasing a similar system, React Native, for producing iOS and Android apps. Instead of having to master two completely separate development platforms, you can leverage the knowledge you already possessed from building websites and reapply it directly! This was a huge leap forward.</Typography>
<Typography variant="body1" paragraph>
This technology is now being used by companies like AirBnB, Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when Facebook purchased Instagram large portions of it were even rebuilt using React.


</Typography>
<Typography variant="body1" paragraph>
Developers have since built on top of these systems by automating project setup and deployment, allowing creators to focus as much as possible on their work itself.
</Typography>
<Typography variant="body1" paragraph>
These technical advancements translate into savings by significantly reducing the workload and streamlining the workflow for developing new pieces of software, while also lowering the barrier to entry for mobile app development.
</Typography>
<Typography variant="body1" paragraph>
This puts personalization in your pocket — faster, better, and more affordable than ever before.
</Typography>
                      </Grid>
            </Grid>
            <Grid container justifyContent= {matchesMd?"center": "flex-end"} item lg>
               <Lottie style={{maxWidth:"40em",margin:0}} animationData={techAnimation} autoplay loop />
            </Grid>
        </Grid>
        <Grid container justifyContent="center"  direction={matchesMd?"column":"row"} className={classes.rowContainer} item>
            <Grid item style={{textAlign:matchesMd && "center"}}>
                <Typography gutterBottom variant="h4">
                  Process
                </Typography>
            </Grid>
        </Grid>
        <Grid item className={classes.rowContainer}  direction={matchesMd?"column":"row"} container  style={{backgroundColor:"#B3B3B3",height:matchesMd?"90em": "90em"}}>
            <Grid item style={{textAlign:matchesMd && "center"}} container direction="column" lg>
                <Grid item>
                    <Typography  style={{color:"#000",marginTop:"5em"}} variant="h4" gutterBottom>Consultation</Typography>
                </Grid>
                <Grid item>
                    <Typography  style={{color:"#fff",maxWidth:!matchesMd && "20em"}} variant="body1" paragraph>Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.</Typography>
                    <Typography  style={{color:"#fff",maxWidth:!matchesMd && "20em"}} variant="body1" paragraph>Detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.

</Typography>
                    <Typography  style={{color:"#fff",maxWidth:!matchesMd && "20em"}} variant="body1" paragraph>Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise and intuition will help usher you into this new future of possibilities.

</Typography>
                </Grid>
            </Grid>
            <Grid item lg style={{alignSelf:"center"}}>
                <img src={consultation} style={{maxWidth:matchesMd && "20em"}} alt="cons"/>
            </Grid>
        </Grid>
        <Grid item className={classes.rowContainer} container  direction={matchesMd?"column":"row"} style={{backgroundColor:"#FF7373",height:matchesMd?"72em": "90em"}}>
            <Grid item container style={{textAlign:matchesMd && "center"}} direction="column" lg>
                <Grid item>
                    <Typography  style={{color:"#000",marginTop:"5em"}} variant="h4" gutterBottom>Mockup</Typography>
                </Grid>
                <Grid item>
                    <Typography  style={{color:"#fff",maxWidth:!matchesMd && "20em"}} variant="body1" paragraph>After we settle on the best path forward and decide on a solution to pursue, details like the cost and timeline will be finalized.</Typography>
                    <Typography  style={{color:"#fff",maxWidth: !matchesMd &&"20em"}} variant="body1" paragraph>Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a mockup, which doesn’t include colors, images, or any other polished design elements, but captures the essential layout structure and functionality.

</Typography>
                    <Typography  style={{color:"#fff",maxWidth: !matchesMd &&"20em"}} variant="body1" paragraph>This helps us understand and refine the solution itself before getting distracted by specifics and looks.
</Typography>
                </Grid>
            </Grid>
            <Grid item lg style={{alignSelf:"center"}}>
                <img  style={{maxWidth:matchesMd && "20em"}} src={mockup} alt="cons"/>
            </Grid>
        </Grid>
        <Grid item className={classes.rowContainer} container  direction={matchesMd?"column":"row"} style={{backgroundColor:"#39B54A", height:matchesMd?"80em": "90em"}}>
            <Grid item container style={{textAlign:matchesMd && "center"}} direction="column" lg>
                <Grid item>
                    <Typography  style={{color:"#000",marginTop:"5em"}} variant="h4" gutterBottom>Review</Typography>
                </Grid>
                <Grid item>
                    <Typography  style={{color:"#fff",maxWidth: !matchesMd &&"20em"}} variant="body1" paragraph>Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.</Typography>
                    <Typography  style={{color:"#fff",maxWidth: !matchesMd &&"20em"}} variant="body1" paragraph>We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.

</Typography>
                    <Typography  style={{color:"#fff",maxWidth:!matchesMd &&"20em"}} variant="body1" paragraph>Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.
</Typography>
                </Grid>
            </Grid>
            <Grid item lg style={{alignSelf:"center"}}>
                <img  style={{maxWidth:matchesMd && "20em"}} src={review} alt="cons"/>
            </Grid>
        </Grid>
        <Grid item direction={matchesMd?"column":"row"} className={classes.rowContainer} container  style={{backgroundColor:"#A67C52",height:matchesMd?"62em": "90em"}}>
            <Grid item container style={{textAlign:matchesMd && "center"}} direction="column" lg>
                <Grid item>
                    <Typography  style={{color:"#000",marginTop:"5em"}} variant="h4" gutterBottom>Design</Typography>
                </Grid>
                <Grid item>

                    <Typography  style={{color:"#fff",maxWidth:!matchesMd &&"20em"}} variant="body1" paragraph>Using the mockups and notes taken during the consultation as guides, we will start ironing out what the final product will look like. This also involves using any brand material like fonts, colors, and logos to extend the experience you’re already familiar with.
</Typography>
                    <Typography  style={{color:"#fff",maxWidth:!matchesMd &&"20em"}} variant="body1" paragraph>No aspect is superfluous, and care will be taken with every decision.
</Typography>
                </Grid>
            </Grid>
            <Grid item lg style={{alignSelf:"center"}}>
                <img  style={{maxWidth:matchesMd && "20em"}} src={design} alt="cons"/>
            </Grid>
        </Grid>
        <Grid item direction={matchesMd?"column":"row"} className={classes.rowContainer} container  style={{backgroundColor:"#FBB0B3",height:matchesMd?"62em": "90em"}}>
            <Grid item container style={{textAlign:matchesMd && "center"}} direction="column" lg>
                <Grid item>
                    <Typography  style={{color:"#000",marginTop:"5em"}} variant="h4" gutterBottom>Build</Typography>
                </Grid>
                <Grid item>

                    <Typography  style={{color:"#fff",maxWidth:!matchesMd &&"20em"}} variant="body1" paragraph>Here’s where we get down to business.
</Typography>
                    <Typography  style={{color:"#fff",maxWidth:!matchesMd &&"20em"}} variant="body1" paragraph>Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.', 'Each area is then developed in order of importance until ready to be connected to the next piece.
</Typography>
                </Grid>
            </Grid>
            <Grid item lg style={{alignSelf:"center"}}>
                <img  style={{maxWidth:matchesMd?"20em": "50em"}} src={build} alt="cons"/>
            </Grid>
        </Grid>
    </Grid>
)
}