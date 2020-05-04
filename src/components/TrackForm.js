import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
  // destructure state object to get values for buttons etc
  const {
    state: { name, recording, locations},
    startRecording,
    stopRecording,
    changeName,

  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack()
    
  return (
    <>
      <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="Enter name" />
      </Spacer>
      {recording ?<Button title="Stop recording" onPress={stopRecording} /> :
      <Spacer>
      <Button title="Start recording" onPress={startRecording} /> 
      </Spacer>
      }
     
      {
        !recording && locations.length ? (
          <Spacer>
          <Button title="Save Recording"  onPress={saveTrack}/>
          </Spacer>
        ) : null
      }
      
    </>
  );
};

export default TrackForm;
