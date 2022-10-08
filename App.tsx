import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

const COLORS = {
  primary: '#262626',
  secondary: '#757575',
  white: '#ffffff',
};

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.heading}>
        <Text style={styles.text}>TODO APP</Text>
        <Icon name="delete" color="red" size={25} />
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter todo here"
            placeholderTextColor={COLORS.secondary}
            style={{color: COLORS.primary}}
          />
        </View>
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
  footer: {
    position: 'absolute',
    bottom: 0,
    color: COLORS.white,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    elevation: 40,
    backgroundColor: COLORS.white,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
});

export default App;
