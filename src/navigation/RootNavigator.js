import React, { useState, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authNavigator';

export default function RootNavigator () {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}