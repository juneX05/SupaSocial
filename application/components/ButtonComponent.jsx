import {View, StyleSheet} from "react-native";
import React from "react";
import {Spinner} from "@/components/ui/spinner";
import {Button, ButtonText} from "@/components/ui/button";


const ButtonComponent = ({text,loading = false, AccessoryLeft = null, filled = false, onPress}) => {
    const LoadingIndicator = (props) => (
        <View style={[props.style, styles.indicator]}>
            <Spinner size="small"  color={colors.gray[500]} />
        </View>
    );

    return (
        <Button
            style={styles.button}
            // appearance={filled ? 'filled' : 'outline'}
            // accessoryLeft={loading ? LoadingIndicator : AccessoryLeft}
            disabled={loading}
            size={'md'}
            onPress={onPress}
            variant="solid" action="primary"
        >
            <ButtonText>{text}</ButtonText>
        </Button>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({

    button: {
        margin: 2,
    },
})