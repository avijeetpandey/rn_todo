import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const COLORS = {
  primary: '#1f145c',
  white: '#ffffff',
};

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.heading}>
        <Text style={styles.text}>TODO APP</Text>
        <Icon name="delete" color="red" size={25} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  heading: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.primary,
  },
});

export default App;
