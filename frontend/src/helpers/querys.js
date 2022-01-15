import axios from "axios";

export const getAllUsers = async () => {
    try {
        const res = await axios.get("http://localhost:4000/api/users");
        return { success: true, error: null, response: res.data };
    } catch (err) {
        return { success: false, error: err };
    }
};

export const updateUser = async (id, body) => {
    try {
        const res = await axios.put("http://localhost:4000/api/user/" + id, {
            ...body,
        });

        return { success: true, error: null, response: res.data };
    } catch (err) {
        return { success: false, error: err };
    }
};
export const deleteUser = async (id, body) => {
    try {
        const res = await axios.delete("http://localhost:4000/api/user/" + id);

        return { success: true, error: null, response: res.data };
    } catch (err) {
        return { success: false, error: err };
    }
};

export const getAllGames = async () => {
    try {
        const res = await axios.get("http://localhost:4000/api/allgames");

        return { success: true, error: null, response: res.data };
    } catch (err) {
        return { success: false, error: err };
    }
};

export const getGameById = async(gameId) =>{
    try {
        const res = await axios.get("http://localhost:4000/api/game/"+gameId);

        return { success: true, error: null, response: res.data };
    } catch (err) {
        return { success: false, error: err };
    }
}

export const updateGame = async (id, body) => {
    try {
        const res = await axios.put(`http://localhost:4000/api/game/${id}`, {
            ...body,
        });

        return { success: true, error: null, response: res.data };
    } catch (err) {
        return { success: false, error: err };
    }
};

export const deleteGame = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:4000/api/game/${id}`);

        return { success: true, error: null, response: res.data };
    } catch (err) {
        return { success: false, error: err };
    }
};

export const addGame = async (body) => {
    try {
        const res = await axios.post("http://localhost:4000/api/game", {
            ...body,
        });

        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const getGameByGenre = async (genre) => {
    try {
        const res = await axios.get(
            "http://localhost:4000/api/gameByGenre/" + genre
        );
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const searchGame = async (text) => {
    try {
        const res = await axios.get(
            "http://localhost:4000/api/gameByName/" + text
        );
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
