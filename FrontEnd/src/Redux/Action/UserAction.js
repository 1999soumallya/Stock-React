import axios from 'axios'
import { ALL_USER_DETAILS_FAILS, ALL_USER_DETAILS_REQUEST, ALL_USER_DETAILS_SUCCESS, USER_LOGIN_FAILS, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAILS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from '../Constants/UserConstants'


export const UserLoginAction = (details) => async (dispatch) => {
    try {
        let email = details.loginemail
        let password = details.loginpassword
        dispatch({ type: USER_LOGIN_REQUEST })
        const config = { headers: { "Contnet-Type": "application/json" } };
        const { data } = await axios.post("/auth/login", { email, password }, config);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILS, payload: error.response && error.response.data.message ? error.response.data.message : error.message, });
    }
}


export const UserRegsiterAction = (details, broker, brokerId) => async (dispatch) => {
    try {
        let email = details.email_id
        let password = details.password
        let confirm_password = details.password
        let firstName = details.firstname
        let lastName = details.lastname
        let phone = Number(details.phone_no)
        let dob = details.dob
        let panNumber = details.pan_number
        dispatch({ type: USER_REGISTER_REQUEST })
        const config = { headers: { "Contnet-Type": "application/json" } };
        if (broker === "") {
            const { data } = await axios.post("/auth/signup", { email, password, confirm_password, firstName, lastName, phone, dob, panNumber }, config);
            dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
            dispatch(AllUserAction())
        } else {
            const { data } = await axios.post("/auth/signup", { email, password, confirm_password, firstName, lastName, phone, dob, panNumber, broker, brokerId }, config);
            dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
            dispatch(AllUserAction())
        }
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAILS, payload: error.response && error.response.data.message ? error.response.data.message : error.message, });
    }
}

export const AllUserAction = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_USER_DETAILS_REQUEST })
        const config = { headers: { "Contnet-Type": "application/json" } };
        const { data } = await axios.get("/admin/manage/", config)
        dispatch({ type: ALL_USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ALL_USER_DETAILS_FAILS, payload: error.response && error.response.data.message ? error.response.data.message : error.message, });
    }
}

export const UserLogout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
}

