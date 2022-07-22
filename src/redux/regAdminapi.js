import { loginFailure, loginStart, loginSuccess } from "./users";
import { publicRequest } from "../apirequests";
import { updateSuccess } from "./updateContact";
import { useNavigate } from "react-router-dom";
import { regfailure, regfetching, regsuccessfull } from "./regsta";

export const adminregister = async(dispatch, user) => {
    dispatch(regfetching());
    try {
        const res = await publicRequest.post("/adminregister", user);
        dispatch(regsuccessfull(res.data))
        console.log(res.data);
    } catch (err) {
        console.log(err)
        dispatch(regfailure())
    }
};