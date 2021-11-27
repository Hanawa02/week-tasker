import React, { useLayoutEffect, useState } from 'react';
import TaskItem from '../../components/tasks/TaskItem';
import { StyleSheet, View, Text } from 'react-native';
import DefaultLayout from './../../layouts/Default';
import { Task } from './../../models/Task';
import UtilityStyles from '../../constants/UtilityStyles';
import StopIcon from '../../components/icons/StopIcon';
import Colors from '../../constants/Colors';
import TaskAction from '../../components/tasks/TaskAction';
import { ScrollView } from 'react-native';

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
    new Task(
      'task-id-2',
      'Exercize 2 ',
      'Physical activities to improve your body, more lore ipsum text',
      480,
      28
    ),
  ];

  const [runningTaskId, setRunningTaskId] = useState('');
  const [lastTaskRun, setLastTaskRun] = useState<Task | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);

  useLayoutEffect(() => {
    console.log();
    setStartTime(runningTaskId === '' ? null : new Date());
  }, [runningTaskId]);

  const toggleTrackingTask = (task: Task) => {
    setRunningTaskId((previousValue) => {
      setLastTaskRun(task);
      return previousValue === '' ? task.id : '';
    });
    console.log(`${task.name} was Started`);
  };

  return (
    <DefaultLayout title="Task List">
      {lastTaskRun ? (
        <View style={styles.runningTab}>
          {lastTaskRun.name}
          <TaskAction
            task={lastTaskRun}
            taskIsRunning={runningTaskId === lastTaskRun.id}
            toggleTaskTracking={() => {
              toggleTrackingTask(lastTaskRun);
            }}
            startTime={startTime}
          ></TaskAction>{' '}
        </View>
      ) : (
        ''
      )}
      <ScrollView>
        <View style={styles.taskListContainer}>
          {tasks.map((task) => (
            <View style={styles.task} key={task.id}>
              <TaskItem
                task={task}
                toggleTaskTracking={() => {
                  toggleTrackingTask(task);
                }}
                taskIsRunning={runningTaskId === task.id}
              ></TaskItem>
            </View>
          ))}
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  task: {
    marginBottom: '2rem',
  },
  runningTab: {
    ...UtilityStyles.flexRow,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.25rem',
    width: '100%',
    backgroundColor: Colors.lightTransparency2,
    fontSize: 24,
    color: Colors.blue1,
  },
  taskListContainer: {
    padding: '1.25rem',
  },
});
