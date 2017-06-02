/**
 * Created by ash on 5/17/17.
 */
import React, { Component } from 'react';
import {Image} from 'react-native';
import {Container, Content, InputGroup,Button, View, Icon, Card, CardItem, Text, Body,Footer,FooterTab,Badge} from 'native-base';
import {Input,Spinner} from './common';
class LoginFrm extends Component{


  state = {email: '', password: '',loading: false, loggedIN:false, loginMessage:'',loginState:'',customerData:''};


  render(){
    return(
      <Container>

      </Container>
    );
  }
}


const styles = {
  ErrorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'red',
  },
  SuccessTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'green',
  },
  FormContainer:{
    marginTop:30,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.1,
    shadowRadius:2,
  },
  SignIn:{

    marginTop:10,
    flex:1,
    alignSelf:'stretch',
  },
  SignUp:{

    marginTop:40,
    flex:1,
    alignSelf:'stretch',
  },
  ContainerTop:{
    paddingTop:100,
    padding:60,
  },

  ContainerAfterLogin:{
    paddingTop:30,
    padding:40,
  },

}

export default LoginFrm;