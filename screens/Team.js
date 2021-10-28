//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Team = () => {
    return (
        <View style={styles.container}>
            <Text>Team</Text>
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

export default Team;
