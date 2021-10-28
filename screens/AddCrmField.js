import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FieldName from '../components/FieldName';
import AddCrmDropdown from '../components/AddCrmDropdown';
import FieldCheckBox from '../components/FieldCheckBox';

const data = [
    {name:'This field measures Key Performance Index',desc:'KPI Field is only applicable for metrices field', icon:'chart-bar'},
    {name:'This field should be autofilled for next interaction',desc:'Autofill happens when a customer is searched by mobile/name', icon:'angular'},
    {name:'This field should be available in the filters',desc:'Filtering can only be enabled for options field', icon: 'format-list-bulleted'},
    {name:'Mandatory Field',desc:'', icon: 'lock-alert'}
]

const dropValues = [
                    {label: 'Text', value: 'Text'},
                    {label: 'Number', value: 'Number'},
                    {label: 'Date', value: 'Date'},
                    {label: 'Options', value: 'Options'}
                   ]

const dropData = [
    {placeholder:'Field Type',values:{dropValues}}
]

const AddCrmField = () => {
    return (
        <View style={styles.container}>
            <FieldName/>
            <AddCrmDropdown parentToChild={dropData[0]}/>
            <FieldCheckBox style={styles.first} parentToChild={data[0]}/>
            <FieldCheckBox parentToChild={data[1]}/>
            <FieldCheckBox parentToChild={data[2]}/>
            <FieldCheckBox parentToChild={data[3]}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    first:{
        
    }
});

export default AddCrmField;
