import axios from "axios";
import { addUser, removeUser } from "../app/auth/authSlice";

export async function updateAuthState(dispatch) {
  try {
    const res = await axios.get("/api/v1/auth/get-user");
    if (res?.data?.success) {
      // add user in store (login)
      dispatch(addUser(res?.data?.user));
    }
  } catch (error) {
    if ((error?.response, error?.response?.status == 401)) {
      //   remove user from store (logout)
      dispatch(removeUser());
    }
  }
}
