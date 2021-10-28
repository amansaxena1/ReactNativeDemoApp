import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddCrmScreen from './screens/AddCrm';
import HomeScreen from './screens/Home';
import LicensesScreen from './screens/Licenses';
import MenuScreen from './screens/Menu';
import TeamScreen from './screens/Team';
import CrmFieldsScreen from './screens/CrmFields';
import { CrmFieldsScreenNavigator } from './CustomNavigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Tab.Navigator>
       <Tab.Screen
          options={{
            headerStyle: {
            backgroundColor: '#d65454',
          },
            headerTintColor: '#fff',
            tabBarActiveTintColor: 'red',
            headerTitle: "runo",
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Switch to User"
                color="#d67e7e"
              />
            ),
            tabBarIcon: () => (
              <Icon name="home" color={'red'} size={20} />
            ),
          }} 
          name="Home"
          component = {HomeScreen}
        />
       <Tab.Screen options={{
         tabBarIcon: () => (
          <Icons name="account-group" color={'red'} size={20} />
        ),
        headerStyle: {
          backgroundColor: '#d65454',
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: 'red'
       }} name="Team" component = {TeamScreen}/>
       <Tab.Screen options={{
         tabBarIcon: () => (
          <Icons name="key" color={'red'} size={20} />
        ),
        headerStyle: {
          backgroundColor: '#d65454',
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: 'red'
       }}
       name="Licenses" component = {LicensesScreen}/>
       <Tab.Screen options={{ headerShown: false,tabBarIcon: () => (
          <Icons name="laptop" color={'red'} size={20} />
        ),
        headerStyle: {
          backgroundColor: '#d65454',
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: 'red'
         }} name="CrmFields" component = {CrmFieldsScreenNavigator}/>
       <Tab.Screen options={{
         tabBarIcon: () => (
          <Icons name="menu" color={'red'} size={20} />
        ),
        headerStyle: {
          backgroundColor: '#d65454',
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: 'red'
       }}
       name="Menu" component = {MenuScreen}/>
     </Tab.Navigator>
   </NavigationContainer>
  );
}

