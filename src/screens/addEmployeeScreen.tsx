import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import EStyleSheet from 'react-native-extended-stylesheet';
import { hp, wp, fonts } from '../constants';
import { MainStackParams } from '../navigation/Main';
import { StackNavigationProp } from '@react-navigation/stack';

type employeeDetailsInfo = {
  id: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  star: boolean;
};
const employeeDetails: employeeDetailsInfo[] = [
  {
    id: 0,
    firstName: 'Louis',
    lastName: 'Patirick',
    jobTitle: 'designer',
    star: false,
  },
  {
    id: 1,
    firstName: 'Keshav',
    lastName: 'Hemnani',
    jobTitle: 'React Native Developer',
    star: true,
  },
  {
    id: 2,
    firstName: 'Rohit',
    lastName: 'Jain',
    jobTitle: 'designer',
    star: true,
  },
  {
    id: 3,
    firstName: 'Vishal',
    lastName: 'Sharma',
    jobTitle: 'Engineer',
    star: true,
  },
];
type Props = {
  navigation: StackNavigationProp<MainStackParams, 'AddEmployeeScreen'>;
};
export const AddEmployeeScreen: React.FC<Props> = props => {
  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [jobTitle, setJobTitle] = React.useState<string>('');
  const [salary, setSalary] = React.useState<string>('');
  const [data, setData] =
    React.useState<Array<employeeDetailsInfo>>(employeeDetails);

  const addToList = React.useCallback(() => {
    setData((prevData: employeeDetailsInfo[]) => {
      return [
        ...prevData,
        {
          id: data.length + 1,
          firstName: firstName,
          lastName: lastName,
          jobTitle: jobTitle,
          star: false,
        },
      ];
    });

    props.navigation.navigate('HomeScreen', { data: data });
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        backgroundColor={EStyleSheet.value('$green')}
        translucent={false}
      />
      <Text style={styles.titleText}>Enter Employee Details</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitleText}>First Name</Text>
        <TextInput style={styles.inputStyle} onChangeText={setFirstName} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitleText}>Last Name</Text>
        <TextInput style={styles.inputStyle} onChangeText={setLastName} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitleText}>Job Title</Text>
        <TextInput style={styles.inputStyle} onChangeText={setJobTitle} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitleText}>Salary</Text>
        <TextInput
          style={styles.inputStyle}
          keyboardType="decimal-pad"
          onChangeText={setSalary}
        />
      </View>
      <TouchableOpacity style={styles.addButtonStyle} onPress={addToList}>
        <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '$backgroundColor',
    justifyContent: 'center',
  },
  addButtonStyle: {
    backgroundColor: '$green',
    padding: hp('1.5%'),
    borderRadius: hp('1%'),
    marginHorizontal: wp('10%'),
    marginVertical: hp('2%'),
  },
  buttonText: {
    color: '$white',
    fontSize: fonts.fontMediumSecondary,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleText: {
    color: '$green',
    fontSize: fonts.fontJumboSecondary,
    textAlign: 'center',
  },
  inputTitleText: {
    color: '$textSecondary',
    fontSize: fonts.fontMediumSecondary,
  },
  inputStyle: {
    borderBottomWidth: hp('0.1%'),
    borderColor: '$green',
    fontSize: fonts.fontLargeSecondary,
  },
  inputContainer: {
    marginHorizontal: wp('10%'),
    marginVertical: hp('3%'),
  },
});
