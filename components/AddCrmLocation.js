
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
const ScreenWidth = Math.round(Dimensions.get('window').width);

const AddCrmLocation = () => {
    return (
        <View>
            <View style={styles.latlon}>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={{borderColor: '#b0b0b0', borderWidth: 1,backgroundColor:'#e3e1e1',padding:5}}>Lat</Text>
                    <Text style={{backgroundColor:'#ededed',width:ScreenWidth*0.25,textAlign:'center',alignSelf:'center',padding:5}}>17.480</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={{borderColor: '#b0b0b0', borderWidth: 1,backgroundColor:'#e3e1e1',padding:5}}>Lon</Text>
                    <Text style={{backgroundColor:'#ededed',width:ScreenWidth*0.25,textAlign:'center',alignSelf:'center',padding:5}}>78.454</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={{color:"#616060"}}> 111,Serabad, Telangana, India</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:7
    },
    latlon:{
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
});


export default AddCrmLocation;
