import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native';

const colors = {
    primary: '#007BFF',  
    secondary: '#6C757D', 
    background: '#F0F4F7', 
    textPrimary: '#333', 
    white: '#FFFFFF',    
    accent: '#28A745',   
  };
  

const AddItemScreen = () => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');
  
  const navigation = useNavigation();
  const route = useRoute();

  const addItem = () => {
    const newItem = { dishName, description, course, price: parseFloat(price) };
    route.params.addMenuItem(newItem);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Dish Name" 
        value={dishName} 
        onChangeText={setDishName} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Description" 
        value={description} 
        onChangeText={setDescription} 
        style={styles.input} 
      />
      <Picker 
        selectedValue={course} 
        onValueChange={(itemValue) => setCourse(itemValue)} 
        style={styles.input}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
      <TextInput 
        placeholder="Price" 
        value={price} 
        onChangeText={setPrice} 
        keyboardType="numeric" 
        style={styles.input} 
      />
      <Button title="Save Item" onPress={addItem} />
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

export default AddItemScreen;
