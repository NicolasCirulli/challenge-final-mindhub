import React, { useState, useRef } from "react";
import "../styles/admin.css";
import {BsFillArrowRightSquareFill,} from "react-icons/bs";
import EditIcon from "@mui/icons-material/Edit";
import { updateUser, deleteUser } from "../helpers/querys";

function CardAdmin({ user }) {
    const [data, setData] = useState(user);
    const [placeholder, setPlaceholder] = useState("probando");
    const [render, setRender] = useState(false);
    const [field, setField] = useState(null);

    const input = useRef();

    const handleInput = (placeholder, query) => {
        setPlaceholder(placeholder);
        setRender(true);
        setField(query);
    };
    const update = () => {
        const body = {
            [field]: input.current.value,
        };

        updateUser(data._id, body)
            .then((res) => {
                setData(res.response.respuesta);
                reset();
            })
            .catch((err) => console.log(err));
    };

    const reset = () => {
        setRender(false);
        setField(null);
        setPlaceholder("");
    };

    return (
        <div className="card-user-admin">
            <div className="card-user-admin-img">
                <img
                    src={data.image}
                    alt="userImage"
                    className="user-admin-img"
                />
                <button
                    className="card-user-admin-icon-img"
                    onClick={() => handleInput("New image", "image")}
                >
                    <EditIcon />
                </button>
            </div>
            <div className="card-user-admin-fields">
                <p className="text-user-edit">Name: {data.firstName} </p>
                
            </div>
            <div className="card-user-admin-fields">
                <p className="text-user-edit">Username: {data.userName} </p>
                <button
                    className="card-user-admin-icon"
                    onClick={() => handleInput("New username", "userName")}
                >
                    <EditIcon />
                </button>
            </div>
            <div className="card-user-admin-fields">
                <p className="text-user-edit">{data.mail}</p>
                
            </div>
            <div className="card-user-admin-fields">
                <p className="text-user-edit btn-role">Role: {data.role} </p>
                <button
                    className="card-user-admin-icon"
                    onClick={() => handleInput("Role", "role")}
                >
                    <EditIcon />
                </button>
            </div>

            {render && (
                <div className="card-user-admin-fields">
                    <input type="text" placeholder={placeholder} ref={input} />
                    <button className="input-icon" onClick={update}>
                        <BsFillArrowRightSquareFill />
                    </button>
                    <button className="btn-close-adm" onClick={reset}>
                        X
                    </button>
                </div>
            )}
            <button
                className="card-user-admin-delete"
                onClick={() => deleteUser(user._id)}
            >
                Delete Account
            </button>
        </div>
    );
}

export default CardAdmin;
