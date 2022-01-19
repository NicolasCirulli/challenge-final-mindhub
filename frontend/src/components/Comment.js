import React from "react";

export default function Comment({ data }) {
  return (
    <>
      
        <div className="conteiner-comm-ind">
          <div>
          <div>
            <img src={data.imageUser} alt="game-img" className="img-comment" />
          </div>
        </div>
        <div>
          <p className="p-review1">{data.nameUser}:</p>
        </div>
        <div>
          <p className="p-data-comment">"{data.comment}"</p>
        </div>
        <div className="review">
          <p className="p-review2">*rating*</p>
        </div>
        </div>
      
    </>
  );
}
