import { loginFailure, loginStart, loginSuccess } from "./users";
import { publicRequest } from "../apirequests";
import { userRequest } from "../apirequests";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};