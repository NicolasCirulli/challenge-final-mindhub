import * as React from "react";
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.png"

export default function About() {
    return (
        <div className="container about-us">
            <div className="container cont-welcome">
                <div className="welcome">
                    <Typography
                        variant="h2"
                        component="div"
                        className="welcome2"
                    >
                        Welcome to Xtreme
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        className="subtitle"
                    >
                        We are the best place to play, talk about games, and create games.
                    </Typography>
                </div>
                <img src={logo} className="logo-welcome"/>
            </div>
            <div className="container offerts">
                
                
            </div>
        </div>
    );
}
