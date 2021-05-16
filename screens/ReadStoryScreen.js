import React from 'react';
import {Text,View,TextInput} from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
        <View>
        <Text style={{backgroundColor:'#1bb1b7',
        textAlign:'center',
        justifyContent:'center',
        height:40,
        fontSize:30,
        color:'white',
        fontWeight:'bold'}}>STORY HUB</Text>

        <View>
        <Text style={{fontSize:30}}>Read</Text>
        </View>

        </View>
        );
    }
}