import * as React from "react";
import MapView from "react-native-maps";
import MainScreen from "./Components/MainScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './Components/tabs';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    StatusBar, YellowBox,
} from "react-native";

import {LogBox} from 'react-native';
import CustomNavigation from "./Components/CustomNavigation";
import POIinfo from "./Components/POIinfo";
import Map from "./Components/Map";
import locationList from "./Components/locationList";
import StartScreen from "./Components/StartScreen";
import GameCamera from "./Components/GameCamera";
import GameAnswer from "./Components/GameAnswer";
import Geofencing from "./Components/Geofencing";
import {Drawer} from "react-native-paper";
import {regions} from "./Components/regions";

LogBox.ignoreLogs(['Require cycle:'])
// YellowBox.ignoreWarnings(['Require cycle:']);



export default function App() {

    React.useEffect(() => {
        //do something on load
        console.log("Hey, I've loaded up");

    });
    global.arrayList = regions;
    return (
      <Tabs/>




    );
}

const Stack = createStackNavigator()


// function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Home" component={HomeScreen}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: Constants.statusBarHeight,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#ecf0f1",
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "#34495e",
    },
});

