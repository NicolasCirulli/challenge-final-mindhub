import * as React from "react";
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link} from "react-router-dom"

export default function About() {
    return (
        <div className="container about-us">
            <div className="cont-about">
                <div className="container cont-welcome">
                    <div className="welcome">
                        <div className="text-welcome">
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
                                We are the best place to play, talk about games, and
                                create games.
                            </Typography>
                        </div>
                        {/* <button className="call-to-action">Visit our store</button> */}
                    </div>
                    <img src={logo} className="logo-welcome" />
                </div>
                <div className="go-down">
                    <p className="more-i">More information </p>
                    <KeyboardArrowDownIcon className="icon-arrow" />
                </div>
            </div>
            <div className="container access-game">
                <Typography variant="h4" component="div" className="welcome3">
                    Access Games Instantly
                </Typography>
                <Typography variant="h6" component="div" className="welcome4">
                    Large number of published games; from large companies to
                    independent studios and everything in between. Enjoy
                    exclusive offers, automatic updates and other great
                    benefits.
                </Typography>
                <Link className="call-to-action" to="/games">
                    <h5 className="visit-store">Visit our store</h5>
                    <ArrowForwardIosIcon className="arrow-icon" />
                </Link>
            </div>
        </div>
    );
}
