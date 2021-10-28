
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable,Dimensions } from 'react-native';

const AddCrmUpload = () => {
    return (
        <View style={styles.container}>
            <View style={styles.upload}>
                <Text>Upload Documents</Text>
                <Text style={{color:'#b0b0b0',fontSize:10}}>Max size 25mb</Text>
            </View>
            <TextInput style={styles.input} placeholder='Remarks'></TextInput>
            <Pressable style={styles.press}><Text style={{color:'#fff',textAlign:'center',padding:5}}>Submit</Text></Pressable>
        </View>
    );
};
const ScreenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        width:ScreenWidth*0.95,
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 1,
        fontSize: 16,
        marginBottom:5,
    },
    press:{
        alignItems:'center',
        justifyContent:'center',
        width:ScreenWidth*0.95,
        height:ScreenWidth*0.1,
        backgroundColor:'#d65454',
        borderRadius:20,
    },
    upload:{
        marginTop:9,
        width:ScreenWidth*0.95,
        height:ScreenWidth*0.21,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:1,
        borderStyle: 'dashed',
        borderColor:'#b0b0b0',
        borderRadius:1
    }
});

export default AddCrmUpload;
