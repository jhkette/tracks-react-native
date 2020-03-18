import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import {Context as LocationContext} from '../context/LocationContext';

const TrackForm = () => {
  // destructure state object to get values for buttons etc
  const {
    state: { name, recording, locations},
    startRecording,
    stopRecording,
    changeName,

  } = useContext(LocationContext);
    console.log(locations.length)
  return (
    <>
      <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="Enter name" />
      </Spacer>
      {recording ?<Button title="Stop recording" onPress={stopRecording} /> :
      <Button title="Start recording" onPress={startRecording} /> }
      
    </>
  );
};

export default TrackForm;
