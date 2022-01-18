import React,{useState,useEffect, useRef} from "react";
import CardGames from "../components/CardGames";
import logo from "../assets/logo.png";
import ListIcon from '@mui/icons-material/List';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import {getAllGames,searchGame,getGameByGenre} from '../helpers/querys'

const genders = [
<<<<<<< HEAD
    "All Genders",
=======
    'All',
>>>>>>> 32d8460343d0829e659d8e197343412e5c767fe3
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
<<<<<<< HEAD
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
=======
    const [allGames, setAllGames] = useState([])
    const [gamesRender, setGamesRender] = useState([])
    const [gender,setGender] = useState([])
    const inputSearch = useRef()


    useEffect(() => {
       getAllGames()
        .then(res => {
            setAllGames(res.response.res)
            setGamesRender(res.response.res)
        })
        .catch(err => console.log(err))
    }, [])

   const search = async()=>{
       if(inputSearch.current.value.length > 0){
           searchGame(inputSearch.current.value.toLowerCase().replace(" ", "-"))
           .then(res => setGamesRender(res.res))
           .catch(err => console.log(err))
        }else{
            setGamesRender(allGames)
        }
   }


>>>>>>> 32d8460343d0829e659d8e197343412e5c767fe3

    return (
        <div>
            <div className="container logo-game">
                <h1 className="title-games">Game Library</h1>
                <img src={logo} className="logo-home" alt='logo' />
            </div>
            <div className="container cont-filter">
                <div className="cont-search-game">
                    <input
                        type="text"
                        className="search-game"
                        placeholder="Search a Game"
                        ref={inputSearch}
                        onChange={search}
                    />
                </div>
                <select type="text" className="select-genders" placeholder="Genders"  onChange={(e) => setGender(e.target.value) }>
                    <option disabled selected >Genders</option>
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
<<<<<<< HEAD
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
=======
                    {
                        gamesRender.map(game => <CardGames key={game._id} game={game}/>)
                    }
>>>>>>> 32d8460343d0829e659d8e197343412e5c767fe3
                    
                </div>
            </div>
        </div>
    );
}


