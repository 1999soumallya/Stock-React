import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    loginSequire: false,
    loginProfile: [
      {
        email: "admin@gmail.com",
        password: "123",
        isAdmin: true
      },
      {
        email: "user@gmail.com",
        password: "123",
        isAdmin: false
      }
    ],
    userProfiles: [
      {
        _id: "jsvsdjkvvsdfvv234324234eewrwe",
        firstname: "avishek",
        lastname: "halder",
        dob: "1999-12-16",
        pan_number: "EKAPD8307K",
        broker: "HWFIKFIWEARFIWEHFWEF",
        client_id: "ISUFWUIEF1231289SIDUFHIFHIWF",
        email_id: "avishek@yahoo.com",
        phone_no: "9062688987",
        password: "1236578",
      },
      {
        _id: "jsvsdjkvvsdfvv23432423qaedfee",
        firstname: "Soumallya",
        lastname: "Dey",
        dob: "1999-12-16",
        pan_number: "EKAPD8307K",
        broker: "HWFIKFIWEARFIWEHFWEF",
        client_id: "ISUFWUIEF1231289SIDUFHIFHIWF",
        email_id: "1999soumallya@gmail.com",
        phone_no: "6294085545",
        password: "Pupundey@123",
      }
    ],
    apis: [
      {
        api_id: "1236578",
        api_key: "as7f87sa8f7as8dd",
        api_secrect_key: "121215487",
      },
      {
        api_id: "000078",
        api_key: "awerwerew7as8dd",
        api_secrect_key: "4zd4sad45487",
      },
    ],
    apiPassword: [],
    singleApi: "",
    apiKey: "",
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addprofile: (state, action) => {
      state.userProfiles.push(action.payload);
    },
    deleteProfile: (state, action) => {
      state.userProfiles.pop(action.payload);
    },
    loginApi: async(state, action) => {
      let email = action.payload.loginemail
      let password = action.payload.loginpassword
      const { data } = await axios.post("/login", { email, password })
      localStorage.setItem("userInfo", data.body)
      // state.loginSequire = action.payload;
    },
    addApi: (state, action) => {
      state.apis.push(action.payload);
    },
    getSingleApi: (state, action) => {
      state.singleApi = action.payload;
    },
    deleteApi: (state, action) => {
      state.apis.pop(action.payload);
    },
    apiKey: (state, action) => {
      state.apiKey = action.payload
    },
    apiPassword: (state, action) => {
      state.apiPassword.push(action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  addprofile,
  deleteProfile,
  addApi,
  getSingleApi,
  deleteApi,
  loginApi,
  apiKey,
  apiPassword
} = counterSlice.actions;

export default counterSlice.reducer;
