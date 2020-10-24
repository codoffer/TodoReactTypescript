import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';

import {Task} from '../../components';

export interface Tasks {
  taskId: number;
  title: string;
  isCompleted: boolean;
}
[];

const Home = () => {
  const [taskTitle, setTaskTitle] = React.useState('');
  const [taskList, setTaskList] = React.useState<Tasks[]>([]);

  const _AddTask = () => {
    setTaskList((prevTasks) => {
      return [
        ...prevTasks,
        {
          taskId: _GetTaskId(),
          title: taskTitle,
          isCompleted: false,
        },
      ];
    });

    setTaskTitle('');
  };

  const _MarkAsCompleted = (taskId: number) => {
    const currentTasks = [...taskList];
    const taskIndex = currentTasks.findIndex((task) => task.taskId == taskId);
    if (taskIndex >= 0) {
      currentTasks[taskIndex].isCompleted = true;
      setTaskList(currentTasks);
    }
  };

  const _DeleteTask = (taskId: number) => {
    const currentTasks = [...taskList];
    const taskIndex = currentTasks.findIndex((task) => task.taskId == taskId);
    if (taskIndex >= 0) {
      currentTasks.splice(taskIndex, 1);
      setTaskList(currentTasks);
    }
  };

  const _GetTaskId = () => {
    return Math.floor(Math.random() * (10000 - 10 + 1)) + 10;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtHeading}>Todo List</Text>
      <View style={styles.addTodoContainer}>
        <Input
          placeholder="Please enter your task"
          containerStyle={{width: '80%'}}
          value={taskTitle}
          onChangeText={(value) => setTaskTitle(value)}
        />
        <Button
          title="Add"
          onPress={() => {
            _AddTask();
          }}
        />
      </View>
      <View>
        {taskList &&
          taskList.map((task) => {
            return (
              <Task
                key={task.taskId}
                taskTitle={task.title}
                isCompleted={task.isCompleted}
                markCompleted={() => {
                  _MarkAsCompleted(task.taskId);
                }}
                deleteTask={() => {
                  _DeleteTask(task.taskId);
                }}
              />
            );
          })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  addTodoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  txtContainer: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Home;
