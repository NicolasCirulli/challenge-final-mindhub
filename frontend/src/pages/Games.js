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
import { useSelector } from "react-redux";

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

export default function Games() {
    // estados
    const [view, setview] = useState(false);
    const [active, setactive] = useState(false);
    const [filter, setfilter] = useState("all");
    const [allGames, setAllGames] = useState([]);
    const [gamesRender, setGamesRender] = useState([]);
    const [gender, setGender] = useState('');
    const [sortPrice, setSortPrice] = useState('Higher to Lower');
    const user = useSelector((state)=> state.userReducer.user)

    // ref 
    const inputSearch = useRef();
    const genderSelect =useRef();

    // component did mount
    useEffect(() => {
        getAllGames()
            .then((res) => {
                setAllGames(res.response.res);
                render(true,res.response.res);
            })
            .catch((err) => console.log(err));
    }, []);

    // Funciones
    const search = async () => {
        genderSelect.current.value = 'All'
        if (inputSearch.current.value.length > 0) {
            searchGame(inputSearch.current.value.toLowerCase().replace(" ", "-"))
                .then((res) => {
                    let bool = sortPrice === 'Higher to Lower' ? true : false
                    render(bool,res.res)
                })
                .catch((err) => console.log(err));
        } else {
            let bool = sortPrice === 'Higher to Lower' ? true : false
            render(bool,allGames)
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
    const handelSort = (e) =>{
        setSortPrice(e)
        let bool = e === 'Higher to Lower' ? true : false
        setGamesRender(sort(bool, gamesRender))    
    }
    const handleGender = (e)=>{
        inputSearch.current.value = ''
        setGender(e)
        
        if(e !== '' && e !== 'All'){

            getGameByGenre(e)
            .then((games) =>{
                let bool = sortPrice === 'Higher to Lower' ? true : false
                render(bool,games.data.res);
            })
            .catch((err) =>console.log(err))
        }else{
            setGamesRender(allGames)
        }
    }
    const render = (bool,array) => {
       const aux = sort(bool, array)
       setGamesRender(aux)
    }

    const sort = (bool,array) =>{
        let aux;
        bool ?  aux = array.sort((a,b) => b.price - a.price)
            :  aux = array.sort((a,b) => a.price - b.price)
        return aux
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
                    <label className="title-label">Price range</label>
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
                {user && 
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
                }
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
