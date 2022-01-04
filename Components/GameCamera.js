import React, {useState, useEffect, Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    SafeAreaView,
    TouchableHighlight,
    Alert,
    ImageBackground
} from 'react-native';
import {Camera} from 'expo-camera';
import GameAnswer from "./GameAnswer";
import { format , differenceInMilliseconds, differenceInSeconds} from "date-fns";

function GameCamera ({navigation, route} ) {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [counter, setCounter] = useState(0);
    const [opacityGreen, setOpacityGreen] = useState(0.000001);
    const [opacityBlue, setOpacityBlue] = useState(0.00001);
    const [seconds, setSeconds] = useState(0);
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
    let totalTime;


    let DiamantOpacityOnPress = () => {

        if(counter === 0){
            setStartTime(Date.now())
        }

        setCounter(counter + 1)


        if (counter === 20){
            setEndTime(Date.now())
        }
        if(counter === 21){
            totalTime= (endTime - startTime);

            Alert.alert("Jouw tijd:","Je hebt de diamant in: " + (totalTime/1000).toString().replace(".",",") + " seconden geslepen" )

            /*if(totalTime < 2500){
                console.log("10 punten")
            }
            else if (totalTime >2500 && totalTime < 2800 ){
                console.log("9 punten")
            }
            else if(totalTime > 2800 && totalTime < 3200){
                console.log("8 punten")
            }
            else if(totalTime > 3200 && totalTime < 3500){
                console.log("7 punten")
            }
            else if(totalTime > 3500 && totalTime< 4000){
                console.log("6 punten");
            }
            else{
                console.log("5 punten")
            }*/


        }
        if (counter < 11) {
            setOpacityGreen(counter * 0.1)
        }
        if (counter > 10) {
            setOpacityBlue((counter - 10) * 0.1)
        }

    }


    let DiamantOpacity = () => {

        return (
            <SafeAreaView>
                <SafeAreaView>
                    <Text style={{padding: 14, fontSize: 30, fontWeight: 'bold', color:'white'}}>
                        Diamantslijpen
                    </Text>
                    <Text style={{
                        paddingHorizontal: 14, fontSize: 20, fontWeight: 'normal', paddingBottom: 20,
                        opacity: 0.7, justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 20, color: 'white',
                    }}>
                        Druk zo snel als je kunt op de diamant om hem te slijpen. Hoe sneller je klikt, hoe meer punten je krijgt!
                    </Text>
                </SafeAreaView>
                <Pressable style={styles.DiamantImage} onPress={DiamantOpacityOnPress}>
                    <Image onPress={DiamantOpacityOnPress}
                           style={{zIndex: 3, top: 150, height: 350, width: 350,}}
                           opacity={opacityBlue}
                           source={require('../assets/diamond-blue.png')}/>
                    <Image onPress={DiamantOpacityOnPress}
                           style={{zIndex: 2, top: -200, height: 350, width: 350,}}
                           opacity={opacityGreen}
                           source={require('../assets/diamond-green.png')}/>
                    <Image onPress={DiamantOpacityOnPress}
                           style={{zIndex: 0, top: -550, height: 350, width: 350, justifyContent: "center"}}
                           source={require('../assets/diamond-black.png')}/>
                </Pressable>
             </SafeAreaView>



        )

    }


    useEffect(() => {
        // setCurrentPOI(route);
        // console.log("Test");
        // console.log(currentPOI);
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');


        })();
    }, []);

    if (hasPermission === null) {

        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }




    const DiamondView = () => {
        if(route.params.gameType === "diamondClicker"){
            return(

            <SafeAreaView>
                <DiamantOpacity/>
            </SafeAreaView>
            )
        }
        else return null
    }


    function goBack() {
        navigation.goBack();
    }

    const CameraView = () => {
        if(route.params.gameType === "wallGraph" || route.params.gameType === "imageCompare") {

            let wallGraph = false;
            let imageCompare = false;

            if(route.params.gameType === "wallGraph"){
                wallGraph = true;
            }
            else if(route.params.gameType === "imageCompare"){
                imageCompare = true;
            }


            return (
                <Camera style={styles.camera} type={type} ratio={"16:9"}>
                    <SafeAreaView style={styles.ImageContainer}>

                        {wallGraph ? (
                            <Image style={styles.GraphImage}
                                   source={require('../assets/Muurgrafiek-vullling-tabel-01.png')}/>
                        ) : null}

                        {imageCompare ? (
                            <Image style={styles.FloraImage}
                                   source={require('../assets/flora.jpg')}/>
                        ) : null}

                        <Pressable style={styles.StartButtonGameCam} onPress={() => goBack()}>
                            <Text style={styles.ButtonText}>Ik weet het!</Text>
                        </Pressable>
                    </SafeAreaView>
                </Camera>
            )
        }
        else return null
    }



    return (
        <View style={styles.container}>

            <DiamondView/>
            <CameraView/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#163933"
    },
    camera: {
        flex: 1,
    },
    ButtonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        // margin: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 50,
        color: 'white',
    },
    StartButtonGameCam: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: '#163933',
        zIndex: 2,
        // position: 'absolute',
        // bottom: 50,
        top: 60,
        borderColor: '#2db44e',
        borderWidth: 3

    },
    ButtonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    GraphImage: {
        width: 300,
        height: 300,
        alignItems: "center",
        justifyContent: "center",
    },
    FloraImage: {
        // width: 300,
        // height: 600,
        transform: [{
            scale: 0.7,

        }],
        alignItems: "center",
        // justifyContent: "center",
        bottom: 10,
        position: 'absolute',


    },
    ImageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    DiamantImage: {
        position: 'absolute'
    }
});

export default GameCamera
