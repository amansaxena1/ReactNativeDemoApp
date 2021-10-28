
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const cards = ({parentToChild,navigation}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={()=>navigation.jumpTo(parentToChild.screen)}>
            <Icon name={parentToChild.icon} color={'red'} size={40} />
            <View style={styles.infoStyle}>
                <Text style={styles.titleStyle} >{parentToChild.name}</Text>
                <Text style={styles.categoryStyle}>{parentToChild.desc}</Text>
            </View>
        </TouchableOpacity>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
  container: {
    width: deviceWidth *0.4,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 5,
    height: deviceHeight/5,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 80,
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoryStyle: {
    fontSize: 10,
    textAlign: 'center',
    // fontWeight: '200',
  },
  infoStyle: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default cards;
