import React from 'react';
import { withExpoSnack } from 'nativewind';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaProvider
} from 'react-native-safe-area-context';

import Settings from './components/settings';
import DashBoard from './components/dashBoard';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default withExpoSnack(App);

