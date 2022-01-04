import React from "react";
import {
    Image,
    ImageBackground,
    Platform, Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {Feather} from "@expo/vector-icons";
import {locations} from "./POIdata";


const locationList = ({navigation: {navigate}}) => {

    return (

        <SafeAreaView style={{backgroundColor: 'white', flex: 1, paddingTop: 20}}>
            <ScrollView style={{backgroundColor: "#163933"}}>
                <Text style={{padding: 14, fontSize: 30, fontWeight: 'bold', color:'white'}}>
                    Overzicht locaties
                </Text>
                <Text style={{
                    paddingHorizontal: 14, fontSize: 20, fontWeight: 'normal', paddingBottom: 20,
                    opacity: 0.7, justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 20, color: 'white',
                }}>
                    Hieronder vind je bij elke locatie de bijbehorende vraag. Ook kunt je jouw gegeven antwoorden inzien
                    en wijzigen.
                </Text>
                {/*<ImageBackground source={require('../assets/Achtergronddiamant.png')}*/}
                {/*                 style={{justifyContent: "center"}}>*/}
                    {locations.map(locatie => (

                        <SafeAreaView key={Math.random().toString(36).substr(2, 9)} style={{backgroundColor: 'white'}}>

                            <View style={{paddingTop: 20,}}>
                                <View style={{borderBottomColor: 'black', borderBottomWidth: 2, paddingBottom: 20}}>
                                    <View style={styles.rowContainer}>
                                        <ImageBackground source={require('../assets/Beschikbaar-01.png')}
                                                         style={{width: 60, height: 60, alignItems: "center"}}
                                                         onPress={() => navigate('POIinfo', locatie)}>
                                            <View style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text onPress={() => navigate('POIinfo', locatie)} style={styles.imageText}>{locatie.markerID + 1}</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{
                                            position: 'absolute',
                                            top: 0, left: 0,
                                            right: 0,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Text
                                                onPress={() => navigate('POIinfo', locatie)} style={{fontWeight: 'bold', fontSize: 17,}}>{locatie.title}</Text>
                                            <Text
                                                onPress={() => navigate('POIinfo', locatie)}>{" " + locatie.adres}</Text>

                                            <Pressable style={styles.StartButton}
                                                       onPress={() => navigate('POIinfo', locatie)}>
                                                <Text style={styles.ButtonText}>Toon informatie</Text>
                                            </Pressable>
                                            {/*<Pressable style={styles.StartButton} onPress={() => console.log("link nog maken")}>*/}
                                            {/*    <Text style={styles.ButtonText}>Toon antwoord</Text>*/}
                                            {/*</Pressable>*/}
                                            {/*<Pressable style={styles.StartButton} onPress={() => console.log("link nog maken")}>*/}
                                            {/*    <Text style={styles.ButtonText}>Wijzig antwoord</Text>*/}
                                            {/*</Pressable>*/}
                                        </View>
                                        <View style={{position: 'absolute', right: 5,}}>
                                            <Image style={{width: 60, height: 60, borderRadius: 200 / 2}}
                                                   source={locatie.image}
                                                   onPress={() => navigate('POIinfo', locatie)}/>
                                        </View>
                                    </View>
                                </View>
                            </View>


                        </SafeAreaView>


                    ))}
                {/*</ImageBackground>*/}
            </ScrollView>

        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // zIndex: 2
    },
    image: {
        height: 380,
        justifyContent: 'flex-end',
    },
    Tagline: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 14,
    },
    Placename: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginBottom: 30
    },
    ButtonText: {
        fontSize: 20,
        textAlign: 'center',
    },
    StartButton: {

        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 30,
        // elevation: 3,
        backgroundColor: 'white',
        // paddingTop: 5,
        // zIndex: 2,
        // position: 'absolute',
        // bottom: 100,
        borderColor: "green",
        borderWidth: 3
    },
    rowContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
    },
    imageText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: -7,
    }
});


export default locationList
