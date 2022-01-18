import React from "react";

export default function Comment({data}) {
  return (
    <>
      {" "}
      <div className="conteiner-comm-ind">
        <div>
          <img src={data.imageUser} alt="game-img" className="img-comment" />
        </div>
        <div>
          <p>{data.comment}</p>
        </div>
      </div>
    </>
  );
}
