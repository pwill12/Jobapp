import { addsaved } from "./SavedJobs";
import { publicRequest } from "../apirequests";
import { userRequest } from "../apirequests";

export const savedfav = async (dispatch, jobs) => {
  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  const userId = currentUser._id
  try {
    const res = await userRequest.post('favorite', jobs);
    // console.log(res.data)
    dispatch(addsaved(res.data));
  } catch (err) {
    console.log(err)
  }
};
