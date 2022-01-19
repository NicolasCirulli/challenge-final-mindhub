import  React,{useRef} from "react";
import Comment from './Comment'
import { BsFillArrowRightSquareFill,} from "react-icons/bs";


export default function Comments({data}) {

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
            <button className="btn-leave-comment"><BsFillArrowRightSquareFill /></button>
        </div> 
        </div>
      </>
    );
}