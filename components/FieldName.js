
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const FieldName = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Field Name"></TextInput>
            <Text style={styles.message}>You can change this in future</Text>
        </View>
    );
};

const styles = StyleSheet.create({
   input:{
        fontSize: 18,
        margin: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
   },
   message:{
       color: '#999999',
       fontSize: 10,
       marginStart: 7,
   }
});

export default FieldName;
