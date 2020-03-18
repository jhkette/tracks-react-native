import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import Spacer from "../components/Spacer.js";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SigninScreen = ({ navigation }) => {
  const { signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign in to your account"
        errorMessage=""
        onSubmit={signin}
        submitButtonText="Sign in"
      />
      <NavLink
        text="Don't have an account. Sign up instead"
        routeName="Signup"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250
  }
});

SigninScreen.navigationOptions = () => {
  return {
    header: null
  };
};

export default SigninScreen;
