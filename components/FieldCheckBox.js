
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import { CheckBox } from 'react-native-elements'
import GraphIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const FieldCheckBox = ({parentToChild}) => {
    return (
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <View style={{display:'flex', flexDirection: 'row'}}>
                    <GraphIcon name={parentToChild.icon} color={'red'} size={20} />
                    <Text style={{fontSize: 12, marginTop: 3, marginLeft: 5}}>{parentToChild.name}</Text>
                </View>
                <CheckBox style={styles.box}/>
            </View>
           <Text style={{fontSize: 11, marginLeft: 30, marginTop: -10, color: '#505050'}}>{parentToChild.desc}</Text>
        </View>
    );
};
const ScreenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    container:{
        width: ScreenWidth*0.95,
        display: 'flex',
    },
    checkboxContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        alignItems: 'center'
    },
    box:{
        // alignSelf: 'flex-end'
    }
});

export default FieldCheckBox;
