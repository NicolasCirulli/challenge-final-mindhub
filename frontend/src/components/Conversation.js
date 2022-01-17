import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/conversation.css";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  console.log(currentUser);

  useEffect(() => {
    const friendId = conversation.members.find(
      (member) => member !== currentUser.id
    );

    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/user/${friendId}`
        );
        setUser(res.data.res);
        //console.log(res.data.res);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={user?.image ? user.image : ""}
        alt=""
      />

      <span className="conversationName">{user?.userName}</span>
    </div>
  );
};

export default Conversation;
