// import React, {useState, useEffect} from 'react';
// import {Platform, Text, View, StyleSheet, Dimensions, Button, TouchableOpacity} from 'react-native';
// import * as Location from 'expo-location';
// import MapView, {Callout, Marker, Polyline} from "react-native-maps";
// import {locations} from "./POIdata"
// import {Image} from "react-native";
// import POIRoute from "./POIRoute";
// import POIinfo from "./POIinfo";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//
//
//
// function POIscreen({ navigation }) {
//
//     return (
//
//             locations.map(marker => (
//                 <View key={ Math.random().toString(36).substr(2, 9)}>
//
//
//                     <Marker
//                         coordinate={{
//                             latitude: marker.latitude,
//                             longitude: marker.longitude
//                         }}
//
//                         title={marker.title}
//                         description={marker.description}
//                         onPress={() => navigation.navigate('POIinfo')}
//                     >
//                         <Image style={{width: 30, height: 30, alignItems: "center"}}
//                                source={require('../assets/Diamand.png')}/>
//
//
//                     </Marker>
//
//                     <POIRoute/>
//                 </View>
//
//             ))
//         );
//
// }
//
//
//
//     //WERKENDE CODE
// //         return (
// //
// //             locations.map(marker => (
// //                 <View key={ Math.random().toString(36).substr(2, 9)}>
// //
// //
// //                     <Marker
// //                         onMarkerClick
// //                         coordinate={{
// //                             latitude: marker.latitude,
// //                             longitude: marker.longitude
// //                         }}
// //
// //                         title={marker.title}
// //                         description={marker.description}
// //
// //                     >
// //                         <Image style={{width: 30, height: 30, alignItems: "center"}}
// //                                source={require('../assets/Diamand.png')}/>
// //
// //
// //                     </Marker>
// //
// //                     <POIRoute/>
// //                 </View>
// //
// //             ))
// //         );
// //
// // }
//
//
//
// export default POIscreen
//
//
//
