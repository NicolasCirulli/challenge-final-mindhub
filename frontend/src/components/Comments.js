import React, { useRef } from "react";
import Comment from "./Comment";
import SendIcon from "@mui/icons-material/Send";
export default function Comments({ data }) {
    const inputComment = useRef();

    return (
      <>
        <div  className="comments-contenedor">
            {data.map( comment => <Comment data={comment}/>)}
        <div className="comment-input">
            <input
                placeholder="Leave your comment here"
                type="text"
                id="comment"
                className="labelComments"
                /* ref={inputComment} */
            /> 
            <span className="btn-leave-comment"><SendIcon /></span>
        </div> 
        </div>
      </>
    );
}