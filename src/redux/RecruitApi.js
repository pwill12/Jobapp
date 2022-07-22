import { publicRequest } from "../apirequests";
import { CollectingDetails, Details } from "./EmployerRedux";

export const recruitadmin = async(dispatch, contact) => {
    dispatch(CollectingDetails());
    try {
        const res = await publicRequest.post("/admindetails", contact);
        console.log(res.data);
        dispatch(Details(res.data));
    } catch (err) {
        // dispatch(updateFailure());
        console.log(err);
    }
};