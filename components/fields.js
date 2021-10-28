
import React, { Component } from 'react';
import { Dimensions,View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Fields = ({parentToChild}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.options}>Options</Text>
            <Text style={styles.heading}>{parentToChild}</Text>
            <Icon name='circledown' color={'orange'} size={28} style={styles.icon}/>
        </View>
    );
};


const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
    container: { 
        width: deviceWidth,
        backgroundColor: '#fff',
        borderRadius: 5,
        height: deviceHeight/15,
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 5,
        },
        elevation: 9,
        paddingLeft: 5,
        marginBottom: 45,
    },
    options:{
        color: '#707070',
        fontSize: 12,
    },
    heading:{
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: -2,
    },
    icon:{
        justifyContent:'center',
        alignSelf:'center',
        marginTop: 5,
    }
});

export default Fields;
