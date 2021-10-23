import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const SearchResultScreen = ({navigation, route}) => {
    return (
        <View style = {styles.container}>
            <Text>Search Result for {route.params.item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
