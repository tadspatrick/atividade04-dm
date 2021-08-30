import React from "react";
import Talks from "./scr/views/Talks";
import Status from "./scr/views/Status";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//npm install @react-navigation/native @react-navigation/native-stack

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="Conversas" component={Talks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
