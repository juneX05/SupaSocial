import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View,} from "react-native";
import React, {useState} from "react";
import {useApp} from "../../../contexts/ApplicationContext";
import DrawerLayoutComponent from "../../../components/DrawerLayoutComponent";
import ButtonComponent from "../../../components/ButtonComponent";
import {wp} from "../../../commons";
import {
    Actionsheet,
    ActionsheetBackdrop,
    ActionsheetContent, ActionsheetDragIndicator,
    ActionsheetDragIndicatorWrapper
} from "@/components/ui/actionsheet";
import {Button, ButtonText} from "@/components/ui/button";
import {VStack} from "@/components/ui/vstack";
import {HStack} from "@/components/ui/hstack";
import {FormControl, FormControlLabel, FormControlLabelText} from "@/components/ui/form-control";
import {Input, InputField, InputIcon, InputSlot} from "@/components/ui/input";
import {CreditCardIcon} from "lucide-react-native";
import {Box} from "@/components/ui/box";
import {Image} from "@/components/ui/image";
import {Text} from "@/components/ui/text";

const UsersListScreen = (props) => {
    const [showActionsheet, setShowActionsheet] = React.useState(false)
    const handleClose = () => setShowActionsheet(false)
    return (
        <DrawerLayoutComponent {...props} title={"Users: List"} >

            <View>
                <Button onPress={() => props.navigation.navigate('UsersCreate')}>
                    <ButtonText>Open</ButtonText>
                </Button>

                <Button onPress={() => setShowActionsheet(true)}>
                    <ButtonText>Open</ButtonText>
                </Button>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
                    <ActionsheetBackdrop />
                    <ActionsheetContent className="">
                        <ActionsheetDragIndicatorWrapper>
                            <ActionsheetDragIndicator />
                        </ActionsheetDragIndicatorWrapper>
                        <VStack className="w-full pt-5">
                            <HStack space="md" className="justify-center items-center">
                                <Box className="w-[50px] h-full px-2 border border-solid border-outline-300 rounded-sm">
                                    <Image
                                        source={{ uri: "https://i.imgur.com/UwTLr26.png" }}
                                        resizeMode="contain"
                                        className="flex-1"
                                    />
                                </Box>
                                <VStack className="flex-1">
                                    <Text className="font-bold">Mastercard</Text>
                                    <Text>Card ending in 2345</Text>
                                </VStack>
                            </HStack>
                            <FormControl className="mt-[36px]">
                                <FormControlLabel>
                                    <FormControlLabelText>
                                        Confirm security code
                                    </FormControlLabelText>
                                </FormControlLabel>
                                <Input className="w-full">
                                    <InputSlot>
                                        <InputIcon as={CreditCardIcon} className="ml-2" />
                                    </InputSlot>
                                    <InputField placeholder="CVC/CVV" />
                                </Input>
                                <Button onPress={handleClose} className="mt-3">
                                    <ButtonText className="flex-1">Pay $1000</ButtonText>
                                </Button>
                            </FormControl>
                        </VStack>
                    </ActionsheetContent>
                </Actionsheet>
            </KeyboardAvoidingView>
        </DrawerLayoutComponent>
    )
}

export default UsersListScreen

const styles = StyleSheet.create({
    container: {
        minHeight: 192,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})