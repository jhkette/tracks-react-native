import React, {useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer.js'
import {Context} from '../context/AuthContext';



const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(Context);
     const [email, setEmail] = useState();
     const [password, setPassword] = useState();
     console.log(state)
    return(
        <View style={styles.container}>
        <Spacer>
        <Text h3>Sign up for Tracker</Text>
        </Spacer>
        <Input label="email" value={email} 
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newEmail=> setEmail(newEmail)}/>
       {state.errorMessage ? <Text style = {styles.errorMessage}>{state.errorMessage}</Text> : null }
        <Spacer />
        <Input label="password" value={password}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={newPassword=> setPassword(newPassword)}/>
        <Spacer>
        <Button title="Sign up" onPress={()=> signup({email, password})}/>
        </Spacer>

        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text>Already have an account? Sign in instead.</Text>
        </TouchableOpacity>
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return{
        header: null
    }
}
const styles = StyleSheet.create({
    container:{
    
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }

})


export default SignupScreen;
