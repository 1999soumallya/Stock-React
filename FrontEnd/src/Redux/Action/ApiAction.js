import axios from "axios";
import { ADD_API_FAILS, ADD_API_REQUEST, ADD_API_SUCCESS, API_KEY_FAILS, API_KEY_REQUEST, API_KEY_SUCCESS, GET_ALL_API_FAILS, GET_ALL_API_REQUEST, GET_ALL_API_SUCCESS, GET_API_FAILS, GET_API_REQUEST, GET_API_SUCCESS, GET_USER_API_FAILS, GET_USER_API_REQUEST, GET_USER_API_SUCCESS } from "../Constants/ApiConstants";

export const AddApiAction = (details, userId) => async (dispatch, getState) => {
    try {
        let clientApiId = details.api_id
        let key = details.api_key
        let secret = details.api_secrect_key
        dispatch({ type: ADD_API_REQUEST })
        const { userLogin: { userInfo }, } = getState();
        const config = { headers: { "Contnet-Type": "application/json", "Authorization": `Bearer ${userInfo.token}` } }
        const { data } = await axios.post("/admin/manage/client_api", { userId, clientApiId, key, secret }, config)
        dispatch({ type: ADD_API_SUCCESS, payload: data })
        dispatch(GetApiAction(userId))
    } catch (error) {
        dispatch({ type: ADD_API_FAILS, payload: error.response && error.response.data.message ? error.response.data.message : error.message, });
    }
}

export const GetApiAction = (userId) => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_API_REQUEST })
        const { userLogin: { userInfo }, } = getState();
        const config = { headers: { "Contnet-Type": "application/json", "Authorization": `Bearer ${userInfo.token}` } }
        const { data } = await axios.get(`/admin/manage/client_api/${userId}`, config)
        dispatch({ type: GET_API_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_API_FAILS, payload: error.response && error.response.data.message ? error.response.data.message : error.message, });
    }
}

export const GetAllApisAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_API_REQUEST })
        const config = { headers: { "Contnet-Type": "application/json" } }
        const { data } = await axios.get("/admin/manage/all_client_api", config)
        dispatch({ type: GET_ALL_API_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_ALL_API_FAILS, payload: error.response && error.response.data.message ? error.response.data.message : error.message, });
    }
}

export const GetUserApiAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_USER_API_REQUEST })
        const { userLogin: { userInfo }, } = getState();
        const config = { headers: { "Contnet-Type": "application/json", "Authorization": `Bearer ${userInfo.token}` } }
        const { data } = await axios.get(`/user/${userInfo.user.id}/client_api`, config)
        dispatch({ type: GET_USER_API_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_USER_API_FAILS, payload: error.response && error.response.data.message ? error.response.data.message : error.message, });
    }
}

export const CreateUserApiAction = (deta) => async (dispatch, getState) => {
    try {
        let api_id = deta.api_id
        let api_key = deta.api_key
        let api_secrect_key = deta.api_secrect_key
        dispatch({ type: ADD_API_REQUEST })
        const { userLogin: { userInfo }, } = getState();
        const config = { headers: { "Contnet-Type": "application/json", "Authorization": `Bearer ${userInfo.token}` } }
        const { data } = await axios.post(`/user/${userInfo.user.id}/client_api`, { api_id, api_key, api_secrect_key }, config)
        dispatch({ type: ADD_API_SUCCESS, payload: data })
        dispatch(GetUserApiAction())
    } catch (error) {
        dispatch({ type: ADD_API_FAILS, payload: error.response && error.response.data.message ? error.response.data.message : error.message, });
    }
}

export const ApiKeyAction = (data) => async (dispatch) => {
    try {
        dispatch({ type: API_KEY_REQUEST })
        dispatch({ type: API_KEY_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: API_KEY_FAILS, payload: error.response && error.response.data.message ? error.response.data.message : error.message, });
    }
}