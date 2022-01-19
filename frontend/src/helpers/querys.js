import axios from "axios";

const url = 'http://localhost:4000/api/'
const token = localStorage.getItem('token')

export const getAllUsers = async () => {
    try {
        const res = await axios.get(url+"users");
        return { success: true, error: null, response: res.data };
    } catch (err) {
        return { success: false, error: err };
    }
};

export const updateUser = async (id, body) => {
    try {
        const res = await axios.put(url+"user/" + id, {
            ...body,
        },{
            headers:{
                'Authorization':'Bearer '+token 
            }
        }
        );

        return { success: true, error: null, response: res.data };
    } catch (err) {
        return { success: false, error: err };
    }
};
export const deleteUser = async (id, body) => {
    try {
        const res = await axios.delete(url+"user/" + id,
                
        {
            headers:{
                'Authorization':'Bearer '+token 
            }
        })

        return { success: true, error: null, response: res.data };
    } catch (err) {
        return { success: false, error: err };
    }
};

export const getAllGames = async () => {
    try {
        const res = await axios.get(url+"allgames",{
            headers:{
                'Authorization':'Bearer '+token 
            }
        });

        return { success: true, error: null, response: res.data };
    } catch (err) {
        return { success: false, error: err };
    }
};

export const getGameById = async(gameId) =>{
    try {
        const res = await axios.get(url+"game/"+gameId,{
            headers:{
                'Authorization':'Bearer '+token 
            }
        });

        return { success: true, error: null, response: res.data };
    } catch (err) {
        return { success: false, error: err };
    }
}

export const updateGame = async (id, body) => {
    try {
        const res = await axios.put(`${url}game/${id}`, {
            ...body,
        });

        return { success: true, error: null, response: res.data };
    } catch (err) {
        return { success: false, error: err };
    }
};

export const deleteGame = async (id) => {
    try {
        const res = await axios.delete(`${url}game/${id}`,
                
        {
            headers:{
                'Authorization':'Bearer '+token 
            }
        })

        return { success: true, error: null, response: res.data };
    } catch (err) {
        return { success: false, error: err };
    }
};

export const addGame = async (body) => {
    try {
        const res = await axios.post(url+"game", {
            ...body,
        },{
            headers:{
                'Authorization':'Bearer '+token 
            }
        });

        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const getGameByGenre = async (genre) => {
    try {
        const res = await axios.get(
            url+"gameByGenre/" + genre
        );
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const searchGame = async (text) => {
    try {
        const res = await axios.get(
            url+"gameByName/" + text
        );
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const wishList = async (id,idGame) => {
    try{
        const res = await axios.put(url+"wishList/"+id,{idGame},{
            headers:{
                'Authorization':'Bearer '+token 
            }
        });
        console.log(res);
    }catch (err) {console.log(err);}
}


