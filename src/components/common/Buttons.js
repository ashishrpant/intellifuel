/**
 * Created by ash on 5/9/17.
 */

import React from 'react';
import {Text ,TouchableOpacity} from 'react-native';

SubmitThisForm = () => {

  console.log("Can you see this");

}

const Button = ({props,children}) => {
  const {ButtonStyle,TextStyle}= styles;

  return (
    <TouchableOpacity onPress={this.SubmitThisForm.bind(this)} style={ ButtonStyle }>
      <Text style={TextStyle}>
        { children }
      </Text>
    </TouchableOpacity>
  );

};

const styles ={
  TextStyle:{
    alignSelf:'center',
    color:'#007aff',
    fontSize:16,
    fontWeight:'600',
    paddingTop:10,
    paddingBottom:10,
  },
  ButtonStyle:{
    flex:1,
    alignSelf:'stretch',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#007aff',
    marginLeft:5,
    marginRight:5,
  }
}

export { Button };
