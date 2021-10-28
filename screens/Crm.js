
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Crm = () => {
    return (
        <View style={styles.container}>
            <Text>Crm</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Crm;