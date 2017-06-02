/**
 * Created by ash on 5/12/17.
 */


import React, {Component} from 'react';
import {View,Image} from 'react-native';
import {Container,Content,Button} from 'native-base';
import LoginForm from './components/LoginForm';
import {Spinner} from './components/common';


class Intellifuel extends Component{

  state = { loggedIN: false };

  renderContent(){
    console.log(this.state.loggedIN);
    switch(this.state.loggedIN)
    {
      case true:
        return(
          <Button>
            Logout
          </Button>
        );
      case false:
        return <LoginForm/>
      default:
      <Spinner size="Large"/>
    }




  }
  render() {
    return (
      <Container style={styles.ContainerBackground}>
        <View style={styles.ContentContainer}>

          {this.renderContent()}
        </View>

      </Container>
    );
  }
}

const styles = {
  ContainerBackground:{
    backgroundColor:'aliceblue',

  }
  ,
  ContentContainer:{
      flex:1,
      justifyContent:'center',
      flexDirection:'column',
    alignItems: 'stretch',
  }
}

export default Intellifuel;