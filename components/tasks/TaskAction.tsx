import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../constants/Colors';
import UtilityStyles from '../../constants/UtilityStyles';
import PlayIcon from '../icons/PlayIcon';
import StopIcon from '../icons/StopIcon';
import { Task } from './../../models/Task';
import IconWrapper from './../icons/IconWrapper';

interface TaskActionProps {
  task: Task;
  toggleTaskTracking: Function;
  taskIsRunning: boolean;
  startTime?: Date | null;
}

const TaskAction = (props: TaskActionProps) => {
  const { toggleTaskTracking, taskIsRunning, startTime } = props;

  function handleStartPress() {
    toggleTaskTracking();
  }

  const calculateRunningTimeMilliseconds = () => {
    if (!startTime) return 0;

    return Date.now() - startTime.getTime();
  };

  const [timeLeft, setTimeLeft] = useState(calculateRunningTimeMilliseconds());

  const getNumberWithTwoDigits = (number: number) => {
    return `${number < 10 ? '0' : ''}${number}`;
  };

  const getTimeLeftFormatted = () => {
    const secondsRunned = Math.floor(timeLeft / 1000);
    const minutesRunned = Math.floor(secondsRunned / 60);
    const hoursRunned = Math.floor(minutesRunned / 60);
    const minutesLeft = minutesRunned - hoursRunned * 60;
    const secondsLeft = secondsRunned - minutesRunned * 60;

    let formattedTime = `${getNumberWithTwoDigits(
      minutesLeft
    )}:${getNumberWithTwoDigits(secondsLeft)}`;

    if (hoursRunned > 0) {
      formattedTime = `${hoursRunned}:${formattedTime}`;
    }

    return formattedTime;
  };

  return (
    <View style={styles.trackingSection}>
      <Text style={styles.trackingText}>{getTimeLeftFormatted()}</Text>
      <TouchableOpacity onPress={handleStartPress} style={styles.actionButton}>
        <IconWrapper>
          {taskIsRunning ? (
            <StopIcon color={Colors.blue2}></StopIcon>
          ) : (
            <PlayIcon color={Colors.blue2}></PlayIcon>
          )}
        </IconWrapper>
        <Text style={styles.trackingText}>
          {taskIsRunning ? 'Stop' : 'Play'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskAction;

const styles = StyleSheet.create({
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
