import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
    SET_CURRENT_USER, REGISTER_USER,
    USERS_LOADING, GET_ERRORS, DISPLAY_ERRORS
} from "./types";
import config from '../../config';


// Login - get user token
export const loginUser = userData => dispatch => {
    axios.post(config.curriculaserver + "/curricula/login", userData)
        .then(res => {
            console.log(res.data)
            if (res.data.Status === 1) {
                const { token } = res.data;
                localStorage.setItem("jwtToken", token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            }
            else if (res.data.Status === 0) {
                dispatch({
                    type: DISPLAY_ERRORS,
                    payload: res.data,
                    
                })
            }
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        });

};
// Login - not used
export const loginUser1 = userData => async (dispatch) => {
    var link = "/curricula/login";
    //  if (userData.USER_ID === 'root' && userData.PASSWORD === "rootuser")
    //   link = "/curricula/admin/manageuser/rootcheck"
    var res = await axios.post(config.curriculaserver + link, userData)
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        });
    if (res.data.Status === 1) {
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
    }
    else if (res.data.Status === 0) {
        dispatch({
            type: DISPLAY_ERRORS,
            payload: res.data,
        })
    }
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// User loading
export const setUserLoading = () => {
    return {
        type: USERS_LOADING
    };
};

// Log user out
export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};



export const registerUser = userData => dispatch => {
    axios.post(config.ictlabserver + "/ict/register", userData)
        .then(res => {
            dispatch({
                type: REGISTER_USER,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
        );
};
