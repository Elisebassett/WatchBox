import React from 'react';
import type {Node} from 'react';
import MovieAPI from '../comps/MovieAPI';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

function AdderScreen ({navigation}) {
    data = [
      {value: 'Horror'},
      {value: 'Sci-Fi'},
      {value: 'Drama'},
      {value: 'Docu-series'},
    ];
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add A Watch</Text>
        </View>
        <View style={styles.form}>
          <TextInput placeholder="Title" />
        </View>
        <MovieAPI />

        <Button
          onPress={() => navigation.navigate('Home')}
          title="Home"
        />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
      height: '20%',
      backgroundColor: 'rgb(190, 116, 223)',
      textColor:'white',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    headerText: {
      marginTop: 50,
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      fontFamily: 'Aileron',
      textAlign: 'center',
    },
    containerBottom: {
      height: '50%',
      backgroundColor: 'rgb(87, 116, 246)',
    },
    img: {
      flex: 1,
      aspectRatio: 1,
      resizeMode: 'contain',
    },
    container: {
      height: '100%',
      backgroundColor: 'rgb(87, 116, 246)',
    },
    form: {
      alignItems: 'center',
      top: '50%',
      left: '50%',
      position: 'absolute',
      transform: [{translateX: -110}, {translateY: -30}],
    },
    item: {
      height: 50,
      width: 50,
      backgroundColor: 'green'
    },
});

export default AdderScreen;