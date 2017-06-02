/**
 * Created by ash on 5/17/17.
 */
import React, { Component } from 'react';
import {Image} from 'react-native';
import {Container, Content, InputGroup,Button, View, Icon, Card, CardItem, Text, Body,Footer,FooterTab,Badge} from 'native-base';
import {DriverDashBoard} from './driver';
import {Tabs} from './common';
const Dashboard = (props) => {

  const { customerData } = props;


  state = {
    email: '',
    password: '',
    loading: false,
    loggedIN: false,
    loginMessage: '',
    loginState: '',
    customerData: ''
  };

  return (
    <Container>
      <Content>

        
        <View style={styles.ContainerAfterLogin}>
          <Card style={styles.FormContainer}>
            <CardItem header>
              <Text>Welcome Back, { customerData.first_name }</Text>
            </CardItem>
            <View>
              <DriverDashBoard/>
            </View>
          </Card>
        </View>


      </Content>

      <Footer style={styles.FooterTabStyle} >
        <FooterTab>
          <Button>
            <Icon name="ios-list-box"/>
            <Text>Logs</Text>
          </Button>
          <Button>
            <Icon name="ios-options"/>
            <Text>Options</Text>
          </Button>
          <Button active badge vertical>
            <Badge primary><Text>51</Text></Badge>
            <Icon active name="ios-mail"/>
            <Text>Mails</Text>
          </Button>
          <Button>
            <Icon name="ios-power"/>
            <Text>Logout</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = {

  FormContainer:{
    marginTop:30,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.1,
    shadowRadius:2,
  },
  FooterTabStyle:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    position: 'absolute',
    left: 0, right: 0, bottom: 0
  },
  ContainerTop:{
    paddingTop:100,
    padding:60,
  },

  ContainerAfterLogin:{
    paddingTop:30,
    padding:40,
    flex:3
  },

}

export {Dashboard};