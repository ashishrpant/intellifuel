/**
 * Created by ash on 5/17/17.
 */

import React,{Component} from 'react';
import {Image,View} from 'react-native';
import {Header, Title,Text,Container, Content, Card, Left,Icon,  CardItem,Button,Body,InputGroup} from 'native-base';
import {Col,Row,Grid} from 'react-native-easy-grid';


var ICONS = [
  "ios-clock",
  "ios-search",
  "ios-pizza"
];

const DriverDashBoard = () => {

   return (
      <View style={styles.containerAround}>
            <Grid>
              <Col>
                <Row style={styles.RowMargin}>
                  <Button dark style={styles.ButtonMargin}>
                    <Icon name='ios-clock' style={{color:'#ffffff', fontSize:80}}  />

                  </Button>
                </Row>
                <Row style={styles.RowMargin}>
                  <Button light style={styles.ButtonMargin}>
                    <Icon name='ios-ionitron' style={{color:'#384850', fontSize:80}}  />

                  </Button>
                </Row>
              </Col>

              <Col>
                <Row style={styles.RowMargin}>
                  <Button light style={styles.ButtonMargin}>
                    <Icon name='ios-eye' style={{color:'#384850', fontSize:80}}  />

                  </Button>
                </Row>
                <Row style={styles.RowMargin}>
                  <Button dark style={styles.ButtonMargin}>
                    <Icon name='ios-power' style={{color:'#ffffff', fontSize:80}}  />

                  </Button>
                </Row>
              </Col>

            </Grid>
        <View>
          <Image source={require('../../img/logo.png')}/>
        </View>









        </View>


    );
}

const styles = {
  containerAround:{
    margin:10
  },
  ButtonMargin:{
    height:150,flex:1,alignItems:'center',justifyContent: 'center',
  },
  RowMargin:{
    padding:10,
  }
}
export { DriverDashBoard };