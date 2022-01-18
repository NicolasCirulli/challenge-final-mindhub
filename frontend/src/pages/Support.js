import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Support = ({ user }) => {
  const navigate = useNavigate();
  const handleContact = () => {
    axios.post("http://localhost:4000/api/conversations", {
      senderId: user.id,
      receiverId: "61df6de8ffe6ff94e92c60c6",
    });
    navigate("/chat", { replace: true });
  };
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
