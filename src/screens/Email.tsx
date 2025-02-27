import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import Gradient from '../assets/gradient.png';
import EmailImage from '../assets/email.png';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigator.types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

type EmailProps = NativeStackScreenProps<RootStackParamList, 'Email'>;

const Email = ({ navigation }: EmailProps) => {
    return (
        <>
            <KeyboardAwareScrollView
                bottomOffset={100}
                showsVerticalScrollIndicator={false}
                className="flex-1 mb-10"
            >
                <View className="pb-8">
                    <View>
                        <Image
                            source={Gradient}
                            className="absolute -top-8 -left-40"
                        />
                    </View>
                    <View className="w-full mt-10">
                        <Image source={EmailImage} className="scale-75" />
                    </View>
                    <View className="px-6">
                        <Text className="text-[#FAFAFA] text-center text-2xl font-medium mb-6">
                            Enter your phone number or email,{' '}
                            <Text className="text-[#A3A3A3]">
                                we promise no spam.
                            </Text>
                        </Text>
                        <TextInput
                            placeholder="phone or email"
                            placeholderTextColor={'#fff'}
                            autoFocus={true}
                            autoCapitalize="none"
                            className="w-full bg-[#262626] p-3 border border-[#F8D48D40] focus:border-[#F8D48D] rounded-lg text-[#FFF] text-base"
                        />
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate('Otp')}
                            className="bg-[#EDEAE2] rounded-lg py-3 mt-8"
                        >
                            <Text className="text-center text-[#0A0A0A] font-semibold text-base">
                                Next
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </>
    );
};

export default Email;
