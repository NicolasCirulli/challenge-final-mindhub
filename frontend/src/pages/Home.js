import  React,{useEffect, useState} from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CardGames from "../components/CardGames";
import logo from "../assets/logo.png"
import {getAllGames} from '../helpers/querys'

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));




export default function Home() {

    const [allGames, setAllGames] = useState([])


    useEffect(() => {
        getAllGames()
         .then(res => {
             setAllGames(res.response.res)
             
         })
         .catch(err => console.log(err))
     }, [])

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
                <img src={logo} className="logo-home" alt='logo-home'/>
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
                            <CardGames  game={allGames[0]}/>
                            <CardGames game={allGames[0]}/>
                            <CardGames game={allGames[0]}/>
                            <CardGames game={allGames[0]}/>
                            <CardGames game={allGames[0]}/>
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
                        <div className="box-offers">
                            <div className="box-card">
                                <CardGames  game={allGames[0]}/>
                                <button className="btn-add-cart">
                                    Price <LocalGroceryStoreIcon className="btn-icon" />
                                </button>
                            </div>
                            <div className="box-card">
                                <CardGames game={allGames[0]}/>
                                <button className="btn-add-cart">
                                    Price <LocalGroceryStoreIcon className="btn-icon" />
                                </button>
                            </div>
                            <div className="box-card">
                                <CardGames game={allGames[0]}/>
                                <button className="btn-add-cart">
                                    Price <LocalGroceryStoreIcon className="btn-icon" />
                                </button>
                            </div>
                            <div className="box-card">
                                <CardGames game={allGames[0]}/>
                                <button className="btn-add-cart">
                                    Price <LocalGroceryStoreIcon className="btn-icon" />
                                </button>
                            </div>
                            <div className="box-card">
                                <CardGames game={allGames[0]}/>
                                <button className="btn-add-cart">
                                    Price <LocalGroceryStoreIcon className="btn-icon" />
                                </button>
                            </div>
                            <div className="box-card">
                                <CardGames game={allGames[0]}/>
                                <button className="btn-add-cart">
                                    Price <LocalGroceryStoreIcon className="btn-icon" />
                                </button>
                            </div>
                            <div className="box-card">
                                <CardGames game={allGames[0]}/>
                                <button className="btn-add-cart">
                                    Price <LocalGroceryStoreIcon className="btn-icon" />
                                </button>
                            </div>
                            <div className="box-card">
                                <CardGames game={allGames[0]}/>
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
