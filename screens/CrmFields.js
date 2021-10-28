
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fields from '../components/fields';
import Metrices from '../components/metrices';
import FixedFieldDropDown from '../components/FixedFieldDropDown';
import InboundDropDown from '../components/InboundDropdown';
import { FAB } from 'react-native-elements';

const CrmFields = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <InboundDropDown/>
            <FixedFieldDropDown/>
            <View style={styles.customField}>
                <Text style={styles.header}>Custom Fields</Text>
                <Fields parentToChild={'Event'}/>
                <Fields parentToChild={'Source'}/>
                <Fields parentToChild={'Status'}/>
                <Metrices/>
            </View>
            <FAB color='#d65454' icon={{ name: 'add', color: 'white' }} placement='right' onPress={() => navigation.navigate('AddCrmField')}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header:{
        color: '#909090',
        fontSize: 18,
        margin: 5
    },
    customField:{},
});
export default CrmFields;
