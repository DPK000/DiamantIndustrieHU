import React, {useState, useEffect, useRef} from 'react';
import {Platform, Text, View, StyleSheet, Dimensions} from 'react-native';
import * as Location from 'expo-location';
import MapView, {Callout, Marker, Polyline} from "react-native-maps";
import {locations} from "./POIdata"
import MapViewDirections from 'react-native-maps-directions';
import {regions} from "./regions";


const GOOGLE_MAPS_APIKEY = 'AIzaSyD7ShEkMdp0p2kdyE0PKxPvZVaky4794qo';


const POIRoute = () => {
    const destination = {latitude: 52.200529, longitude: 5.152435,};
    const [errorMsg, setErrorMsg] = useState(null);
    const [coordinates, setCoordinates] = useState(null);
    const [wayPoints, setWayPoints] = useState(null);


    useEffect(() => {

        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }
            let location = await Location.watchPositionAsync(
                {
                    timeInterval: 300,
                },
                (location) => {

                    setCoordinates({latitude: location.coords.latitude, longitude: location.coords.longitude})
                }
            );
        })();

    }, []);


    // console.log(global.arrayList)
    if (global.arrayList !== null) {
        return (
            global.arrayList.map(() => (
                <MapViewDirections key={Math.random().toString(36).substr(2, 9)}
                                   waypoints={global.arrayList}
                                   origin={coordinates}
                                   destination={destination}
                                   apikey={GOOGLE_MAPS_APIKEY} // google API key
                                   mode={"WALKING"}
                                   strokeWidth={3}
                                   strokeColor="#FF9900"
                />

            ))
        );
    } else return null;
};
export default POIRoute


