import { publicRequest, userRequest } from "../apirequests";
import { applyFailure, applySuccessfull } from "./Applied";

export const apply = async(dispatch, user) => {
    try {
        const res = await userRequest.post("/apply", user);
        dispatch(applySuccessfull(res.data));
        console.log(res.data)
    } catch (err) {
        dispatch(applyFailure());
    }
};