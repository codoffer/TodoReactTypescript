import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Button} from 'react-native-elements';

export interface Props {
  taskTitle: string;
  isCompleted: boolean;
  markCompleted: () => void;
  deleteTask: () => void;
}

const Task: React.FC<Props> = ({
  taskTitle,
  isCompleted,
  markCompleted,
  deleteTask,
}) => {
  return (
    <TouchableOpacity onPress={markCompleted} style={styles.container}>
      <Text
        style={[
          styles.txtContainer,
          isCompleted ? styles.completedContainer : null,
        ]}>
        {taskTitle}
      </Text>
      <Button title="Delete" type="outline" onPress={deleteTask} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  completedContainer: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  txtContainer: {
    fontSize: 18,
  },
});

export default Task;
