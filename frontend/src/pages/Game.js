import "../styles/game.css"
import FavoriteIcon from "@mui/icons-material/Favorite";
import React,{ useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useParams } from "react-router-dom";
import {getGameById} from '../helpers/querys'
import { getThemeProps } from "@mui/system";
import Comments from "../components/Comments";

export default function Game () {


    const [like, setlike] = useState(false)
    const [data,setData] = useState(null)
    const params = useParams()

    useEffect(() => {
        getGameById(params.id)
            .then((res) =>{
                setData(res.response.res);
            })
            .catch((err) => console.log(err))
    },[])
    let background;
     if (data) {
         background ={
       backgroundImage: "url("+data.background_image+")"}}


    return (
        <>
           { data && <> <div className="gamebg" style={background} >
                <div className="container">
                    <h1 className="gamePath">{`${data.genres[0].name} / ${data.name}`}</h1>
                    <div className="divgen">
                        <div >
                            <img className="avatar" style={{ backgroundImage: `url(${data.creator_img})` }} />
                        </div>
                        <div className="nameandlike">
                            <div className="gameinfo ">
                                 <h2 className="gametitle">{data.name}</h2>
                                 <IconButton aria-label="add to favorites" className="fav" onClick={() => setlike(!like)}>
                                 {like? <FavoriteIcon className="favorite"/> : <FavoriteIcon className="favorite2"/>}
                                 </IconButton>
                        
                            </div> 
                            <div className="dev">
                                 <h3 >{data.developers[0].name}</h3> 
                            </div> 
                    
                            <div className="release">
                                <h4 className="date">RELEASE DATE: {data.released}</h4>
                                <h4 className="date">REVIEWS: {data.rating}</h4>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className="container screen-div">
                {
                    data.screenshot.map(screenshot=>{
                        return <div className="size">
                        <div className="e-card-ht-screen">
                            <div className="e-card-image-1-screen" > <img className="card-img-screen" src={screenshot.url} key={data.screenshot.id}/> </div>         
                        </div>
                    </div>
                    })
                }
                </div>
            </div>
            <div  className="container buttons-bottom">      
                <Stack direction="row" spacing={2}>
                    {
                        data.genres.map(genre => {
                           return <Button className="btn-cat" variant="contained" disabled>
                                    {genre.name}
                                   </Button>
                        })
                    }
                               
                </Stack> 
                <div className="div-btn-price">
                     <Button className="btn-price" variant="contained" disabled>
                        $ {data.price}
                     </Button>
                </div>
            </div>
            <div className="container descriptions">
                <div className="text">
                    <h4 className="game-desc-title">GAME DESCRIPTION</h4>
                    <p className="game-desc">
                    {data.description_raw}
                    </p> 
                </div>
                <div className="div-table">
                    <table>
                        <thead>
                        <tr>
                            <th rowSpan={2}>Language</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                            

                        {/*
                        <tr><td>Spanish</td> <td><CloseIcon className="icon-done"/></td></tr>
                        <tr><td>French</td> <td><CloseIcon className="icon-done"/></td></tr>
                        <tr><td>Russian</td> <td><DoneIcon className="icon-done"/></td></tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container finalinfo">
                <div>
                    <h4 className="review-text">REVIEWS</h4> 
                
                    <div className="review"> 
                        <p className="p-review1">*Nombre de usuario</p>
                        <p className="p-review2">*rating*</p> 
                    </div>   
                         < Comments data={data.comments}/>
                </div>
                <div className=" trailer">
                    <h4 className="game-desc-title">WATCH THE GAME TRAILER</h4>   
                    <div className="e-card-ht-trailer">
                         <div className="e-card-image-1" ><iframe className="card-trailer" src={`https://www.youtube.com/embed/${data.trailer.slice(17,-1)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>         
                    </div>   
                </div>
            </div> </>}
        </>
    )
}