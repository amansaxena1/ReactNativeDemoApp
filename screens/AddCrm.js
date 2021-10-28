
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,Dimensions } from 'react-native';
import MainAddCrm from '../components/mainAddCrm';
import CrmDropdown from '../components/CrmDropdown';
import AddCrmLocation from '../components/AddCrmLocation';
import AddCrmUpload from '../components/AddCrmUpload';

const AddCrm = () => {


    const dropData = [
        {placeholder:'Event',values:[]},
        {placeholder:'Source',values:[]},
        {placeholder:'Status',values:[]}
    ]

    return (
        <View style={styles.container}>
            <View style={styles.phoneNumber}>
                <Text style={{fontSize: 18,marginRight:5,color:'#616161'}}>+91</Text>
                <TextInput style={styles.input} placeholder={'Mobile Number'}></TextInput>
            </View>
            <View>
                <MainAddCrm/>
            </View>
            <View style={{marginTop:15}}>
                <CrmDropdown parentToChild={dropData[0]}/>
                <CrmDropdown parentToChild={dropData[1]}/>
                <CrmDropdown parentToChild={dropData[2]}/>
            </View>
            <View style={styles.twoInputs}>
                <TextInput style={styles.twoInputItem} placeholder={'Account Size(c)'}></TextInput>
                <TextInput style={styles.twoInputItem} placeholder={'Account Size(v)'}></TextInput>
            </View>
            <View>
                <AddCrmLocation/>
            </View>
            <AddCrmUpload/>
        </View>
    );
};
const ScreenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    container: {
        paddingTop:20,
        paddingLeft:10,
        paddingRight:10,
        flex: 1,
        backgroundColor: '#fff',
    },
    input:{
        width:ScreenWidth*0.9,
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 1,
        fontSize: 16,
    },
    twoInputs:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    twoInputItem:{
        width:ScreenWidth*0.46,
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 1,
        fontSize: 16,
    },
    phoneNumber:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center'
    },
});

export default AddCrm;
