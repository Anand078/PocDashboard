import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"
//Calendar

import TechCountReducer from "./capabilities/tech_count_reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  TechCountReducer,
})

export default rootReducer
