import {StyleSheet, ActivityIndicator, View} from "react-native";

const Loading = ({size="large"}) => {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={size} />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({

})