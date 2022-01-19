import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/support.css";

const Support = ({ user }) => {
  const navigate = useNavigate();
  const handleContact = () => {
    axios.post("http://localhost:4000/api/conversations", {
      senderId: user.id,
      receiverId: "61e5cf6695c2ea1c79630857",
    });
    navigate("/chat", { replace: true });
  };

  return (
    <div style={{ marginLeft: 100, color: "white" }} className="support">
      <div>
        <p>
          If you need assistance please contact with us
          <address>
            <a href="mailto:support@xtreme.com">support@xtreme.com</a>
          </address>
        </p>
        <p>or start a chat with a support staff member.</p>
        <button onClick={handleContact} className="talkButton">
          Let`s talk
        </button>
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
