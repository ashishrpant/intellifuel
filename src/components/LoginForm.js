/**
 * Created by ash on 5/10/17.
 */

import React, { Component } from 'react';
import {Image} from 'react-native';
import {Container, Content, InputGroup,Button, View, Icon, Card, CardItem, Text, Body,Footer,FooterTab,Badge} from 'native-base';

import axios from 'axios';
import {Input,Spinner} from './common';
import {Dashboard} from './Dashboard';
class LoginForm extends Component {

  state = {email: '', password: '',loading: false, loggedIN:false, loginMessage:'',loginState:'',customerData:''};

  SubmitThisForm = () => {

    const fd = new FormData();
    fd.append("user", this.state.email);
    fd.append("pass", this.state.password);
    fd.append("action", "LOGIN");

    var current_email     = this.state.email;
    var current_password  = this.state.password;
    var parsed_data       = '';

    console.log('Email '+current_email);
    console.log('Password '+current_password);
    var that = this;
    this.setState({
      loading:true
    });

    var post_url = 'https://elog.intellifuel.net/elog_api/mobile_api/login.php';

    // var post_url = 'https://elog.intellifuel.net/json.php';

    axios({
      method: 'POST',
      url: post_url,
      data: fd,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    }).then(function (response) {
      //console.log(response.data);

      if(response.data.success){
        that.OnLoginSuccess();
        that.setState({"customerData":  response.data});

      }else{
        that.OnLoginFail();
        //console.log(that.state.loggedIN);
      }
    })
    .catch(function (error) {
      console.log(error)
    });

  }

  OnLoginSuccess = () => {
    this.setState({
      email : '',
      password: '',
      error: '',
      loading:false,
      loggedIN:true,
      loginMessage:'Welcome',
      loginState : 'LoggedIn'
    });

  }
  OnLoginFail = () =>{
    this.setState({
      loading:false,
      loggedIN:false,
      loginState : '',
      loginMessage:'Please enter valid username and password'
    });
  }

  RenderButton = () =>{


    if(this.state.loading){
      return <Spinner size="small"/>
    }

    return(
      <Button block warning onPress={ () => {this.SubmitThisForm()}}><Text>Sign In</Text></Button>
    );
  }

  LoginLogOff = () => {
//console.log(this.state.loginState);
    if(this.state.loginState=='LoggedIn'){
      var customerData = this.state.customerData;

      console.log(customerData);
      return(
        <Container>
          <Dashboard customerData={customerData}/>
        </Container>

      );
    }else{
      return(

            <Container>
              <Content>
                <View style={styles.ContainerTop}>
                  <Image source={require('../img/logo.png')}/>
                  <Text style={styles.ErrorTextStyle}>
                    {this.state.loginMessage}
                  </Text>


                  <Card style={styles.FormContainer}>
                    <CardItem>
                      <Body>
                      <InputGroup borderType="regular">
                        <Icon name="ios-mail-outline" style={{color:'#384850'}}/>
                        <Input
                          placeHolder="example@example.com"
                          value = {this.state.email}
                          onChangeText={email=>this.setState( { email })}
                        />
                      </InputGroup>

                      <InputGroup borderType="regular">

                        <Icon name="lock" style={{color:'#384850'}}/>
                        <Input
                          secureTextEntry= {true}
                          placeHolder="password"
                          value = {this.state.password}
                          onChangeText={password=>this.setState( { password })}
                        />
                      </InputGroup>

                      </Body>
                    </CardItem>
                  </Card>
                  <View style={styles.SignIn}>
                    {this.RenderButton()}

                  </View>

                  <View style={styles.SignUp}>
                    <Button block info><Text>Sign Up</Text></Button>
                  </View>
                  <View style={styles.SignIn}>
                    <Button block primary><Text>Forgot Password</Text></Button>
                  </View>
                </View>
              </Content>
            </Container>

      );
    }
  }

  render () {
    return (
      <Container>

        {this.LoginLogOff()}
      </Container>
    );
  };
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

export default LoginForm