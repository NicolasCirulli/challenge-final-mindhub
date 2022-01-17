import "../styles/game.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import imagen from "../assets/gtav.jpg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router-dom";
import { getGameById } from "../helpers/querys";
import { getThemeProps } from "@mui/system";

export default function Game() {
    const [like, setlike] = useState(false);
    const [data, setData] = useState(null);
    const params = useParams();

    useEffect(() => {
        getGameById(params.id)
            .then((res) => {
                setData(res.response.res);
            })
            .catch((err) => console.log(err));
    }, []);

    let background;
    if (data) {
        background = { backgroundImage: "url(" + data.background_image + ")" };
    }

    return (
        <>
            {data && (
                <>
                    {" "}
                    <div className="gamebg" style={background}>
                        <div className="container">
                            <h1 className="gamePath">{`${data.genres[0].name} / ${data.name}`}</h1>
                            <div className="divgen">
                                <div>
                                    <img
                                        className="avatar"
                                        src={data.background_image}
                                    />
                                </div>
                                <div className="nameandlike">
                                    <div className="gameinfo ">
                                        <h2 className="gametitle">
                                            {data.name}
                                        </h2>
                                        <IconButton
                                            aria-label="add to favorites"
                                            className="fav"
                                            onClick={() => setlike(!like)}
                                        >
                                            {like ? (
                                                <FavoriteIcon className="favorite" />
                                            ) : (
                                                <FavoriteIcon className="favorite2" />
                                            )}
                                        </IconButton>
                                    </div>
                                    <div className="dev">
                                        <h3>{data.developers[0].name}</h3>
                                    </div>

                                    <div className="release">
                                        <h4 className="date">
                                            RELEASE DATE: {data.released}
                                        </h4>
                                        <h4 className="date">
                                            REVIEWS: {data.rating}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="container screen">
                    <div className="e-card-ht">
                        <div className="e-card-image-1" > <img className="cardimg" src="https://as01.epimg.net/meristation/imagenes/2020/05/14/noticias/1589454136_132592_1590065418_noticia_normal.jpg"/> </div>         
                    </div>
                    <div className="e-card-ht">
                        <div className="e-card-image-1" > <img className="cardimg" src="https://as01.epimg.net/meristation/imagenes/2020/05/14/noticias/1589454136_132592_1590065418_noticia_normal.jpg"/> </div>         
                    </div>
                    <div className="e-card-ht">
                        <div className="e-card-image-1" > <img className="cardimg" src="https://as01.epimg.net/meristation/imagenes/2020/05/14/noticias/1589454136_132592_1590065418_noticia_normal.jpg"/> </div>         
                    </div>
                </div> */}
                    </div>
                    <div className="container buttons-bottom">
                        <Stack direction="row" spacing={2}>
                            {data.genres.map((genre) => {
                                return (
                                    <Button
                                        className="btn-cat"
                                        variant="contained"
                                        disabled
                                    >
                                        {genre.name}
                                    </Button>
                                );
                            })}
                        </Stack>
                        <div className="div-btn-price">
                            <Button
                                className="btn-price"
                                variant="contained"
                                disabled
                            >
                                $ {data.price}
                            </Button>
                        </div>
                    </div>
                    <div className="container descriptions">
                        <div className="text">
                            <h4 className="game-desc-title">
                                GAME DESCRIPTION
                            </h4>
                            <p className="game-desc">{data.description_raw}</p>
                        </div>
                        <div className="div-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th rowSpan={2}>Language</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {" "}
                                        <td>English</td>{" "}
                                        <td>
                                            <DoneIcon className="icon-done" />
                                        </td>
                                    </tr>
                                    <tr>
                                        {" "}
                                        <td>German</td>{" "}
                                        <td>
                                            <DoneIcon className="icon-done" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Spanish</td>{" "}
                                        <td>
                                            <CloseIcon className="icon-done" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>French</td>{" "}
                                        <td>
                                            <CloseIcon className="icon-done" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Russian</td>{" "}
                                        <td>
                                            <DoneIcon className="icon-done" />
                                        </td>
                                    </tr>
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
                                <p className="p-review3">*"comment"*</p>
                            </div>
                        </div>
                        <div className=" trailer">
                            <h4 className="game-desc-title">
                                WATCH THE GAME TRAILER
                            </h4>
                            <div className="e-card-ht-trailer">
                                <div className="e-card-image-1">
                                    {" "}
                                    <img
                                        className="card-trailer"
                                        src="https://as01.epimg.net/meristation/imagenes/2020/05/14/noticias/1589454136_132592_1590065418_noticia_normal.jpg"
                                    />{" "}
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                </>
            )}
        </>
    );
}
