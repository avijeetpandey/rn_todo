/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {COLORS} from '../../constants';

const ListItem = ({todo}) => {
  return (
    <View style={styles.listItem}>
      <View style={{flex: 1}}>
        <Text
          style={[
            styles.todo,
            {textDecorationLine: todo?.completed ? 'line-through' : 'none'},
          ]}>
          {todo?.task}
        </Text>
      </View>
      {!todo?.completed && (
        <TouchableOpacity onPress={() => {}}>
          <View style={[styles.actionIcon, {backgroundColor: 'green'}]}>
            <Icon name="done" size={20} color="white" />
          </View>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.actionIcon}>
          <Icon name="delete" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    elevation: 12,
    borderRadius: 7,
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  todo: {
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORS.primary,
  },
  actionIcon: {
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginLeft: 5,
    borderRadius: 3,
  },
});

export default ListItem;
