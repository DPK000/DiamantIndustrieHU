import React, {useState, useEffect} from 'react';
import {
    Platform,
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    Button,
    Pressable,
    SafeAreaView,
    ImageBackground, Alert
} from 'react-native';
import * as Location from 'expo-location';
import MapView, {Callout, Marker} from "react-native-maps";
import {locations} from "./POIdata";
import POIRoute from "./POIRoute";
import {createStackNavigator} from '@react-navigation/stack';
import WiggleBox from "react-native-wiggle-box";
import Tabs from "./tabs";
import * as TaskManager from "expo-task-manager";
import {LocationGeofencingEventType} from "expo-location";
import Geofencing from "./Geofencing";
import {regions} from "./regions";

export default function Map({navigation: {navigate}}) {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [marginBottom, setMarginBottom] = useState(1)
    const [paddingTop, setPaddingTop] = useState(1)
    const [routeShow, setRouteShow] = useState(false);
    const [buttonSelectRoute, setButtonSelectRoute] = useState(true);
    const [buttonStartRoute, setButtonStartRoute] = useState(false);
    const [markCount, setMarkCount] = useState(0);
    const [locationZoom, setLocationZoom] = useState([0.0922, 0.0421]);

    const _onMapReady = function () {
        setMarginBottom(0)
        setPaddingTop(0)
        Alert.alert(
            "Tutorial",
            "Voordat je kunt beginnen aan de Hilversum HistoryHunt.\n" +
            "Moet je natuurlijk weten hoe het spel begint.\n" +
            "De Hilversum History Hunt is een soort vossenjacht.\n" +
            "De bedoeling is dat je de route volgt opweg naar een diamant.\n" +
            "Eenmaal bij een diamant aangekomen, kun je kans maken op prijzen.\n" +
            "Dit spel maakt gebruik van GPS locatie en camera.\n" +
            "Zorg er dus voor dat je GPS locatie en camera aanstaan.\n" +
            "Druk op OK om te beginnen."
            // [
            //     { text: "OK"}
            // ],
            // { cancelable: false }
        );
    }


    const onSelectRoute = function () {
        setRouteShow(true)
        setButtonStartRoute(true)
        setButtonSelectRoute(false)
    }

    const onStartRoute = function () {
        setButtonStartRoute(false)
        setLocationZoom([0.0052, 0.0051])
    }

    const markCounter = function () {
        setMarkCount(markCount + 1)
        console.log(markCount)
        return markCount
    }

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            //Geofencing
            let bg = await Location.requestBackgroundPermissionsAsync();
            if (bg.status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            await Location.startGeofencingAsync("test", regions)

        })();

    }, []);

    let mapRegion = {
        latitude: 52.2210452,
        longitude: 5.1597742,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }


    let text = 'Waiting..';
    if (errorMsg) {
        console.log("location not found...");
    } else if (location) {
        text = JSON.stringify(location);
        mapRegion = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: locationZoom[0],
            longitudeDelta: locationZoom[1],
        };

    }


    return (

        <SafeAreaView style={styles.container}>
            {buttonSelectRoute ? (
                <Pressable style={styles.SelectRoutebutton} onPress={() => onSelectRoute()}>
                    <Text style={styles.text} onPress={() => onSelectRoute()}> Selecteer een route </Text>
                </Pressable>
            ) : null}
            {buttonStartRoute ? (
                <Pressable style={styles.StartRoutebutton} onPress={() => onStartRoute()}>
                    <Text onPress={() => onStartRoute()} style={styles.text}> Start de route! </Text>
                </Pressable>
            ) : null}

            <Geofencing/>
            <MapView
                style={{
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height,
                    marginBottom: marginBottom
                }}
                onMapReady={_onMapReady}
                showsMyLocationButton={true}
                showsCompass={true}
                showsUserLocation
                region={mapRegion}

            >
                {locations.map(marker => (
                    <SafeAreaView key={Math.random().toString(36).substr(2, 9)}>
                        <Marker
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude
                            }}

                            title={marker.title}
                            description={marker.description}


                            onPress={() => navigate('POIinfo', marker)}
                        >

                            <ImageBackground source={require('../assets/Diamand.png')}
                                             style={{width: 30, height: 30, alignItems: "center"}}>
                                <View style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={styles.text}>{marker.markerID + 1}</Text>
                                </View>
                            </ImageBackground>
                        </Marker>

                    </SafeAreaView>

                ))}

                {routeShow ? (
                    <POIRoute/>


                ) : null}
            </MapView>

            <Geofencing/>
        </SafeAreaView>
    );


    //////////////////////////////////////////////////////////////////////////
    //Todo GeoFencing


    function Geofencing() {
        TaskManager.defineTask("test", ({data: {eventType, region}, error}) => {
            if (error) {
                // check `error.message` for more details.
                return;
            }
            if (eventType === Location.LocationGeofencingEventType.Enter) {


                global.arrayList = global.arrayList.filter(item => item.identifier !== region.identifier)
                console.log("kicked from arraylist: " + region.identifier)


                return region

            } else if (eventType === Location.LocationGeofencingEventType.Exit) {

            }

        });

        let text = "Waiting..";

        return null
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    SelectRoutebutton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "#163933",
        zIndex: 2,
        position: 'absolute',
        top: 30,
        borderColor: "green",
        borderWidth: 3
    },
    StartRoutebutton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "#163933",
        zIndex: 2,
        position: 'absolute',
        bottom: 100,
        borderColor: "green",
        borderWidth: 3,

    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
