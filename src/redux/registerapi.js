import { loginFailure, loginStart, loginSuccess } from "./users";
import { publicRequest } from "../apirequests";
import { updateSuccess } from "./updateContact";
import { useLocation, useNavigate } from "react-router-dom";


export const register = async(dispatch, user) => {
    // dispatch(loginStart());
    try {
        const res = await publicRequest.post("/register", user);
        dispatch(loginSuccess(res.data))
        dispatch(updateSuccess(res.data))

    } catch (err) {
        dispatch(loginFailure());
    }
};