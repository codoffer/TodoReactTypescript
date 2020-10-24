import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

export interface Props {
  title: string;
  isCompelted: boolean;
}

const Task: React.FC<Props> = ({title, isCompelted}) => {
  const [tasks, setTasks] = React.useState([]);

  const markIsCompleted = (isCompleted: boolean) => {};

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.txtContainer}>Tasks</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  txtContainer: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Task;
