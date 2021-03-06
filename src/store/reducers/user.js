import * as types from "../action-types";
import { setToken,getToken } from "@/utils/auth";
const initUserInfo = {
  token: getToken() || null,
};
export default function user(state = initUserInfo, action) {
  switch (action.type) {
    case types.USER_SET_USER_TOKEN:
      //设置cookie
      action.token && setToken(action.token);
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
}
