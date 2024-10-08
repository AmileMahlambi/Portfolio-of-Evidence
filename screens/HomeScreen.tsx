import React, { useState, useRef } from 'react';
import { View, Text, Button, FlatList, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const colors = {
    primary: '#007BFF',  
    secondary: '#6C757D',
    background: '#F0F4F7', 
    textPrimary: '#333',  
    white: '#FFFFFF',    
    accent: '#28A745',    
  };
  
const HomeScreen = () => {
  const [menuItems, setMenuItems] = useState([]);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const addMenuItem = (newItem) => {
    setMenuItems([...menuItems, newItem]);
    fadeIn();
  };

  return (
    <View style={styles.container}>
      <Text>Menu Items</Text>
      
      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Animated.View style={[styles.menuItem, { opacity: fadeAnim }]}>
            <Text>{item.dishName} - {item.course} - ${item.price}</Text>
          </Animated.View>
        )}
      />
      
      <Button 
        title="Add New Item" 
        onPress={() => navigation.navigate('AddItem', { 
          addMenuItem 
        })} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: colors.background },
    input: { 
      height: 40, 
      borderColor: colors.secondary, 
      borderWidth: 1, 
      paddingHorizontal: 10, 
      marginBottom: 12, 
      borderRadius: 8, 
      backgroundColor: colors.white,
    },
  });

export default HomeScreen;
