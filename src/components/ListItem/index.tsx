import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../../constants';

const ListItem = ({todo}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.todo}>{todo?.task}</Text>
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
});

export default ListItem;
