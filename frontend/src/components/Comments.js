import React, { useRef,useState } from "react";
import Comment from "./Comment";
import SendIcon from "@mui/icons-material/Send";
import {addComment,deleteComment} from '../helpers/querys'
export default function Comments({ data, game }) {
    const [comments,setComments] = useState(data)
    const inputComment = useRef();
    const sendComment = ()=>{
        const query = {comment : inputComment.current.value }
        addComment(game._id,query).then(res=>{
            setComments(res.response.comments)
            inputComment.current.value = "" 
        }).catch(err=>{console.log(err);})
    }
    
    return (
      <>
        <div  className="comments-contenedor">
            {comments.map( comment => <Comment data={comment} id={game._id} deleteComment={deleteComment}/>)}
        <div className="comment-input">
            <input
                placeholder="Leave your comment here"
                type="text"
                id="comment"
                className="labelComments"
                ref={inputComment} 
            /> 
            <span className="btn-leave-comment" onClick={sendComment}><SendIcon /></span>
        </div> 
        </div>
      </>
    );
}