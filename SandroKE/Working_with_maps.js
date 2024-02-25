import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, map, ScrollView, RefreshControl } from 'react-native';


const App = () => {


    const {Items, setItem} = useState([
        {key: 1, item: 'Item 1'},
        {key: 2, item: 'Item 2'},
        {key: 3, item: 'Item 3'},
        {key: 4, item: 'Item 4'},
        {key: 5, item: 'Item 5'},
        {key: 6, item: 'Item 6'},
        {key: 7, item: 'Item 7'},
        {key: 8, item: 'Item 8'},
        {key: 9, item: 'Item 9'},
        {key: 10, item: 'Item 10'},
    ]);

    return(
    <view styles = {styles.body}>
        
        <ScrollView RefreshControl = {<RefreshControl/> } >
            {
                //working with map function in react-native
                Items.map((object = () => {
                    return(
                    <view styles = {styles.item} key  = {object.key}>
                        <text styles  = {styles.text}>{object.item}</text>
                    </view>
                    );
                }))
            }
        </ScrollView>  

     </view>
    

    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',

    },
    item:{
        margin: 10,
        backgroundColor: '#a4e1fa',
        justifyContent: 'center',
    },
    text: {
     color: '#000000',
     fontSize: '10px',
     fontStyle: 'italic',
    }
})

export default App;