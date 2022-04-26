import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { hp, wp, fonts } from '../constants';
import { MainStackParams } from '../navigation/Main';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'AddEmployee'>;
};
export const AddEmployee: React.FC<Props> = ({ navigation }) => {
  const navigateToAddEmployee = React.useCallback(() => {
    navigation.navigate('AddEmployeeScreen');
  }, []);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.addButtonStyle}
        onPress={navigateToAddEmployee}
      >
        <Text style={styles.buttonText}>ADD EMPLOYEE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '$green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: hp('1.5%'),
    borderRadius: hp('1%'),
  },
  buttonText: {
    color: '$white',
    fontSize: fonts.fontJumboSecondary,
  },
});
