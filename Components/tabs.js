import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Map from "./Map";
import StartScreen from "./StartScreen";
import GameCamera from "./GameCamera";
import GameAnswer from "./GameAnswer";
import MainScreen from "./MainScreen";
import POIinfo from "./POIinfo";
import locationList from "./locationList";
import POIRoute from "./POIRoute";
import SideScreen from "./SideScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {Drawer} from "react-native-paper";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="StartScreen">

                <Stack.Screen options={{headerShown: false}} name="Map">{() => (

                    <Tab.Navigator initialRouteName="Map"
                                   tabBarOptions={{
                                       showLabel: false,
                                       style: {
                                           position: 'absolute',
                                           bottom: 20,
                                           left: 20,
                                           right: 20,
                                           elevation: 0,
                                           backgroundColor: '#ffffff',
                                           borderRadius: 15,
                                           height: 60,

                                           ...styles.shadow,
                                       },
                                   }}>
                        <Tab.Screen
                            name="Map"
                            component={Map}
                            options={{
                                tabBarIcon: ({focused}) => (
                                    <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                                        <Image
                                            source={require('../assets/diamond-final.png')}

                                            resizeMode='contain'
                                            style={{
                                                width: 25,
                                                height: 25,
                                                // tintColor: focused ? '#1d191b' : '#748c94'
                                            }}
                                        />
                                        <Text style={{color: focused ? '#1d191b' : '#748c94', fontSize: 12}}>
                                            Home
                                        </Text>
                                    </View>
                                ),
                            }}
                        />
                        <Tab.Screen name="locationList"
                                    component={locationList}
                                    options={{
                                        tabBarVisible: false,
                                        tabBarIcon: ({focused}) => (
                                            <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                                                <Image
                                                    source={require('../assets/Locatie-overzicht.png')}
                                                    resizeMode='contain'
                                                    style={{
                                                        width: 30,
                                                        height: 30,
                                                        // tintColor: focused ? '#1d191b' : '#748c94'
                                                    }}
                                                />
                                                <Text style={{color: focused ? '#1d191b' : '#748c94', fontSize: 12}}>
                                                    Overzicht locaties
                                                </Text>
                                            </View>
                                        ),
                                    }}/>

                        <Tab.Screen name="Menu" component={SideScreen}
                                    options={{
                                        tabBarVisible: false,
                                        tabBarIcon: ({focused}) => (
                                            <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                                                <Image
                                                    source={require('../assets/menu.png')}
                                                    resizeMode='contain'
                                                    style={{
                                                        width: 25,
                                                        height: 25,
                                                        tintColor: focused ? '#1d191b' : '#748c94'
                                                    }}
                                                />
                                                <Text style={{color: focused ? '#1d191b' : '#748c94', fontSize: 12}}>
                                                    Menu
                                                </Text>
                                            </View>
                                        ),
                                    }}/>
                    </Tab.Navigator>
                )
                }

                </Stack.Screen>
                <Stack.Screen name="Home" component={MainScreen}/>
                <Stack.Screen name="POIinfo" component={POIinfo}/>
                <Stack.Screen options={{headerShown: false}} name="StartScreen" component={StartScreen}/>
                <Stack.Screen options={{ title: 'Game' }}name="GameCamera" component={GameCamera}/>
                <Stack.Screen name="GameAnswer" component={GameAnswer}/>
                <Stack.Screen name="Menu" component={SideScreen}/>
            </Stack.Navigator>

        </NavigationContainer>
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Map">
        //         <Stack.Screen options={{headerShown: false}} name="Map">{() => (
        //     <Tab.Navigator
        //         tabBarOptions={{
        //             showLabel: false,
        //             style: {
        //                 position: 'absolute',
        //                 bottom: 20,
        //                 left: 20,
        //                 right: 20,
        //                 elevation: 0,
        //                 backgroundColor: '#ffffff',
        //                 borderRadius: 15,
        //                 height: 60,
        //
        //                 ...styles.shadow,
        //             },
        //         }}>
        //         <Tab.Screen
        //             name="Map"
        //             component={Map}
        //             options={{
        //                 tabBarIcon: ({focused}) => (
        //                     <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
        //                         <Image
        //                             source={require('../assets/diamond-shape.png')}
        //
        //                             resizeMode='contain'
        //                             style={{
        //                                 width: 25,
        //                                 height: 25,
        //                                 tintColor: focused ? '#1d191b' : '#748c94'
        //                             }}
        //                         />
        //                         <Text style={{color: focused ? '#1d191b' : '#748c94', fontSize: 12}}>
        //                             Home
        //                         </Text>
        //                     </View>
        //                 ),
        //             }}
        //         />
        //         <Tab.Screen name="Info" component={locationList}
        //                     options={{
        //                         tabBarIcon: ({focused}) => (
        //                             <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
        //                                 <Image
        //                                     source={require('../assets/book.png')}
        //                                     resizeMode='contain'
        //                                     style={{
        //                                         width: 25,
        //                                         height: 25,
        //                                         tintColor: focused ? '#1d191b' : '#748c94'
        //                                     }}
        //                                 />
        //                                 <Text style={{color: focused ? '#1d191b' : '#748c94', fontSize: 12}}>
        //                                     Overzicht locaties
        //                                 </Text>
        //                             </View>
        //                         ),
        //                     }}/>
        //
        //         <Tab.Screen name="Menu" component={POIRoute}
        //                     options={{
        //                         tabBarIcon: ({focused}) => (
        //                             <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
        //                                 <Image
        //                                     source={require('../assets/menu.png')}
        //                                     resizeMode='contain'
        //                                     style={{
        //                                         width: 25,
        //                                         height: 25,
        //                                         tintColor: focused ? '#1d191b' : '#748c94'
        //                                     }}
        //                                 />
        //                                 <Text style={{color: focused ? '#1d191b' : '#748c94', fontSize: 12}}>
        //                                     Menu
        //                                 </Text>
        //                             </View>
        //                         ),
        //                     }}/>
        //
        //     </Tab.Navigator>)}
        //
        //         </Stack.Screen>
        //         <Stack.Screen name="Home" component={MainScreen}/>
        //         <Stack.Screen name="POIinfo" component={POIinfo}/>
        //         <Stack.Screen options={{headerShown: false}} name="StartScreen" component={StartScreen}/>
        //         <Stack.Screen name="GameCamera" component={GameCamera}/>
        //         <Stack.Screen name="GameAnswer" component={GameAnswer}/>
        //     </Stack.Navigator>
        // </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;
