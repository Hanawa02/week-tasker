import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../constants/Colors';
import UtilityStyles from '../../constants/UtilityStyles';
import { Task } from './../../models/Task';

interface TaskItemProps {
  task: Task;
  startTaskTracking: Function; //  Toggle instead of start?
}

const TaskItem = (props: TaskItemProps) => {
  function handleStartPress() {
    startTaskTracking();
  }

  const { task, startTaskTracking } = props;

  return (
    <View style={styles.card}>
      <View style={styles.titleSection}>
        <Text style={styles.taskName}>{task.name}</Text>
        <TouchableOpacity
          onPress={handleStartPress}
          style={styles.actionButton}
        >
          <Text>Play Icon</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>{task.description}</Text>
      // Redo this part whith icons and so on
      <Text style={styles.timeSuggestion}>
        Time per day: {task.suggestedMinutesPerDay} min.
      </Text>
      <Text style={styles.timeStatistics}>
        So far you completed {task.minutesExecutedThisWeek} from the{' '}
        {task.weeklyQuotaInMinutes} expected for the week.
      </Text>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  card: {
    ...UtilityStyles.flexColumn,
    backgroundColor: Colors.blueTransparency3,
    padding: '1rem',
    borderRadius: 8,
    color: Colors.blue,
  },
  titleSection: {
    ...UtilityStyles.flexRow,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  taskName: {
    fontSize: 28,
    color: Colors.blue3,
    fontWeight: '600',
  },
  actionButton: {},
  description: {
    fontSize: 16,
    color: Colors.white,
    alignItems: 'flex-start',
    ...UtilityStyles.flexRow,
    flexWrap: 'wrap',
    marginBottom: '0.75rem',
  },
  timeSuggestion: {
    fontSize: 16,
    color: Colors.white,
  },
  timeStatistics: {
    fontSize: 16,
    color: Colors.white,
  },
});
