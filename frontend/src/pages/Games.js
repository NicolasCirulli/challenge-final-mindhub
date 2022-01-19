import React, { useState, useEffect, useRef } from "react";
import CardGames from "../components/CardGamesPrecio";
import logo from "../assets/logo.png";
import ListIcon from "@mui/icons-material/List";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { connect, useSelector } from "react-redux";

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
function Games(props) {
    // estados
    const [view, setview] = useState(false);
    const [active, setactive] = useState(false);
    const [filter, setfilter] = useState("all");

    const [gamesRender, setGamesRender] = useState([]);
    const [gender, setGender] = useState("All");
    const [sortPrice, setSortPrice] = useState(true);
    const [priceMin, setPriceMin] = useState(false);
    const [priceMax, setPriceMax] = useState(false);

    const allGames = useSelector((store) => store.gamesReducer.games);
    const user = useSelector((store) => store.userReducer.user);
    useEffect(() => {
        renderGames(allGames);
    }, [allGames]);

    useEffect(() => {
        renderGames()
    }, [gender, sortPrice, priceMin, priceMax]);

    // ref
    const inputSearch = useRef();
    const genderSelect = useRef();
    const min = useRef();
    const max = useRef();
    const sortRadio = useRef();

 

    // Funciones


    function activate() {
        setactive(true);
        setview(true);
    }
    function deactivate() {
        setactive(false);
        setview(false);
    }

    const handelSort = (bool) => {
        setSortPrice(bool);
    };
   


    // Filtro
    const renderGames = () => {
        const array = filterByGender(filterGames(inputSearch.current.value),gender)
        const aux = sort(sortPrice, array);
        setGamesRender(aux);
        setfilter("all")
    };
    const search = async () => renderGames(filterByGender(filterGames(inputSearch.current.value),gender))
    const filterGames = (search) => allGames.filter((game) => game.name.toLowerCase().startsWith( search.toLowerCase().trim() ) ) 
    const filterByGender = (array,selected) => {
        const aux = []
        array.forEach((game) => {
            game.genres.forEach((genre => {
                if(genre.name === selected || selected === 'All'){
                    !aux.includes(game) && aux.push(game)
                }
            }))
        })
        return aux
    }
    const sort = (bool, array) => {
        let aux;
        bool
            ? (aux = array.sort((a, b) => b.price - a.price))
            : (aux = array.sort((a, b) => a.price - b.price));
        return priceMinMax(aux);
    };
    const priceMinMax = (array) => {
        const priceMin = min.current.value || 0;
        const priceMax = max.current.value || 999999;
        const aux = array.filter(
            (game) => game.price >= priceMin && game.price <= priceMax
        );
        return aux;
    };

    function recommended(){
        setGamesRender(allGames.filter((game) => game.rating > 4));
        setfilter("recommended")
    }
    function offer(){
        setGamesRender(allGames.filter((game) => game.offer));
        setfilter("offers")
    }
    function all (){
        setGamesRender(allGames);
        setfilter("all")
    } 
    function favorites (){
        setGamesRender(allGames.filter((game) => user?.wishList?.indexOf(game._id) >= 0))
        setfilter("favorites")
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
                        ref={genderSelect}
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
                    <label className="title-label">Price range</label>
                    <div className="range">
                        <input
                            className="input-renge rigth"
                            type="number"
                            placeholder="Min"
                            ref={min}
                            onChange={() =>
                                setPriceMin(Number(min.current.value))
                            }
                        />
                        <input
                            className="input-renge"
                            type="number"
                            placeholder="Max"
                            ref={max}
                            onChange={() =>
                                setPriceMax(Number(max.current.value))
                            }
                        />
                    </div>
                </div>
                <FormControl component="fieldset">
                    <FormLabel component="legend" className="sort">
                        Sort by Price
                    </FormLabel>
                    <RadioGroup
                        row
                        aria-label="gender"
                        name="row-radio-buttons-group"
                        ref={sortRadio}
                    >
                        <FormControlLabel
                            value="Higher"
                            control={<Radio />}
                            className="option-radio"
                            label="Higher to Lower"
                            onClick={() => handelSort(true)}
                        />
                        <FormControlLabel
                            value="Lower"
                            control={<Radio />}
                            className="option-radio"
                            label="Lower to Higher"
                            onClick={() => handelSort(false)}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="container cont-filter-games">
                <h6
                    onClick={() => all()}
                    className={
                        filter === "all"
                            ? "filter-games-active"
                            : "filter-games"
                    }
                >
                    ALL
                </h6>
                <h6
                    onClick={() => recommended()}
                    className={
                        filter === "recommended"
                            ? "filter-games-active"
                            : "filter-games"
                    }
                >
                    RECOMMENDED
                </h6>
                <h6
                    onClick={() => offer()}
                    className={
                        filter === "offers"
                            ? "filter-games-active"
                            : "filter-games"
                    }
                >
                    OFFERS
                </h6>
                {props.user && (
                    <h6
                        onClick={() => favorites()}
                        className={
                            filter === "favorites"
                                ? "filter-games-active"
                                : "filter-games"
                        }
                    >
                        FAVORITES
                    </h6>
                )}
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
                                    <CardGames key={game._id} game={game}/>
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

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
};

export default connect(mapStateToProps, null)(Games);
