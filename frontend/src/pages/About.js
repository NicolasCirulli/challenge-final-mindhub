import * as React from "react";
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import CardAbout from "../components/CardAbout";

export default function About() {
    return (
        <div className="container">
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
                                We are the best place to play, talk about games,
                                and create games.
                            </Typography>
                        </div>
                        {/* <button className="call-to-action">Visit our store</button> */}
                    </div>
                    <img src={logo} className="logo-welcome" />
                </div>
                <div className="go-down">
                    <div className="cont-down">
                        <p className="more-i color-hover">More information </p>
                        <KeyboardArrowDownIcon className="icon-arrow color-hover" />
                    </div>
                </div>
            </div>
            <div className="container access-game">
                <Typography variant="h3" component="div" className="welcome3">
                    Access Games Instantly
                </Typography>
                <Typography variant="h5" component="div" className="welcome4">
                    Large number of published games; from large companies to
                    independent studios and everything in between. Enjoy
                    exclusive offers, automatic updates and other great
                    benefits.
                </Typography>
                <Link className="call-to-action" to="/games">
                    <h4 className="visit-store">Visit our store</h4>
                    <ArrowForwardIosIcon className="arrow-icon" />
                </Link>
            </div>
            <div>
                <CardAbout />
            </div>
        </div>
    );
}
