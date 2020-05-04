import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import {Provider as TrackProvider} from "./src/context/TrackContext"
import { setNavigator } from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Resolve: ResolveAuthScreen,
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);
// use navigation ref here to link to access
// navigation object. This allows us to access
// navigation object in context files.
export default () => {
  return (
    <TrackProvider>
    <LocationProvider>
      <AuthProvider>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </LocationProvider>
    </TrackProvider>
  );
};
