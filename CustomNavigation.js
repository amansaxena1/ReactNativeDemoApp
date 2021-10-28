import React from 'react'
import {Button } from 'react-native';
import CrmFields from './screens/CrmFields'
import AddCrm from './screens/AddCrm'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddCrmField from './screens/AddCrmField';

const Stack = createNativeStackNavigator();


const CrmFieldsScreenNavigator = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen options={{ headerTitle: "Crm Fields" , headerTintColor: '#fff',  headerStyle:{ backgroundColor: '#d65454',},
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('AddCrm')}
                    title="Preview"
                    color="#e36d6d"
                  />
                ),
              }}
                name="CrmField" component={CrmFields}
            />
            <Stack.Screen
            options={{
                headerTitle: "CRM",
              }}
                name="AddCrm" component={AddCrm}
            />
            <Stack.Screen 
          options={{
              headerTitle: "Add Crm Field",
              headerStyle:{ backgroundColor: '#d65454'},
              headerTintColor: '#fff',
              headerRight: () => (
                <Button
                  title="Done"
                  color="#d65454"
                />
              ),
            }}
              name="AddCrmField" component={AddCrmField}
          />
        </Stack.Navigator>
    )
}
export {CrmFieldsScreenNavigator}
