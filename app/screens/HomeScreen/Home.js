import React from "react";
import { View, Text, Stylesheet, TouchableOpacity, SafeAreaView } from "react-native";
import { FonrAwesome5 } from "@expo/vector-icons";

export default class Screen extends React.Component {
    render () {
        return (
            <View>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity style={{alignItems: "flex-start", margin: 16}} onPress={this.props.navigation.openDrawe}>
                        <FonrAwesome5 />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#161924",
        fontWeight: "500"
    }
})