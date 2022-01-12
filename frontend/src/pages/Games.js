import * as React from "react";
import CardGames from "../components/CardGames";
import logo from "../assets/logo.png";
import ListIcon from '@mui/icons-material/List';
import AppsIcon from '@mui/icons-material/Apps';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
const genders = [
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
                <h6 className="filter-games">ALL</h6>
                <h6 className="filter-games">RECOMMENDED</h6>
                <h6 className="filter-games">OFFERS</h6>
                <h6 className="filter-games">FAVORITES</h6>
                <div className="views">
                    <ViewComfyIcon className="view-icon"/>
                    <ListIcon className="list-icon"/>
                </div>
            </div>
            <div className="container all-games">
                <CardGames className="card-game" />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                <CardGames />
                
            </div>
        </div>
    );
}


