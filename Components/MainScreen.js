import * as React from "react";
import Map from "./Map";
import {
    StyleSheet,
    Text,
    Platform,
    StatusBar, Button, SafeAreaView,
} from "react-native";



export default function MainScreen({ navigation }) {
    return (

        <SafeAreaView  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Map')}
            />
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#ecf0f1",


    },
});
