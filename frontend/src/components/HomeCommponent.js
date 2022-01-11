import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CardGames from "./CardGames";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function HomeCommponent() {
    return (
        <div className="container">
            <div className="cont-search">
                <input
                    type="text"
                    className="search"
                    placeholder="Search a Game"
                />
                <button className="btn-search">Search</button>
            </div>
            <div className="container Recommended">
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    className="title"
                >
                    Recommended
                </Typography>
                <DrawerHeader>
                    <Box sx={{ flexGrow: 1 }}>
                        <div className="box-recommended">
                            <CardGames />
                            <CardGames />
                            <CardGames />
                            <CardGames />
                            <CardGames />
                        </div>
                    </Box>
                </DrawerHeader>
            </div>
            <div className="container offerts">
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    className="title"
                >
                    Offers
                </Typography>
                <DrawerHeader>
                    <Box sx={{ flexGrow: 1 }}>
                        <div className="box-offerts">
                            <div className="box-card">
                                <CardGames />
                                <button className="btn-add-cart">
                                    Price <LocalGroceryStoreIcon className="btn-icon" />
                                </button>
                            </div>
                            <div className="box-card">
                                <CardGames />
                                <button className="btn-add-cart">
                                    Price <LocalGroceryStoreIcon className="btn-icon" />
                                </button>
                            </div>
                            <div className="box-card">
                                <CardGames />
                                <button className="btn-add-cart">
                                    Price <LocalGroceryStoreIcon className="btn-icon" />
                                </button>
                            </div>
                            <div className="box-card">
                                <CardGames />
                                <button className="btn-add-cart">
                                    Price <LocalGroceryStoreIcon className="btn-icon" />
                                </button>
                            </div>
                            <div className="box-card">
                                <CardGames />
                                <button className="btn-add-cart">
                                    Price <LocalGroceryStoreIcon className="btn-icon" />
                                </button>
                            </div>
                            <div className="box-card">
                                <CardGames />
                                <button className="btn-add-cart">
                                    Price <LocalGroceryStoreIcon className="btn-icon" />
                                </button>
                            </div>
                            <div className="box-card">
                                <CardGames />
                                <button className="btn-add-cart">
                                    Price <LocalGroceryStoreIcon className="btn-icon" />
                                </button>
                            </div>
                            <div className="box-card">
                                <CardGames />
                                <button className="btn-add-cart">
                                    Price <LocalGroceryStoreIcon className="btn-icon" />
                                </button>
                            </div>
                        </div>
                    </Box>
                </DrawerHeader>
            </div>
        </div>
    );
}
