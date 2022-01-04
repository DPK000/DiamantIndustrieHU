import React, {useState} from 'react'
import {SafeAreaView, Text, StyleSheet, TextInput, Pressable, Image, View} from "react-native";

export default function GameAnswer({navigation: {navigate}}) {
    // const [inputName, setInputName] = useState(null);
    // const [inputAge, setInputAge] = useState(null);
    //
    //
    // const onStartPress = function () {
    //
    //     if (inputName === null) {
    //         alert("Vul je naam in")
    //     }
    //     if (inputName.length < 3) {
    //         alert("Je naam moet minimaal 3 karakters lang zijn")
    //     }
    //     if ((inputAge > 110 || inputAge < 1) && inputAge != null) {
    //         alert("Voer een geldige leeftijd in")
    //     }
    //     if (inputAge === null) {
    //         alert("Voer je leeftijd in")
    //     }
    //     if (inputName.length > 2 && inputAge < 110 && inputAge > 0 && inputAge != null) {
    //         navigate('Map')
    //     }
    //     console.log("input name: " + inputName)
    //     console.log("input age: " + inputAge)
    // }

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.Text}>Game answer pagina</Text>
            <SafeAreaView style={styles.textInputContainer}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="input 1"
                    // onChangeText={text => setInputName(text)}
                    maxLength={25}
                >
                </TextInput>
            </SafeAreaView>
            <SafeAreaView style={styles.textInputContainer}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="input 2"
                    // onChangeText={text => setInputAge(text)}
                    maxLength={3}
                    numeric
                    keyboardType={'numeric'}

                >
                </TextInput>
            </SafeAreaView>

            {/*<Pressable style={styles.StartButton} onPress={() => onStartPress()}>*/}
            {/*    <Text style={styles.ButtonText}>Start!</Text>*/}
            {/*</Pressable>*/}
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 30,
        padding: 20,
        alignItems: "center",

    },
    ImageContainer: {
        flexDirection: 'row'
    },
    boldText: {
        fontWeight: 'bold'
    },
    Text: {
        fontSize: 30,
    },
    TextInput: {
        paddingVertical: 5,
        paddingHorizontal: 30,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 30,

    },
    textInputContainer: {
        paddingTop: 20,
    },
    ButtonText: {
        fontSize: 20,
        textAlign: 'center',
    },
    StartButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 50,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: 'white',
        zIndex: 2,
        position: 'absolute',
        bottom: 100,
        borderColor: "green",
        borderWidth: 3
    }
});