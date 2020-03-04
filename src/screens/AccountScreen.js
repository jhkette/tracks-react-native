import React,{useContext} from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer.js";
import { SafeAreaView } from 'react-navigation';


const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
  <SafeAreaView forceInset={{top: 'always'}}>
  <Text style={{fontSize: 48}}> Account screen </Text>
  <Spacer>
  <Button title="Sign out" onPress={signout}/>
  </Spacer>
</SafeAreaView>
  )
};

const styles = StyleSheet.create({

});
export default AccountScreen;
