
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,Dimensions } from 'react-native';

const mainAddCrm = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={'Name'}></TextInput>
            <TextInput style={styles.input} placeholder={'Email'}></TextInput>
            <TextInput style={styles.input} placeholder={'Company Name'}></TextInput>
            <TextInput style={styles.input} placeholder={'Address'}></TextInput>
            <View style={styles.twoInputs}>
                <TextInput style={styles.twoInputItem} placeholder={'City'}></TextInput>
                <TextInput style={styles.twoInputItem} placeholder={'State'}></TextInput>
            </View>
            <View style={styles.twoInputs}>
                <TextInput style={styles.twoInputItem} placeholder={'Country'}></TextInput>
                <TextInput style={styles.twoInputItem} placeholder={'Pincode'}></TextInput>
            </View>
            <View style={styles.twoInputs}>
                <TextInput style={styles.twoInputItem} placeholder={'Kdm name'}></TextInput>
                <TextInput style={styles.twoInputItem} placeholder={'Kdm phone'}></TextInput>
            </View>
        </View>
    );
};
const ScreenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
    },
    twoInputs:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    twoInputItem:{
        width:ScreenWidth*0.46,
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 1,
        fontSize: 16,
    },
    input:{
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 1,
        fontSize: 16,
        marginBottom:5,
    },
});


export default mainAddCrm;
