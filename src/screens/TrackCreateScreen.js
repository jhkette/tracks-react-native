import React, {useCallback,  useContext} from 'react';
  
import '../_mockLocation';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

import TrackForm from '../components/TrackForm'


const TrackCreateScreen = ({isFocused}) => {
    // For more info on useCallback see
    // https://reactjs.org/docs/hooks-reference.html#usecallback
    // useCallback will return a memoized version of the callback 
    // that only changes if one of the dependencies has changed. 
    // in this case state.recording
    
    const {state, addLocation} = useContext(LocationContext);
    const callback = useCallback((location) => {
        addLocation(location, state.recording)}, [state.recording])
    // call useLocation with isfocused (shouldtrack) parameter 
    //  and callback which is the function above.
    const [err] = useLocation(isFocused, callback)

 

    return(
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h3> Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text>: null}
            <TrackForm />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackCreateScreen);