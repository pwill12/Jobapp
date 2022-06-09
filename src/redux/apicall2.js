import { updateSuccess, updateStart, updateFailure } from "./updateContact";
import { publicRequest } from "../apirequests";
import { userRequest } from "../apirequests";

export const update = async (dispatch, contact) => {
  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  const userid = currentUser._id
  dispatch(updateStart());
  try {
    const res = await userRequest.put(`/put/${userid}`, contact);
    console.log(res.data)
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateFailure());
  }
};
