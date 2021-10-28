//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import Cards from '../components/cards';
const data = [
    {name:'Team',desc:'Configure Designations Processes and their team members',screen:'Team',icon:'steam'}, 
    {name:'Crm Fields',desc:'Configure your custom fields to be shown in the crm form',screen:'CrmFields', icon:'stack-exchange'},
    {name:'Email Templates',desc:'Configure your own custom email templates, for quickly mailing your customers',screen:'Menu', icon:'laptop'},
    {name:'Licenses',desc:'Check avaialable licenses with their empty dates',screen:'Licenses', icon:'key'},
    {name:'Company',desc:'Configure your company details',screen:'Menu', icon: 'building'},
    {name:'Whatsapp Templates',desc:'Configure your own custom whatsapp templates, for quickly messaging your customers',screen:'Menu', icon: 'whatsapp'}
];

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>runo technologies</Text>
            <Text style={styles.headingName}>Rajsekhar</Text>
            <View style={styles.box}>
                <View style={styles.cardContainer}>
                    <Cards parentToChild={data[0]} navigation={navigation}/>
                    <Cards parentToChild={data[1]} navigation={navigation}/>
                    <Cards parentToChild={data[2]} navigation={navigation}/>
                    <Cards parentToChild={data[3]} navigation={navigation}/>
                    <Cards parentToChild={data[4]} navigation={navigation}/>
                    <Cards parentToChild={data[5]} navigation={navigation}/>
                </View>
            </View>
        </View>
    );
};
const deviceHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
    cardContainer:{
        display:'flex',
        justifyContent: 'center',
        flexWrap:'wrap',
        height:deviceHeight*(3/4),
    },
    container: {
        flex: 1,
        backgroundColor: '#d9d9d9',
        alignContent:'center',
    },
    heading : {
        color:'#fff',
        fontSize: 18,
        backgroundColor: '#d65454',
        paddingStart: 20,
        fontWeight: "bold",
    },
    headingName : {
        color:'#fff',
        fontSize: 16,
        backgroundColor: '#d65454',
        paddingStart: 20,
        paddingBottom: 15,
    },
    box:{
        alignItems: 'center',
    },
    singleItem:{
        margin: 20,
    }
});

export default Home;
