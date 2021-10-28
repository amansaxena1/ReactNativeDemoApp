
import React, { Component,useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScreenWidth } from 'react-native-elements/dist/helpers';

const CrmDropdown = ({parentToChild}) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(parentToChild.values.dropValues);
    return (
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={parentToChild.placeholder}
                dropDownContainerStyle={{backgroundColor: "#fff", borderColor: '#616161',width: ScreenWidth*0.95, alignSelf: 'center'}}
                style={{ backgroundColor: "#fff", borderColor: '#b0b0b0', height: 35, width: ScreenWidth*0.95, alignSelf: 'center', marginBottom: 10}}
            />
    );
};


export default CrmDropdown;
