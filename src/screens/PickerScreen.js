import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';

function PickerScreen({navigation}) {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Pick A Watch</Text>
        </View>
        <View style={styles.list}>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={renderItem}
            />
        </View>
        <ScrollView />
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Home"
        />
      </SafeAreaView>
    );
}

const Item = ({title}) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
);

const data = [
  {title: 'Hereditary'},
  {title: 'Midsommor'},
  {title: 'South Park'},
];

const styles = StyleSheet.create({
    header: {
      height: '20%',
      backgroundColor: 'rgb(87, 116, 246)',
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
      backgroundColor: 'rgb(190, 116, 223)',
    },
    img: {
      flex: 1,
      aspectRatio: 1,
      resizeMode: 'contain',
    },
    container: {
      height: '100%',
      backgroundColor: 'rgb(190, 116, 223)',
      flex: 1,
    },
    list: {
      alignItems: 'center',
    },
    item: {
      height: 50,
      width: 100,
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: 'green'
    },
    title: {},
});

export default PickerScreen;