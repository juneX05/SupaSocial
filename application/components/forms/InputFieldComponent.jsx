import {StyleSheet, View} from "react-native";
import React from "react";
import {hp} from "../../commons";
import {Input, InputField, InputIcon, InputSlot} from "@/components/ui/input";

const InputFieldComponent = ({placeholder,secureTextEntry = false, AccessoryLeft = null, onChangeText}) => {

    return (
        <View style={styles.container}>
            {/*<Input*/}
            {/*    style={{flex: 1}}*/}
            {/*    size='medium'*/}
            {/*    status='primary'*/}
            {/*    placeholder={placeholder}*/}
            {/*    secureTextEntry={secureTextEntry}*/}
            {/*    accessoryLeft={AccessoryLeft}*/}
            {/*    onChangeText={(value) => onChangeText(value)}*/}
            {/*/>*/}

            <Input>
                {/*<InputSlot className="pl-3">*/}
                {/*    <InputIcon as={AccessoryLeft} />*/}
                {/*</InputSlot>*/}
                <InputField
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    onChangeText={(value) => onChangeText(value)}
                    size={'md'}
                />
            </Input>

        </View>
    )
}

export default InputFieldComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 12,
        height: hp(6)
    },
})