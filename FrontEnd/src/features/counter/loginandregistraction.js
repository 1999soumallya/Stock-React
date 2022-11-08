import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const loginAndregistraction = createSlice({
    name: "loginAndregistraction",
    reducers: {
        loginApi: async (state, action) => {
            let email = action.payload.loginemail
            let password = action.payload.loginpassword
            const { data } = await axios.post("/login", { email, password })
            localStorage.setItem("stockoverview", JSON.stringify(data.body.data))
        },
        logout: async () => {
            localStorage.removeItem('stockoverview')
        }
    },
    initialState: {
        userInfo: localStorage.getItem("stockoverview") ? JSON.parse(localStorage.getItem("stockoverview")) : null
    },
});

// Action creators are generated for each case reducer function
export const {
    loginApi,
    logout
} = loginAndregistraction.actions;

export default loginAndregistraction.reducer;
