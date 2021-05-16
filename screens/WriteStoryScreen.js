import React from 'react';
import {Text,View,TextInput, Touchable, TouchableOpacity} from 'react-native';

export default class WriteStoryScreen extends React.Component{
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
     <TextInput style={{height:40,
     width:400,
     alignItems:'center',
     justifyContent:'center',
    marginLeft:600,
marginTop:10}}
     placeholder='Story Title' />
     </View>

     <View>
     <TextInput style={{height:40,
     width:400,
     alignItems:'center',
     justifyContent:'center',
    marginLeft:600,
marginTop:10}}
     placeholder='Author' />
     </View>

     <View>
     <TextInput style={{height:400,
     width:600,
     alignItems:'center',
     justifyContent:'center',
    marginLeft:400,
marginTop:10}}
     placeholder='Write Your Story' />
     </View>

     <View>
         <TouchableOpacity>
             <Text style={{
            backgroundColor:'#1bb1b7',
            width:100,
            height:30,
            marginLeft:700,
            fontSize:23,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:15}}>
                 Submit
             </Text>
         </TouchableOpacity>
     </View>
    </View>
        );
    }
}