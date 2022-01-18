import * as React from "react";
import fornite from "../assets/fornite.jpg";
import {
    BsFillArrowRightSquareFill,
} from "react-icons/bs";

export default function Comments() {

    return (
        <div className="conteiner-comments" >
            <h1 className="title-comments">Comments</h1>
            <div className="conteiner-comm-ind">
                <div>
                    <img
                        src={fornite}
                        alt="game-img"
                        className="img-comment"
                    />
                </div>
                <div>
                    <p>This is the first comment</p>
                </div>
            </div>
            <div className="leave-comment">
                <input
                    placeholder="Leave your comment here"
                    type="text"
                    id="comment"
                    className="labelComments"
                />
             <button className="btn-leave-comment"><BsFillArrowRightSquareFill /></button>
            </div>

        </div>
    );
}