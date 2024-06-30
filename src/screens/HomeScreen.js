import React from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Home Screen*/
function HomeScreen({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centerButton}>
          <TouchableOpacity onPress={() => { alert('YOU DID IT!'); }}>
            <Image style={styles.img} source={ require('../../imgs/WatchBox.png') } />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.containerTop} onPress={() => navigation.navigate('Picker')}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Pick A Watch</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerBottom} onPress={() => navigation.navigate('Adder')}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Add A Watch</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerTop: {
      height: '50%',
      backgroundColor: 'rgb(190, 116, 223)',
    },
    containerBottom: {
      height: '50%',
      backgroundColor: 'rgb(87, 116, 246)',
    },
    centerButton: {
      alignItems: 'center',
      top: '50%',
      left: '50%',
      position: 'absolute',
      transform: [{translateX: -75}, {translateY: -90}],
      zIndex: 1000,
      height:150,
      width:150,
    },
    img: {
      flex: 1,
      aspectRatio: 1,
      resizeMode: 'contain',
    },
    container: {
      height: '100%',
      position: 'relative',
      zIndex: -1,
    },
    headerText: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'white',
      fontFamily: 'Aileron',
      textAlign: 'center',
    },
    headerContainer: {
      alignItems: 'center',
      top: '50%',
      left: '50%',
      position: 'absolute',
      transform: [{translateX: -110}, {translateY: -30}],
    }
});

export default HomeScreen;