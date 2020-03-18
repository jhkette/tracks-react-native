import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from "expo-location";

// This is a hook that runs the tracking that is used
// in trackcreatescreen. It updates tracking, first asking permission,
// then watching position.

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  
  // this useeffect hook runs at start and any
  // time the shouldTrack value in the array changes.
  // should track has a boolean value
  // return a cleanup function to stop listening if useeffect
  //gets called a second time. This means it will
  // stop listening for users location before we call
  // function to listen to it again. 
  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
    };


    if (shouldTrack) {
      startWatching();
    } else {
      if(subscriber){
      subscriber.remove();
      }
      subscriber = null;
    }
    return () => {
      if(subscriber){
        subscriber.remove()
      }
    }
  }, [shouldTrack, callback]);
  return [err];
};
