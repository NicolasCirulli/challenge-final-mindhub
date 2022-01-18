import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Support = ({ user }) => {
  const navigate = useNavigate();
  const handleContact = () => {
    axios.post("http://localhost:4000/api/conversations", {
      senderId: user.id,
      receiverId: "61e5cf6695c2ea1c79630857",
    });
    navigate("/chat", { replace: true });
  };
  console.log(user);
  return (
    <div>
      <div>
        <p>Start a chat with a support staff member.</p>
        <button onClick={handleContact}>Let`s talk</button>
      </div>
    </div>
  );
};

const maspStatetoProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(maspStatetoProps)(Support);
