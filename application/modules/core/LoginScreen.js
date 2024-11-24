import {Alert, View, StyleSheet, Text} from "react-native";
import React, {useRef, useState} from "react";
import {supabase} from "../../lib/supabase";
import {FormControl} from "@/components/ui/form-control";
import {VStack} from "@/components/ui/vstack";
import {Input, InputField, InputIcon, InputSlot} from "@/components/ui/input";
import {Button, ButtonText} from "@/components/ui/button";
import {Heading} from "@/components/ui/heading";
import {EyeIcon, EyeOffIcon} from "lucide-react-native";
import {Divider} from "@/components/ui/divider";


const LoginScreen = ({navigation}) => {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert('Login', 'Please fill all fields')
            return;
        }

        setLoading(true);

        let email = emailRef.current.trim();
        let password = passwordRef.current.trim();

        const {data: {session}, error} = await supabase.auth.signInWithPassword({
            email,
            password
        })

        console.log('session:', session);
        console.log('error:', error);
        if (error) {
            setLoading(false)
            Alert.alert('Login', error.message)
        }

    }

    const [showPassword, setShowPassword] = useState(false)
    const handleState = () => {
        setShowPassword((showState) => {
            return !showState
        })
    }
    return (<>
        <View className='flex flex-col min-h-screen items-center justify-center'>
            <Heading size={'2xl'} className="text-typography-900 leading-2 text-center mb-2">Login</Heading>
            <FormControl className="p-4 w-full border">
                <VStack space="xl">
                    <VStack space="xs">
                        <Text className="text-typography-500 leading-1">Email</Text>
                        <Input>
                            <InputField type="text" onChangeText={(value) => emailRef.current = value}/>
                        </Input>
                    </VStack>
                    <VStack space="xs">
                        <Text className="text-typography-500 leading-1">Password</Text>
                        <Input className="text-center">
                            <InputField type={showPassword ? "text" : "password"} onChangeText={(value) => passwordRef.current = value}/>
                            <InputSlot className="pr-3" onPress={handleState}>
                                {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                                <InputIcon
                                    as={showPassword ? EyeIcon : EyeOffIcon}
                                    className="text-darkBlue-500"
                                />
                            </InputSlot>
                        </Input>
                    </VStack>
                    <Button
                        className="ml-auto"
                        onPress={onSubmit}
                    >
                        <ButtonText className="text-typography-0">Save</ButtonText>
                    </Button>
                </VStack>
            </FormControl>
        </View>
    </>)
}

export default LoginScreen
