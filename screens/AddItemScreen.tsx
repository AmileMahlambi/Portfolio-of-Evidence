import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text } from 'react-native';
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

  


const AddItemScreen = ({ menuItems, setMenuItems }) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const addMenuItem = () => {
    if (dishName && course && price) {
      setMenuItems([...menuItems, { dishName, description, course, price }]);
      setDishName('');
      setDescription('');
      setCourse('');
      setPrice('');
    }
  };

  const removeMenuItem = (index) => {
    setMenuItems(menuItems.filter((_, i) => i !== index));
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
        placeholder="Course" 
        value={course} 
        onChangeText={setCourse} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Price" 
        value={price} 
        onChangeText={setPrice} 
        style={styles.input} 
      />
      <Button title="Add Item" onPress={addMenuItem} />
      
      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text>{item.dishName} - {item.course} - ${item.price}</Text>
            <Button title="Remove" onPress={() => removeMenuItem(index)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, marginBottom: 8, padding: 8 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
});


export default AddItemScreen;
