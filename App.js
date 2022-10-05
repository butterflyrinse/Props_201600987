import React from "react";
import {Button, View, ScrollView, StyleSheet } from "react-native";
import Constants from 'expo-constants';

const App = () => {
  return (<>
  <View style ={{paddingTop:Constants.statusBarHeight}}></View>
  <View style={[styles.container, styles.playingSpace]}>
    <Text>글을씁니다.</Text>
    <Text>글을 또 씁니다.</Text>
    <Image source={require('./assets/favicon.png')}/>
    <ImageBackground
    style={{width:200, height:200}}
    source={{
      url: 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true'
    }}
    >
      <Text>
      택시업계가 최근 계속된 택시기사 인력 이탈의 주된 원인 중 하나로 현행 월급제 전액관리제로 꼽은 것으로 나타났다.

      </Text>
    </ImageBackground>

  </View>
  <Scrollview style={[styles.container]}>
     <View style = {[controlSpace]}>
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