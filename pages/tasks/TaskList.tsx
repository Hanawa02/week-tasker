import { StatusBar } from "expo-status-bar";
import React from "react";
// import { View, Text, Image, ScrollView, TextInput } from "react-native";
import DefaultLayout from "./../../layouts/Default";

interface TaskListProps {}

const TaskList = (props: TaskListProps) => {
  return (
    <DefaultLayout title="Task List">
      <div>Test</div>
    </DefaultLayout>
  );
};

export default TaskList;
