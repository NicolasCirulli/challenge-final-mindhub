import * as React from "react";
import CardGames from "../components/CardGames";
import logo from "../assets/logo.png";
import ListIcon from '@mui/icons-material/List';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import { useState } from "react";

const genders = [
    "All Genders",
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
    const [view, setview] = useState(false)
    const [active, setactive] = useState(false)
    const [filter, setfilter] = useState("all")

    function activate(){
        setactive(true)
        setview(true)
    }
    function deactivate(){
        setactive(false)
        setview(false)
    }

    return (
        <div>
            <div className="container logo-game">
                <h1 className="title-games">Game Library</h1>
                <img src={logo} className="logo-home" />
            </div>
            <div className="container cont-filter">
                <div className="cont-search-game">
                    <input
                        type="text"
                        className="search-game"
                        placeholder="Search a Game"
                    />
                </div>
                <select type="text" className="select-genders" placeholder="Genders">
                    <option disabled selected>Genders</option>
                    {genders.map((gender, index) => {
                        return (
                            <option
                                value="gender"
                                key={index}
                                className="color-select"
                            >
                                {gender}
                            </option>
                        );
                    })}
                </select>
                <select type="text" className="select-genders" placeholder="Genders">
                    <option disabled selected>Sort by price</option>
                    
                    <option className="color-select">higher to lower</option>
                    <option className="color-select">lower to higher</option>
                </select>
                
                <button className="btn-search">Search</button>
            </div>
            <div className="container cont-filter-games">
                <h6 onClick={()=> setfilter("all")} className={filter === "all" ? "filter-games-active" : "filter-games"}>ALL</h6>
                <h6 onClick={()=> setfilter("recommended")} className={filter === "recommended" ?"filter-games-active":"filter-games"}>RECOMMENDED</h6>
                <h6 onClick={()=> setfilter("offers")} className={filter ==="offers" ?"filter-games-active":"filter-games"}>OFFERS</h6>
                <h6 onClick={()=> setfilter("favorites")} className={filter ==="favorites" ?"filter-games-active":"filter-games"}>FAVORITES</h6>
                <div className="views">
                    <ViewComfyIcon onClick={()=> deactivate()} className={active ? "view-icon-w" : "view-icon-r"}/>
                    <ListIcon onClick={()=> activate()} className={active ? "list-icon-r" : "list-icon-w"}/>
                </div>
            </div>
            <div className="container">
                <div className={view ? "list-grid" : "all-games"}>
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    
                </div>
            </div>
        </div>
    );
}


