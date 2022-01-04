import {StatusBar} from 'expo-status-bar';
import React, {useRef, useState} from 'react';
import {Animated, Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import profile from '../assets/diamond.png';
import home from '../assets/home.png';
import zoeken from '../assets/search.png';
import tour from '../assets/map.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png';
import {Feather} from "@expo/vector-icons";


export default function SideScreen({ navigation }) {
    const [currentTab, setCurrentTab] = useState("Home");
    const [showMenu, setShowMenu] = useState(false);


    const offsetValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={goBack} style={{
                position: 'absolute', left: 20, top: 40,
                backgroundColor: '#18a85a', padding: 10, borderRadius: 40
            }}>
                <Feather name='x' size={24} color='#fff'/>
            </TouchableOpacity>
            <View style={{justifyContent: 'flex-start', padding: 15}}>
                <Image source={profile} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    marginTop: 8,
                    left: 55,
                }}></Image>

                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 20, left: 50
                }}>{global.inputName}</Text>

                <View style={{flexGrow: 1, marginTop: 70}}>

                    {TabButton(currentTab, setCurrentTab, "Home", home, navigation)}
                    {TabButton(currentTab, setCurrentTab, "Zoeken", zoeken, navigation)}
                    {TabButton(currentTab, setCurrentTab, "Tour", tour, navigation)}
                    {TabButton(currentTab, setCurrentTab, "Settings", settings, navigation)}

                </View>

                <View style={{justifyContent: 'flex-start', padding: 15}}>

                    <TouchableOpacity style={{flexDirection: 'row'}} onPress={goBack}>
                        <Feather name='log-out' size={25} color='#fff'/>
                        <Text style={{fontSize: 20, color: 'white',}}>Logout</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}
    const TabButton = (currentTab, setCurrentTab, title, image) => {
        return (

            <TouchableOpacity onPress={() => {
                if (title == "Home") {

                    {
                        console.log("Test2")
                    }
                }
                if (title == "Search") {
                    console.log("Test1")
                } else {
                    setCurrentTab(title)
                }
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: 'center',
                    paddingVertical: 8,
                    backgroundColor: currentTab == title ? 'white' : 'transparent',
                    paddingLeft: 13,
                    paddingRight: 35,
                    borderRadius: 8,
                    marginTop: 15
                }}>

                    <Image source={image} style={{
                        width: 25, height: 25, alignItems: 'center',
                        tintColor: currentTab == title ? "#153832" : "white"
                    }}></Image>

                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        paddingLeft: 15,
                        color: currentTab == title ? "#153832" : "white"
                    }}>{title}</Text>

                </View>
            </TouchableOpacity>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#153832',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});


