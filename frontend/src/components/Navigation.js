import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings"; 
import { useNavigate } from "react-router-dom";
import logo from "../assets/joystick.png";

const drawerWidth = 240;

const list = [
    { name: "Home", icon: <HomeIcon />, path: "/home" },
    { name: "Cart", icon: <LocalGroceryStoreIcon />, path: "/cart" },
    { name: "Games", icon: <MenuBookIcon />, path: "/games" },
    { name: "About us", icon: <SportsEsportsIcon />, path: "/about" },
];
const list2 = [
    { name: "Support", icon: <SupportAgentIcon />, path: "/contact" },
    { name: "Settings", icon: <SettingsIcon />, path: "/Settings" },
    { name: "Sign In", icon: <PersonIcon />, path: "/signIn" },
    { name: "Sign Up", icon: <PersonAddIcon />, path: "/signUp" },
];

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function Navigation() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Drawer variant="permanent" open={open}>
                    <IconButton onClick={() => setOpen(!open)}>
                        <img src={logo} className="icon-logo" />
                    </IconButton>
                    <Divider />
                    <div className="cont-icons">
                        <List className="text">
                            {list.map((text, index) => (
                                <ListItem
                                    button
                                    onClick={() => {
                                        navigate(text.path);
                                    }}
                                    key={index}
                                >
                                    <ListItemIcon className="icon">
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text.name} />
                                </ListItem>
                            ))}
                        </List>
                        <List className="text">
                            {list2.map((text, index) => (
                                <ListItem
                                    button
                                    onClick={() => {
                                        navigate(text.path);
                                    }}
                                    key={index}
                                >
                                    <ListItemIcon className="icon">
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text.name} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </Box>
        </div>
    );
}
