import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Alert } from 'react-native';
import background from '../../assets/birds.gif'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class Menu extends React.Component {
      _onPress() {
      Alert.alert('on Press!');
     }
     static navigationOptions = {
       title: 'Menu',
         headerTitleStyle: {
           color: 'white'
         },
         headerStyle: {
           backgroundColor: 'rgba(135,206,250, 0.5)',
         }
       }
      render() {

        return (
          <View>

            <View style={styles.background}>
              <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
              </ImageBackground>
            < /View>

            <View style={styles.buttonContainer}>

              <View style={styles.button} >
                <Button color="#FFFFFF"
                  title="RESTART"
                  onPress={() => {
                    this.props.navigation.dispatch(StackActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({ routeName: 'Welcome' })
                      ],
                    }))
                  }}
                />
              </View>

              <View style={styles.button}>
                <Button onPress={this._onPress} title="LEADER BOARD" color="#FFFFFF" />
              </View>

            </View>

          </View>
        );
      }
    }

  const styles = StyleSheet.create({
    buttonContainer: {
      position: 'absolute',
      flexDirection: 'column',
      alignSelf: 'center',
      justifyContent: 'center',
      height: '100%'
    },
    button: {
      backgroundColor: 'rgba(255, 69, 0, 0.8)',
      marginBottom: 10,
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 10,
      shadowOpacity: 0.25
    }
  })
