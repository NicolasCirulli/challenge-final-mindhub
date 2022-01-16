import React, { useState, useEffect, useRef } from "react";
import CardGames from "../components/CardGamesPrecio";
import logo from "../assets/logo.png";
import ListIcon from "@mui/icons-material/List";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import { getAllGames, searchGame, getGameByGenre } from "../helpers/querys";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const genders = [
    "All",
    "Action",
    "Adventure",
    "Massively Multiplayer",
    "RPG",
    "Shooter",
    "Indie",
    "Casual",
    "Sports",
    "Racing",
    "Puzzle",
    "Platformer",
    "Simulation",
    "Strategy",
];
export default function Store() {
    const [view, setview] = useState(false);
    const [active, setactive] = useState(false);
    const [filter, setfilter] = useState("all");
    const [allGames, setAllGames] = useState([]);
    const [gamesRender, setGamesRender] = useState([]);
    const [gender, setGender] = useState([]);
    const inputSearch = useRef();

    useEffect(() => {
        getAllGames()
            .then((res) => {
                setAllGames(res.response.res);
                setGamesRender(res.response.res);
            })
            .catch((err) => console.log(err));
    }, []);

    const search = async () => {
        if (inputSearch.current.value.length > 0) {
            searchGame(
                inputSearch.current.value.toLowerCase().replace(" ", "-")
            )
                .then((res) => setGamesRender(res.res))
                .catch((err) => console.log(err));
        } else {
            setGamesRender(allGames);
        }
    };

    function activate() {
        setactive(true);
        setview(true);
    }
    function deactivate() {
        setactive(false);
        setview(false);
    }

    return (
        <div>
            <div className="container logo-game">
                <h1 className="title-games">Game Library</h1>
                <img src={logo} className="logo-home" alt="logo" />
            </div>
            <div className="container cont-filter">
                <div className="cont-search-g">
                    <label className="title-label">Search</label>
                    <div className="cont-search-game">
                        <input
                            type="text"
                            className="search-game"
                            placeholder="Search a Game"
                            ref={inputSearch}
                            onChange={search}
                        />
                    </div>
                </div>
                <div className="cont-select-genders">
                    <label className="title-label">Genders</label>
                    <select
                        type="text"
                        className="select-genders"
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option disabled selected>
                            Genders
                        </option>
                        {genders.map((gender, index) => {
                            return (
                                <option
                                    value={gender}
                                    key={index}
                                    className="color-select"
                                >
                                    {gender}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="cont-range">
                    <label className="title-label">Range</label>
                    <div className="range">
                        <input
                            className="input-renge rigth"
                            type="number"
                            placeholder="Min"
                        />
                        <input
                            className="input-renge"
                            type="number"
                            placeholder="Max"
                        />
                    </div>
                </div>
                <FormControl component="fieldset">
                    <FormLabel component="legend" className="sort" >Sort by Price</FormLabel>
                    <RadioGroup
                        row
                        aria-label="gender"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel
                            value="Higher"
                            control={<Radio />}
                            className="option-radio"
                            label="Higher to Lower"
                        />
                        <FormControlLabel
                            value="Lower"
                            control={<Radio />}
                            className="option-radio"
                            label="Lower to Higher"
                        />
                    </RadioGroup>
                </FormControl>
                {/* <select
                    type="text"
                    className="select-genders"
                    placeholder="Genders"
                >
                    <option disabled selected>
                        Sort by price
                    </option>

                    <option className="color-select">Higher to Lower</option>
                    <option className="color-select">Lower to Higher</option>
                </select> */}
            </div>
            <div className="container cont-filter-games">
                <h6
                    onClick={() => setfilter("all")}
                    className={
                        filter === "all"
                            ? "filter-games-active"
                            : "filter-games"
                    }
                >
                    ALL
                </h6>
                <h6
                    onClick={() => setfilter("recommended")}
                    className={
                        filter === "recommended"
                            ? "filter-games-active"
                            : "filter-games"
                    }
                >
                    RECOMMENDED
                </h6>
                <h6
                    onClick={() => setfilter("offers")}
                    className={
                        filter === "offers"
                            ? "filter-games-active"
                            : "filter-games"
                    }
                >
                    OFFERS
                </h6>
                <h6
                    onClick={() => setfilter("favorites")}
                    className={
                        filter === "favorites"
                            ? "filter-games-active"
                            : "filter-games"
                    }
                >
                    FAVORITES
                </h6>
                <div className="views">
                    <ViewComfyIcon
                        onClick={() => deactivate()}
                        className={active ? "view-icon-w" : "view-icon-r"}
                    />
                    <ListIcon
                        onClick={() => activate()}
                        className={active ? "list-icon-r" : "list-icon-w"}
                    />
                </div>
            </div>
            <div className="container box-games">
                <div className={view ? "list-grid" : "all-games"}>
                    {gamesRender.map((game) => {
                        if (view) {
                            return (
                                <>
                                    <CardGames key={game._id} game={game} />
                                    <p className="description-list-game">
                                        {game.description_raw}
                                    </p>
                                </>
                            );
                        } else {
                            return <CardGames key={game._id} game={game} />;
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
