//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Licenses = () => {
    return (
        <View style={styles.container}>
            <Text>Licenses</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
    },
});

export default Licenses;
