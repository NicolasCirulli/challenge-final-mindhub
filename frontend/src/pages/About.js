import * as React from "react";
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import CardAbout from "../components/CardAbout";
import { useRef } from "react";
import valo from "../assets/valo.png";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
export default function About() {
    const myRef = useRef(null);
    const executeScroll = () => scrollToRef(myRef);
    return (
        <div className="container cont-aboutUs">
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
                                component="div"
                                className="subtitle"
                            >
                                We are the best place to play, talk about games,
                                and create games.
                            </Typography>
                        </div>
                    </div>
                    <img src={logo} className="logo-welcome" />
                </div>
                <div className="go-down">
                    <div className="cont-down">
                        <img className="photo-valo" src={valo} />
                        <div className="icondown">
                            <p
                                className="more-i color-hover"
                                onClick={executeScroll}
                            >
                                More information{" "}
                            </p>
                            <KeyboardArrowDownIcon className="icon-arrow color-hover" />
                        </div>
                    </div>
                </div>
            </div>
            <div ref={myRef} className="container access-game">
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
