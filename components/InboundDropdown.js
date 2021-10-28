
import React, { Component,useState  } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const InboundDropDown = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Inbound and Outbound Process', value: 'Inbound and Outbound Process'}
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
                style={{backgroundColor: '#ffffff', borderColor: '#fff'}}
                dropDownStyle={{backgroundColor: '#ffffff', borderColor: '#fff'}}
                placeholder="Inbound and Outbound Process"
            />
        </View>
    );
};


export default InboundDropDown;
