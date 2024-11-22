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
  
  const calculateAveragePrice = (menuItems) => {
    const courses = {};
    menuItems.forEach(item => {
      if (!courses[item.course]) courses[item.course] = { total: 0, count: 0 };
      courses[item.course].total += parseFloat(item.price);
      courses[item.course].count++;
    });
  
    return Object.entries(courses).map(([course, data]) => ({
      course,
      average: (data.total / data.count).toFixed(2),
    }));
  };
  
  const HomeScreen = ({ menuItems }) => {
    const averages = calculateAveragePrice(menuItems);
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Average Price by Course:</Text>
        <FlatList
          data={averages}
          keyExtractor={(item) => item.course}
          renderItem={({ item }) => (
            <Text>{item.course}: ${item.average}</Text>
          )}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: { padding: 16 },
    title: { fontSize: 18, fontWeight: 'bold' },
  });
  

  export default HomeScreen;
