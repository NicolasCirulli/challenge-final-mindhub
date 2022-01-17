import React, { useEffect, useState } from "react";
import axios from "axios";
import { format, register } from "timeago.js";
import "../styles/message.css";

const Message = ({ message, own }) => {
  const [user, setUser] = useState(null);
  console.log(message);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/user/${message.sender}`
        );
        setUser(res.data.res);
        console.log(res.data.res);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [message]);

  const timeago = (timestamp) => format(timestamp);

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg" src={user?.image} alt="" />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{timeago(message.createdAt)}</div>
    </div>
  );
};

export default Message;
