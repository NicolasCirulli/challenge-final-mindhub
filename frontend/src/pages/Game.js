import "../styles/game.css";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router-dom";
import { getGameById } from "../helpers/querys";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../redux/actions/authActions";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Comments from "../components/Comments";
import Checkbox from "@mui/material/Checkbox";
import Swal from "sweetalert2";

export default function Game() {
    const dispatch = useDispatch();
    const [data, setData] = useState(null);
    const params = useParams();
    const user = useSelector((store) => store.userReducer.user);

    useEffect(() => {
        getGameById(params.id)
            .then((res) => {
                setData(res.response.res);
            })
            .catch((err) => console.log(err));
    }, []);
    let background;
    if (data) {
        background = {
            backgroundImage: "url(" + data.background_image + ")",
        };
    }
    const handleFavs = () => {
        user
            ? dispatch(authActions.wishList(data._id))
            : Swal.fire({
                toast: true,
                position: "top-end",
                icon: "warning",
                iconColor: "#af3181",
                showConfirmButton: false,
                timer: 3000,
                title: "You must log in to be able to like!",
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });
    };
    return (
        <>
            {data && (
                <>
                    <div className="gamebg" style={background}>
                        <div className="container">
                            <h1 className="gamePath">{`${data.genres[0].name} / ${data.name}`}</h1>
                            <div className="divgen">
                                <div className="cont-img-avatar">
                                    <img
                                        className="avatar"
                                        style={{
                                            backgroundImage: `url(${data.creator_img})`,
                                        }}
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
                                            onClick={handleFavs}
                                        >
                                            <Checkbox className="favorite-game"
                                                icon={
                                                    user ? (
                                                        !user.wishList.includes(
                                                            data._id
                                                        ) ? (
                                                            <FavoriteBorder />
                                                        ) : (
                                                            <Favorite className="favorite " />
                                                        )
                                                    ) : (
                                                        <FavoriteBorder />
                                                    )
                                                }
                                            />
                                        </IconButton>
                                    </div>
                                    <div className="dev">
                                        <h3>{data.developers[0].name}</h3>
                                    </div>

                                    <div className="release">
                                        <h4 className="date">
                                            Release Date: {data.released}
                                        </h4>
                                        <h4 className="date">
                                            Reviews: {data.rating}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container screen-div">
                            {data.screenshot.map((screenshot) => {
                                return (
                                    <div className="size">
                                        <div className="e-card-ht-screen">
                                            <div className="e-card-image-1-screen">
                                                {" "}
                                                <img
                                                    className="card-img-screen"
                                                    src={screenshot.url}
                                                    key={data.screenshot.id}
                                                />{" "}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
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
                            <Button className="btn-price" variant="contained">
                                <h5 className="btn-price-text">
                                    $ {data.price}{" "}
                                </h5>
                                <AddShoppingCartIcon />
                            </Button>
                        </div>
                    </div>
                    <div className="container descriptions">
                        <div className="text">
                            <h4 className="game-desc-title">
                                Game Descripton
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
                                {data.languages[0] && (
                                    <tbody>
                                        <tr>
                                            <td>English</td>{" "}
                                            <td>
                                                {data.languages[0].english ===
                                                true ? (
                                                    <DoneIcon className="icon-done" />
                                                ) : (
                                                    <CloseIcon className="icon-done" />
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>German</td>{" "}
                                            <td>
                                                {data.languages[1].german ===
                                                true ? (
                                                    <DoneIcon className="icon-done" />
                                                ) : (
                                                    <CloseIcon className="icon-done" />
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>French</td>{" "}
                                            <td>
                                                {data.languages[2].french ===
                                                true ? (
                                                    <DoneIcon className="icon-done" />
                                                ) : (
                                                    <CloseIcon className="icon-done" />
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Russian</td>{" "}
                                            <td>
                                                {data.languages[3].russian ===
                                                true ? (
                                                    <DoneIcon className="icon-done" />
                                                ) : (
                                                    <CloseIcon className="icon-done" />
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Spanish</td>{" "}
                                            <td>
                                                {data.languages[4].spanish ===
                                                true ? (
                                                    <DoneIcon className="icon-done" />
                                                ) : (
                                                    <CloseIcon className="icon-done" />
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                    <div className="container finalinfo">
                        <div>
                            <h4 className="review-text">Reviews</h4>
                            <div className="comments-cantainer">
                                <Comments className="comment-component" data={data.comments} game={data} />
                            </div>
                        </div>
                        <div className=" trailer">
                            <h4 className="game-desc-title">
                                Watch the Game Trailer
                            </h4>
                            <div className="e-card-ht-trailer">
                                <div className="e-card-image-1">
                                    <iframe
                                        className="card-trailer"
                                        src={`https://www.youtube.com/embed/${data.trailer.slice(
                                            17,
                                            -1
                                        )}`}
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}