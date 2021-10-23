import React, {useState} from 'react'

import { View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity, ScrollView, FlatList, Pressable } from 'react-native'

import { Icon } from 'react-native-elements'

export default function BusinessConsoleScreen () {
    return (
        <View style = {styles.container}>
            <Text>Welcome to Business Console</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})