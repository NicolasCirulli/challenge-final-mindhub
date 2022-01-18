import React, { useState, useEffect } from "react";
import { getAllUsers, getAllGames, getGameByGenre } from "../helpers/querys";
import "../styles/admin.css";
import CardAdmin from "../components/CardAdmin";
import CardAdminGame from "../components/CardAdminGame";
import {useSelector} from "react-redux"
function AdminPanel() {
  const [allUsers, setAllusers] = useState([]);
  const [render, setRender] = useState(true);
  const allGames = useSelector(store => store.gamesReducer.games)

  useEffect(() => {
    getAllUsers()
      .then((res) => setAllusers(res.response.res))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <div className="container-admin">
        <div className="main-admin">
          <h1 className="title-admin-1">Administrator</h1>

          <div className="d-flex">
            <button className="btnAdmin" onClick={() => setRender(true)}>
              <span className="btnAdmin_text">Users</span>
            </button>

            <button className="btnAdmin" onClick={() => setRender(false)}>
              <span className="btnAdmin_text">Games</span>
            </button>
          </div>
          {render ? (
            <p className="title-users-r">Amount of registered users: {allUsers.length}</p>
          ) : (
            <p className="title-users-r">Amount of available games: {allGames.length}</p>
          )}
          <div className="container-card-admin">
            {render
              ? allUsers.map((user) => <CardAdmin key={user._id} user={user} />)
              : allGames.map((game, index) => <CardAdminGame key={index} item={game} />)
                }
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
