import React from "react";
import {Button, View, ScrollView, StyleSheet } from "react-native";

const App = () => {
  return (<>
  <View style={[styles.container, styles.playingSpace]}>

  </View>
  <Scrollview style={[styles.container, styles.controlSpace]}>
    <View style={[styles.buttonView]}>
      <Button title="1"/>
    </View>
    <View style={[styles.buttonView]}>
      <Button title="2"/>
    </View>
    <View style={[styles.buttonView]}>
      <Button title="3"/>
    </View>
    <View style={[styles.buttonView]}>
      <Button title="4"/>
    </View>
    <View style={[styles.buttonView]}>
      <Button title="5"/>
    </View>
    <View style={[styles.buttonView]}>
      <Button title="6"/>
    </View>
    <View style={[styles.buttonView]}>
     <Button title="7"/>
    </View>


  </Scrollview>
  </>);
}

const styles = StyleSheet.create({
  container: {
    height:'50%'
  },
  playingSpace: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderwidth: 3

  },
  controlSpace:{
    backgroundColor: '#5A5A5'
    flexDirection: 'row'
    flexWrap: 'wrap'
  },
  buttonView: {

    width:'50%',
    padding:10

  }
})
export default App;