import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../constants/Colors';
import UtilityStyles from '../../constants/UtilityStyles';
import PlayIcon from '../icons/PlayIcon';
import StopIcon from '../icons/StopIcon';
import { Task } from './../../models/Task';
import IconWrapper from './../icons/IconWrapper';
import TaskAction from './TaskAction';

interface TaskItemProps {
  task: Task;
  toggleTaskTracking: Function;
  taskIsRunning: boolean;
}

const TaskItem = (props: TaskItemProps) => {
  const { task, toggleTaskTracking, taskIsRunning } = props;

  return (
    <View style={styles.card}>
      <Text style={styles.titleSection}>
        {task.name}
        <TaskAction
          task={task}
          taskIsRunning={taskIsRunning}
          toggleTaskTracking={toggleTaskTracking}
        ></TaskAction>
      </Text>
      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.timeStatistics}>
        This Week: {task.minutesExecutedThisWeek} / {task.weeklyQuotaInMinutes}{' '}
        min
        {task.missingMinutesThisWeek > 0
          ? ` (${task.missingMinutesThisWeek})`
          : ''}
        .
      </Text>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  card: {
    ...UtilityStyles.flexColumn,
    backgroundColor: Colors.lightTransparency2,
    padding: '1rem',
    borderRadius: 8,
    color: Colors.blue,
  },
  titleSection: {
    ...UtilityStyles.flexRow,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
    fontSize: 28,
    color: Colors.blue3,
    fontWeight: '600',
  },
  trackingSection: {
    ...UtilityStyles.flexRow,
    alignItems: 'center',
  },
  actionButton: {
    ...UtilityStyles.flexRow,
    alignItems: 'center',
  },
  trackingText: {
    color: Colors.white,
    fontSize: 18,
    lineHeight: 1.25,
  },
  description: {
    fontSize: 16,
    color: Colors.white,
    alignItems: 'flex-start',
    ...UtilityStyles.flexRow,
    flexWrap: 'wrap',
    marginBottom: '0.75rem',
  },
  timeStatistics: {
    fontSize: 18,
    color: Colors.blue1,
  },
});
