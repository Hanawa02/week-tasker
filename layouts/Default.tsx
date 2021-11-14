import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

import UtilityStyles from '../constants/UtilityStyles';
interface DefaultLayoutProps {
  title: string;
  children: any;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.menu}>
          <Text style={styles.menuTitle}>{props.title}</Text>
        </View>
        <ScrollView style={styles.pageContainer}>{props.children}</ScrollView>
      </View>
    </View>
  );
};

export default DefaultLayout;

const styles = StyleSheet.create({
  screen: {
    ...UtilityStyles.flexRow,
    backgroundColor: Colors.gray5,

    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    fontFamily: 'Roboto',
  },
  container: {
    backgroundColor: Colors.gray6,
    maxWidth: '768px',
    margin: '0 auto !important',
    width: '100%',
  },
  menu: {
    padding: '1.5rem',
    backgroundColor: Colors.darkTransparency6,
  },
  menuTitle: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '600',
  },
  pageContainer: {
    padding: '1.25rem',
  },
});
