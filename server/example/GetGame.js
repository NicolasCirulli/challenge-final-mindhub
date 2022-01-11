import React, { useEffect, useState } from "react";
import axios from "axios";

const GetGame = () => {
  const [gameInfo, setGameInfo] = useState([]);
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/game/61ddb443e1376dcc7d666db5")
      .then((res) => {
        setGameInfo(res.data.res.data);
        setPrice(res.data.res.price);
        console.log(res.data.res.data);
      });
  }, []);

  return (
    <div>
      {gameInfo.map((item) => (
        <div>
          <p>{item.name}</p>

          <p>{item.description_raw}</p>
          <p>{price}</p>
        </div>
      ))}
    </div>
  );
};

export default GetGame;
