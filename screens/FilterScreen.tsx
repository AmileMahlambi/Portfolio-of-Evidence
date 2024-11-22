import React, { useState } from 'react';
import { View, Text, FlatList, Picker, StyleSheet } from 'react-native';

const FilterScreen = ({ menuItems }) => {
  const [selectedCourse, setSelectedCourse] = useState('');

  const filteredItems = menuItems.filter((item) =>
    selectedCourse ? item.course === selectedCourse : true
  );

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedCourse}
        onValueChange={(value) => setSelectedCourse(value)}
      >
        <Picker.Item label="All Courses" value="" />
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
      
      <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.dishName} - ${item.price}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
});
