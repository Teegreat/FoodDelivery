import React, {useState, useContext, useEffect} from 'react'

import { View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity, ScrollView, FlatList, Pressable, Alert, Switch, Linking } from 'react-native'

import { Icon, Avatar, Button } from 'react-native-elements'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer'

import {colors} from '../global/styles'

export default function DrawerContent(props) {
    return (
        <View style= {styles.container}>
            <DrawerContentScrollView {...props}>
            <View style = {{backgroundColor:colors.buttons}}>
            <View style = {{flexDirection: "row", alignItems: "center", paddingLeft: 20, paddingVertical: 10}}>
                <Avatar 
                    rounded
                    avatarStyle = {styles.avatar}
                    size = {75}
                    source = {{uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/macdo.png'}}
                /> 

                <View style={{marginLeft: 11}}>
                    <Text style={{fontWeight: 'bold', color:colors.cardBackground, fontSize:18}}>John David</Text>
                    <Text style={{color:colors.cardBackground, fontSize:14}}>johndavid@gmail.com</Text>
                </View>
                
            </View>

            <View style = {{flexDirection: "row", justifyContent: "space-evenly", paddingBottom: 15}}>
            <View style = {{flexDirection: 'row', marginTop:0}}>
                    <View style = {{marginLeft: 10, alignItems: "center", justifyContent: "center"}}>
                        <Text style = {{fontWeight: 'bold', color: colors.cardBackground, fontSize: 18}}>1</Text>
                        <Text style = {{color: colors.cardBackground, fontSize: 14}}>My Favorites</Text>
                    </View>
                </View>

                <View style = {{flexDirection: 'row', marginTop:10}}>
                    <View style = {{marginLeft: 10, alignItems: "center", justifyContent: "center"}}>
                        <Text style = {{fontWeight: 'bold', color: colors.cardBackground, fontSize: 18}}>0</Text>
                        <Text style = {{color: colors.cardBackground, fontSize: 14}}>My Cart</Text>
                    </View>
                </View>

            </View>
            </View>

            
            <DrawerItemList {...props} />

            <DrawerItem 
                label = "Payment"
                icon = {({color, size}) => (
                    <Icon 
                        type = "material-community"
                        name = "credit-card-outline"
                        color = {color}
                        size = {size}
                    />
                )}
            />

            <DrawerItem 
                label = "Promotions"
                icon = {({color, size}) => (
                    <Icon 
                        type = "material-community"
                        name = "tag-heart"
                        color = {color}
                        size = {size}
                    />
                )}
            />

            <DrawerItem 
                label = "Settings"
                icon = {({color, size}) => (
                    <Icon 
                        type = "material-community"
                        name = "cog-outline"
                        color = {color}
                        size = {size}
                    />
                )}
            />

            <DrawerItem 
                label = "Help"
                icon = {({color, size}) => (
                    <Icon 
                        type = "material-community"
                        name = "lifebuoy"
                        color = {color}
                        size = {size}
                    />
                )}
            />

            <View style = {{borderTopWidth: 1, borderTopColor: colors.grey5}}>
                <Text style = {styles.preferences}>Preferences</Text>

                <View style = {styles.switchText}>
                    <Text style={styles.darkthemeText}>Dark Theme</Text>
                    <View style={{paddingRight: 10}}>
                        <Switch 
                            trackColor = {{false: "#767577", true: "#81b0ff"}}
                            thumbColor =  "#f4f3f4"
                        />
                    </View>
                </View>

            </View>

            

            </DrawerContentScrollView>
            <DrawerItem 
                label = "Sign Out"
                icon = {({color, size}) => (
                    <Icon 
                        type = "material-community"
                        name = "logout-variant"
                        color = {color}
                        size = {size}
                    />
                )}
            />
        </View>
    )
}





const styles = StyleSheet.create ({
    container:{
        flex:1,
    },

    avatar: {
        borderWidth: 4,
        borderColor: colors.cardBackground
    },

    preferences: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 20
    },

    switchText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingVertical: 5,
        paddingRight: 20
    },

    darkthemeText: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft:0,
        fontWeight: "bold"
    }
})