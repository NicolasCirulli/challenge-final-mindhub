import * as React from "react";
import Typography from "@mui/material/Typography";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import FontDownloadOutlinedIcon from "@mui/icons-material/FontDownloadOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";

export default function CardAbout() {
    return (
        <div>
            <div className="container cont-characteristics">
                <Typography variant="h3" component="div" className="welcome3">
                    Characteristics
                </Typography>

                <h5 className="welcome4 text-characteristics">
                    We are continuously working to bring new updates and
                    features such as:
                </h5>
            </div>
            <div className="cont-cont-card">
                <div className="cont-card-about">
                    <div className="card-about">
                        <div className="icon-card-about">
                            <ChatBubbleOutlineIcon />
                        </div>
                        <h5 className="title-about">Chat</h5>
                        <p className="text-about">
                            Communicate with the administrators so that they give
                            you all the information you need.
                        </p>
                    </div>
                    <div className="card-about">
                        <div className="icon-card-about">
                            <InfoOutlinedIcon />
                        </div>
                        <h5 className="title-about">Information</h5>
                        <p className="text-about">
                            Know everything you need about your favorite game. Find
                            more information in the reviews and comments.
                        </p>
                    </div>
                    <div className="card-about">
                        <div className="icon-card-about">
                            <PhoneAndroidOutlinedIcon />
                        </div>
                        <h5 className="title-about">
                            Available for mobile devices
                        </h5>
                        <p className="text-about">
                            Access Xtreme anywhere from your IOS or Android device.
                        </p>
                    </div>
                </div>
                <div className="cont-card-about">
                    <div className="card-about">
                        <div className="icon-card-about">
                            <FontDownloadOutlinedIcon />
                        </div>
                        <h5 className="title-about">Multilingual</h5>
                        <p className="text-about">
                            Creating a global community is important to us, which is
                            why our client supports multiple languages.
                        </p>
                    </div>
                    <div className="card-about">
                        <div className="icon-card-about">
                            <CreditCardOutlinedIcon />
                        </div>
                        <h5 className="title-about">Simplified purchases</h5>
                        <p className="text-about">
                            Our store supports several payment methods, giving you
                            the flexibility to pay how you want.
                        </p>
                    </div>
                    <div className="card-about">
                        <div className="icon-card-about">
                            <VideogameAssetOutlinedIcon />
                        </div>
                        <h5 className="title-about">Controller Compatibility</h5>
                        <p className="text-about">
                            Xtreme encourages developers to include controller
                            support in their games, including PlayStation, Xbox, and
                            Nintendo controllers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
