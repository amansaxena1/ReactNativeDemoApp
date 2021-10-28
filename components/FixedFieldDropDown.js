
import React, { Component,useState  } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const FixedFieldDropDown = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Fixed Fields', value: 'Fixed Fields'}
    ]);

    return (
        <View>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Fixed Fields"
                style={{backgroundColor: '#ffffff', borderColor: '#fff'}}
                dropDownStyle={{backgroundColor: '#ffffff', borderColor: '#fff'}}
            />
        </View>
    );
};


export default FixedFieldDropDown;
