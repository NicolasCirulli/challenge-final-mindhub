import * as React from "react";
import CardGames from "../components/CardGames"

const muchosGames = [
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
    <CardGames />,
]

export default function Store() {
    return (
        <div>
            <div className="cont-search">
                <input
                    type="text"
                    className="search"
                    placeholder="Search a Game"
                />
                <button className="btn-search">Search</button>
            </div>
            <div className="container all-games">
                {muchosGames.map((cardGame)=>{
                    <div>{cardGame}</div>
                })}
            </div>
        </div>
    )
}