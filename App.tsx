import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddItemScreen from './screens/AddItemScreen';
import FilterScreen from './screens/FilterScreen';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddItem" component={AddItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Stack = createStackNavigator();

export default function App() {
  const [menuItems, setMenuItems] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {() => <HomeScreen menuItems={menuItems} />}
        </Stack.Screen>
        <Stack.Screen name="AddItem">
          {() => <AddItemScreen menuItems={menuItems} setMenuItems={setMenuItems} />}
        </Stack.Screen>
        <Stack.Screen name="Filter">
          {() => <FilterScreen menuItems={menuItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

