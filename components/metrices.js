
import React, { Component } from 'react';
import { Dimensions,View, Text, StyleSheet,Image,Button } from 'react-native';

const Metrices = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.options}>Metrices</Text>
            <Text style={styles.heading}>Account size</Text>
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
        height: deviceHeight/14,
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
        padding:5,
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
});

export default Metrices;
