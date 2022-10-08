import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import ListItem from './src/components/ListItem';
import {COLORS} from './src/constants';

const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      task: 'Hey this is my first task',
      completed: true,
    },
  ]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.heading}>
        <Text style={styles.text}>TODO APP</Text>
        <Icon name="delete" color="red" size={25} />
      </View>
      <FlatList
        data={todo}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
        renderItem={({item}) => <ListItem todo={item} />}
      />
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter todo here"
            placeholderTextColor={COLORS.secondary}
            style={{color: COLORS.primary}}
          />
        </View>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Icon name="add" color={COLORS.white} size={30} />
          </View>
        </TouchableOpacity>
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
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    elevation: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
