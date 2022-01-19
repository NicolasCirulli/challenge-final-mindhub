import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CardGames from "../components/CardGames";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function Home() {

    const allGames = useSelector(store => store.gamesReducer.games)
    const [offer,setOffer] = useState([])
    const [recommended, setRecommended] = useState([])
    const [search,setSearch] = useState(null)

    useEffect(() => {
        allGames && setOffer(allGames.filter(games => games.offer))
        allGames && setRecommended(allGames.filter(games => games.rating > 4))
    },[])

    useEffect(() =>{
        setOffer(allGames.filter(games => games.offer))
        setRecommended(allGames.filter(games => games.rating > 4))
    },[allGames])
    

    const filterGames = (search) => search.length > 0 ? setSearch(allGames.filter((game) => game.name.toLowerCase().startsWith( search.toLowerCase().trim() ) ) ) : setSearch(null)

    return (
        <div className="container">
            <div className="container header">
                <div className="cont-search">
                    <input
                        type="text"
                        className="search"
                        placeholder="Search a Game"
                        onChange={e => filterGames(e.target.value)}
                    />
                    <button className="btn-search">Search</button>
                </div>
                <img src={logo} className="logo-home" alt="logo-home" />
            </div>
            {search && 
            
            <div className="container">
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    className="title"
                >
                    search
                </Typography>
                <DrawerHeader>
                    <Box sx={{ flexGrow: 1 }}>
                        {search && (
                            <div className="box-offers">
                                {search.map((game) => (
                                    <div className="box-card">
                                        <CardGames key={game._id} game={game} />
                                        <button className="btn-add-cart">
                                            $ {game.price}{" "}
                                            <LocalGroceryStoreIcon className="btn-icon" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Box>
                </DrawerHeader>
            </div>}

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
                            {recommended &&
                                recommended.map((game, index) => {
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
                                {offer.map((game) => (
                                    <div className="box-card">
                                        <CardGames key={game._id} game={game} />
                                        <button className="btn-add-cart">
                                            $ {game.price}{" "}
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
