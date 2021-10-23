import React, { useState, useRef } from 'react'

import { View, Text, StyleSheet, Dimensions, TextInput, Image } from 'react-native'
import { colors, parameters, title } from "../../global/styles"
import Swiper from 'react-native-swiper'



import { Icon, Button, SocialIcon } from 'react-native-elements'


export default function SignInWelcomeScreen({navigation}) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: "center", paddingTop: 20 }}>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}>DISCOVER RESTAURANTS</Text>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}>IN YOUR AREA</Text>
            </View>

            <View style={{ flex: 4, justifyContent: "center" }}>
                <Swiper autoplay={true}>
                    <View styles={styles.slide1}>
                        <Image
                            source={{ uri: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                    <View styles={styles.slide2}>
                        <Image
                            source={{ uri: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                    <View styles={styles.slide3}>
                        <Image
                            source={{ uri: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                    <View styles={styles.slide3}>
                        <Image
                            source={{ uri: "https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                </Swiper>
            </View>

            <View style = {{flex:4, justifyContent: "flex-end", marginBottom:20}}>
            <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                <Button
                    title="SIGN IN"
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
                    onPress={ () => {
                        navigation.navigate("SignInScreen")
                    }}
                />
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                <Button
                    title="Create an Account"
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                />
            </View>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9dd68b"
    },
    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#97cae5"
    },
    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#92bbd9"
    },
    createButton: {
        backgroundColor: "#fff",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.buttons,
        height: 50,
        paddingHorizontal: 20
    },

    createButtonTitle: {
        color: colors.grey1,
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }
})