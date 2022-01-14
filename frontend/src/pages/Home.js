import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CardGames from "../components/CardGames";
import logo from "../assets/logo.png";
import { getAllGames } from "../helpers/querys";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function Home() {
    const [allGames, setAllGames] = useState(false);

    useEffect(() => {
        getAllGames()
            .then((res) => {
                setAllGames(res.response.res);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container">
            <div className="container header">
                <div className="cont-search">
                    <input
                        type="text"
                        className="search"
                        placeholder="Search a Game"
                    />
                    <button className="btn-search">Search</button>
                </div>
                <img src={logo} className="logo-home" alt="logo-home" />
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
                            {allGames &&
                                allGames.map((game, index) => {
                                    if (index < 5) {
                                        return (
                                            <CardGames
                                                key={game._id}
                                                game={game}
                                            />
                                        );
                                    }
                                })}
                        </div>
                    </Box>
                </DrawerHeader>
            </div>
            <div className="container offers">
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
                        {allGames && (
                            <div className="box-offers">
                                {allGames.map((game) => (
                                    <div className="box-card">
                                        <CardGames key={game._id} game={game} />
                                        <button className="btn-add-cart">
                                            Price{" "}
                                            <LocalGroceryStoreIcon className="btn-icon" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Box>
                </DrawerHeader>
            </div>
        </div>
    );
}
