import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "signout":
      return { errorMessage: "", token: null };
    case "clearErrorMessage":
      return { ...state, errorMessage: "" };

    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    // post to tracker api
    const response = await trackerApi.post("/signup", { email, password });
    // set token if post to api is a success
    await AsyncStorage.setItem("token", response.data.token);
    // dispatch to signin with token
    dispatch({ type: "signin", payload: response.data.token });
    //
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up"
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in"
    });
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: "clear_error_message" });
};

const tryLocalSignin = dispatch => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      navigate("TrackList");
    } else {
      navigate("Signup");
    }
  };
};

const signout = dispatch => {
  return async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    navigate("loginFlow");
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
