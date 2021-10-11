import React,{useState,useEffect,useMemo} from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Tabs from "@material-ui/core/Tabs"
import Tab  from '@material-ui/core/Tab'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import logo from "../../assets/logo.svg"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import  MenuItem  from '@material-ui/core/MenuItem'
import { Link } from "react-router-dom"
import  useMediaQuery  from '@material-ui/core/useMediaQuery'
import {useTheme} from "@material-ui/core/styles"
import { IconButton } from '@material-ui/core'
import  SwipeableDrawer  from '@material-ui/core/SwipeableDrawer'
import  MenuIcon  from '@material-ui/icons/Menu'
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'
import { ListItem } from '@material-ui/core'
function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4: 0,
    });
  }
const useStyles=makeStyles(theme=>({
    toolbarMargin:{
        ...theme.mixins.toolbar,
        marginBottom:"3em",
        [theme.breakpoints.down("md")]:{
          marginBottom:"2.2rem"
        },
        [theme.breakpoints.down("xs")]:{
          marginBottom:"1.4rem"
        }
    },
    logo:{
      height:'7rem',
      [theme.breakpoints.down("md")]:{
        height:"6rem"
      },
      [theme.breakpoints.down("xs")]:{
        height:"5rem"
      }
    },
    tabContainer:{
      marginLeft:"auto"
    },
    tab:{
      fontFamily:"Raleway",
      minWidth:25,
      fontWeight:"700",
      marginLeft:"20px",
      fontSize:"0.9rem"
    },
    button:{
      borderRadius:50,
      marginLeft:40,
      marginRight:25,
      height:45,
      fontFamily:"pacifico",
      fontSize:"0.9rem",
      textTransform:"none",
      color:"white",
      "&:hover":{
        backgroundColor:theme.palette.secondary.light
      }
    }
    ,logoContainer:{
      padding:0,
      "&:hover":{
        backgroundColor:"transparent"
      }
    },
    menu:{
      backgroundColor:theme.palette.common.blue,
      color:"white",
      borderRadius:0
    },
    menuItem:{
      ...theme.typography.tab,
      opacity:0.8,
      color:"white",
      "&:hover":{
        opacity:1
      }
    },
    drawerIconContainer:{
      marginLeft:"auto",
      '&:hover':{
        backgroundColor:'transparent'
      }
    },drawerIcon:{
      height:"40px",
      width:'40px'
    },
    drawer:{
      backgroundColor:theme.palette.common.blue,
      width:140,
      [theme.breakpoints.up("sm")]:{
        width:200
      }
    },
    drawerItem:{
      ...theme.typography.tab,
      color:"white",
      opacity:"0.8"
    },
    drawerItemSelected:{
      opacity:"1"
    }
,    drawerItemEstimate:{
      backgroundColor:theme.palette.common.orange
    },
    appbar:{
      zIndex:theme.zIndex.modal+1,
      
    }
}))

const Header = ({value,setValue,selectedIndex,setSelectedIndex}) => {
    const classes=useStyles()
    const theme=useTheme()
    const matches=useMediaQuery(theme.breakpoints.down("md"))
    const iOS =typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer,setOpenDrawer]=useState(false)
    const [anchorEl,setAnchorEl]=useState(null)
    const [openMenu,setOpenMenu]=useState(false)
    

    const menuOptions= useMemo(()=>[{name:"Services",link:"/services"
  ,activeIndex:1,selectedIndex:0
  },{name:"Custom Software Development",link:"/customsoftware",activeIndex:1,selectedIndex:1},{
      name:"IOS / Android App Development",link:"/mobileapps",activeIndex:1,selectedIndex:2
    },{name:"Website Development",link:"/websites",activeIndex:1,selectedIndex:3}])
    const routes=[{
      name:"Home",
      link:"/",
      activeIndex:0
    },
    {
      name:"Services",
      link:"/services",
      activeIndex:1
    },
    {
      name:"The Revolution",
      link:"/revolution",
      activeIndex:2
    },
    {
      name:"About Us",
      link:"/about",
      activeIndex:3
    },
    {
      name:"Contact Us",
      link:"/contact",
      activeIndex:4
    },]

    useEffect(()=>{
      [...menuOptions,...routes].forEach(route=>{
        switch(window.location.pathname){
          case `${route.link}`:
            if(value!==route.activeIndex){
              setValue(route.activeIndex)
              if(route.selectedIndex && route.selectedIndex!== selectedIndex){
                setSelectedIndex(route.selectedIndex)
              }
            }
            break
            case "/estimate":
            if(value!==5){  
            setValue(5);}
            break
            default:break
        }
      })
    // 
    },[value,selectedIndex,menuOptions,routes])
const handleTabChange=(e,newValue)=>{
setValue(newValue)
}
const handleClick=(e)=>{
setAnchorEl(e.currentTarget)
setOpenMenu(true)
}
const handleClose=(e)=>{
setAnchorEl(null)
setOpenMenu(false)
}

const handleMenuItemClick=(e,i)=>{
  setAnchorEl(null)
  setOpenMenu(false)
  setSelectedIndex(i)
}
const tabs=(
  <>
          <Tabs indicatorColor="primary" value={value} onChange={handleTabChange} className={classes.tabContainer}>
          <Tab className={classes.tab} component={Link} to="/" label="Home"/>
          <Tab 
          aria-owns={anchorEl?"simple-menu":undefined}
          aria-haspopup={anchorEl?true:undefined}
          onMouseOver={(e)=>handleClick(e)}
          
          className={classes.tab} 
          component={Link} 
          to="/services" label="Services"/>
          <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"/>
          <Tab className={classes.tab} component={Link} to="/about" label="About Us"/>
          <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us"/>
        </Tabs>
        <Button component={Link} to="/estimate"
        onClick={()=>setValue(5)}
        className={classes.button} variant="contained" color="secondary">Free Estimate</Button>
        <Menu style={{zIndex:1302}} elevation={0} classes={{paper:classes.menu}}  MenuListProps={{onMouseLeave:handleClose}} id="simple-menu"
         anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
        {
          menuOptions.map((menuItem,i)=>(
          <MenuItem key={menuItem.name} selected={i===selectedIndex && value===1} component={Link} to={`${menuItem.link}`} classes={{root:classes.menuItem}} onClick={(e)=>{
            handleMenuItemClick(e,i);
            setValue(1);
            handleClose()
          }} > {menuItem.name} </MenuItem>
          ))
        }
        </Menu>
  </>
)
const drawer=(
  <>
  <SwipeableDrawer
  classes={{paper:classes.drawer}}  
  disableBackdropTransition={!iOS} disableDiscovery={iOS}  onOpen={()=>setOpenDrawer(true)} open={openDrawer} onClose={()=>setOpenDrawer(false)} >
   <div className={classes.toolbarMargin}/>
   <List disablePadding>
     <ListItem onClick={(e)=>{setOpenDrawer(false)
      setValue(0)
    }} divider button
    selected={value==0}
    component={Link} to="/">
       <ListItemText  className={value==0? [classes.drawerItem,classes.drawerItemSelected]:  classes.drawerItem} disableTypography>Home</ListItemText>
     </ListItem>
     <ListItem onClick={(e)=>{setOpenDrawer(false)
      setValue(1)
    }} 
    selected={value==1}
    divider button  component={Link} to="/services">
       <ListItemText className={value==1? [classes.drawerItem,classes.drawerItemSelected]:  classes.drawerItem} disableTypography>Services</ListItemText>
     </ListItem>
     <ListItem 
      selected={value==2}
     onClick={(e)=>{setOpenDrawer(false)
      setValue(2)
    }}  divider button  component={Link} to="/revolution">
       <ListItemText className={value==2? [classes.drawerItem,classes.drawerItemSelected]:  classes.drawerItem} disableTypography>Revolution</ListItemText>
     </ListItem>
     <ListItem
      selected={value==3}
     onClick={(e)=>{setOpenDrawer(false)
      setValue(3)
    }}  divider button  component={Link} to="/about">
       <ListItemText className={value==3? [classes.drawerItem,classes.drawerItemSelected]:  classes.drawerItem} disableTypography>About us</ListItemText>
     </ListItem>
     <ListItem  selected={value==4}
      onClick={(e)=>{setOpenDrawer(false)
      setValue(4)
    }}  divider button component={Link} to="/contact">
       <ListItemText className={value==4? [classes.drawerItem,classes.drawerItemSelected]:  classes.drawerItem} disableTypography>Contact us</ListItemText>
     </ListItem>
     <ListItem 
      selected={value==5}
     onClick={(e)=>{setOpenDrawer(false)
      setValue(5)
    }}  className={classes.drawerItemEstimate} divider button  component={Link} to="/estimate">
       <ListItemText className={value==5? [classes.drawerItem,classes.drawerItemSelected]:  classes.drawerItem} disableTypography>Free Estimate</ListItemText>
     </ListItem>
   </List>
  </SwipeableDrawer>
  <IconButton className={classes.drawerIconContainer} disableRipple onClick={()=>setOpenDrawer(!openDrawer)}>
    <MenuIcon className={classes.drawerIcon}/>
  </IconButton>
  </>
)
    return (
        <>
        <ElevationScroll>
       <AppBar color="primary" className={classes.appbar} >
         <Toolbar disableGutters>
          <Button disableRipple onClick={()=>setValue(0)} component={Link} to="/" className={classes.logoContainer}> 
        <img className={classes.logo} src={logo} alt="Company Logo"/>
        </Button>
         {
           matches?drawer:tabs
         }
        </Toolbar>
       </AppBar>
       </ElevationScroll>
       <div className={classes.toolbarMargin}/>
       </>
    )
}




export default Header
