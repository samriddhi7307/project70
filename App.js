import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
  return (
    <View>
<Text style={{backgroundColor:'#1bb1b7',
textAlign:'center',
justifyContent:'center',
height:40,
fontSize:30,
color:'white',
fontWeight:'bold'}}>STORY HUB</Text>
      
      <AppContainer/>
    </View>
  );
}
}
const TabNavigator = createBottomTabNavigator({
  WriteStory:{screen:WriteStoryScreen},
  ReadStory:{screen:ReadStoryScreen}
}); 

dafaultNavigationOptions:({navigation}) => 
({
  tabBarIcon:() => {
    const routeName = navigation.state.routeName;
  
if(routeName ==="Transaction"){
 return (
   <Image
    src={('https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-sbzve&psig=AOvVaw2dx9eDmTSLGx3m64ncIuY2&ust=1616129983920000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJj-2cSHue8CFQAAAAAdAAAAABAJ')}
   style={{width:40,
  height:40}}
   /> 
 )
}
else if(routeName==="Search"){
return(
  <Image src={('https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.mtsac.edu%2Fasac%2Flac-reading%2F&psig=AOvVaw1PY0rSwwn-Wzjih4-QLvgW&ust=1616130041528000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCcqd6Hue8CFQAAAAAdAAAAABAP')}
   style={{width:40,
   height:40}}
   /> 
)
}
} 
})

const AppContainer = createAppContainer(TabNavigator)