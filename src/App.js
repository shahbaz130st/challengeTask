import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useApi } from "./Hooks/useApi";
import constant from "./Utils/ApiConstants";
const App = () => {
    const url =
        constant.Base_url + "people/1/";
    const [isLoading, data, error] = useApi(url);
    console.log(error)
    return (
        <View style={styles.mainView}>
            <TouchableOpacity >
                <Text>Call Api</Text>
            </TouchableOpacity>
        </View>
    )
}
export default App;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})