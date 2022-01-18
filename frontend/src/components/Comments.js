import  React,{useRef} from "react";
import Comment from './Comment'
import {
    BsFillArrowRightSquareFill,
} from "react-icons/bs";
export default function Comments({data}) {


    const inputComment = useRef()

    return (
      <>
       <div className="conteiner-comments" >
        <h1 className="title-comments">Comments</h1>
       
           
        {data.map( comment => <Comment data={comment}/>)}
       
            <input
                placeholder="Leave your comment here"
                type="text"
                id="comment"
                className="labelComments"
                ref={inputComment}
            />
        </div>
        <div className="leave-comment">
         <button className="btn-leave-comment"><BsFillArrowRightSquareFill /></button>
     </div>

      </>
    );
}