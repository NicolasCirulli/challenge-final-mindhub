import React from "react";

export default function Comment({ data }) {
  return (
    <>
      
        <div className="conteiner-comm-ind">
         
            <div className="org">
             <img src={data.imageUser} alt="game-img" className="img-comment" />
             <p className="p-review1">{data.nameUser}:</p>
            
        </div>
        <div className="org-2">
          <p className="p-data-comment">"{data.comment}"</p>
        </div>
        <div className="review">
          <p className="p-review2">*rating*</p>
        </div>
        </div>
      
    </>
  );
}
