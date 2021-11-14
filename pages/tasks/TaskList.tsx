import { StatusBar } from 'expo-status-bar';
import React from 'react';
import TaskItem from '../../components/tasks/TaskItem';
// import { View, Text, Image, ScrollView, TextInput } from "react-native";
import DefaultLayout from './../../layouts/Default';
import { Task } from './../../models/Task';

interface TaskListProps {}

const TaskList = (props: TaskListProps) => {
  const tasks: Task[] = [
    new Task(
      'task-id',
      'Exercize',
      'Physical activities to improve your body, more lore ipsum text',
      480,
      28
    ),
  ];

  const startTrackingTask = (task: Task) =>
    console.log(`${task.name} was Started`);

  return (
    <DefaultLayout title="Task List">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          startTaskTracking={() => {
            startTrackingTask(task);
          }}
        ></TaskItem>
      ))}
    </DefaultLayout>
  );
};

export default TaskList;
