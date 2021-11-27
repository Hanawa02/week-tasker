import React from 'react';
import { StyleSheet, View } from 'react-native';
import UtilityStyles from '../../constants/UtilityStyles';

interface IconWrapperProps {
  children: any;
}

const IconWrapper = (props: IconWrapperProps) => {
  return <View style={styles.icon}>{props.children}</View>;
};

export default IconWrapper;

const styles = StyleSheet.create({
  icon: {
    ...UtilityStyles.flexRow,
    justifyContent: 'center',
    width: '2.5rem',
    height: '2.5rem',
    padding: '0.5rem',
  },
});
