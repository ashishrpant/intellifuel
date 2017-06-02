/**
 * Created by ash on 5/10/17.
 */
import React from 'react';
import {Text, View, TextInput} from 'react-native';

const Input = ({ label,value,onChangeText,placeHolder,secureTextEntry }) => {

  const {InputStyle,LabelStyle,ContainerStyle } = styles;
  return (
    <View style = {ContainerStyle}>
      <TextInput
        secureTextEntry = {secureTextEntry}
        placeholder={placeHolder}
        autoCorrect={false}
        style = {InputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  InputStyle:{
    color:'#000',
    paddingRight:5,
    paddingLeft:5,
    fontSize:18,
    lineHeight:30,
    flex:2,
    height:40
  },
  LabelStyle:{
    fontSize:18,
    paddingLeft:20,
    flex:1,
  },
  ContainerStyle:{
    height:40,
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  }
}

export { Input };
