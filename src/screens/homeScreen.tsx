import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import EStyleSheet from 'react-native-extended-stylesheet';
import { hp, wp, fonts } from '../constants';
import { MainStackParams } from '../navigation/Main';
import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesome, Entypo, Ionicons } from '@expo/vector-icons/';
import { FlatList } from 'react-native-gesture-handler';
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
  navigation: StackNavigationProp<MainStackParams, 'HomeScreen'>;
  route: any;
};
export const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  const { data } = route.params;
  const [empData, setEmpData] = React.useState<Array<employeeDetailsInfo>>(employeeDetails);

  const navigateToAddEmployee = React.useCallback(() => {
    navigation.navigate('AddEmployeeScreen');
  }, []);

  const capitalizedFirstLetter = React.useCallback((title: any) => {
    if (title === null) {
      return;
    } else {
      return title.charAt(0).toUpperCase();
    }
  }, []);
  const renderList = React.useCallback(({ item }: { item: employeeDetailsInfo }) => {
    const handleStar = (id: number) => {
      const elementIndex = empData.findIndex(
        (element: any) => element.id === id,
      );
      const newArray = [...empData];

      if (newArray[elementIndex].star === false) {
        newArray[elementIndex] = {
          ...newArray[elementIndex],
          star: !newArray[elementIndex].star,
        };
      } else {
        newArray[elementIndex] = {
          ...newArray[elementIndex],
          star: !newArray[elementIndex].star,
        };
      }
      setEmpData(newArray);
    };
    return (
      <View style={styles.cardContainer}>
        <View style={styles.flexStart}>
          <View style={styles.circleAvatar}>
            <Text style={styles.circleText}>
              {capitalizedFirstLetter(item.firstName)}
              {capitalizedFirstLetter(item.lastName)}
            </Text>
          </View>
          <View style={styles.margin}>
            <Text style={styles.nameText}>
              {item.firstName} {item.lastName}
            </Text>
            <Text style={styles.jobTitleText}>{item.jobTitle}</Text>
          </View>
        </View>
        <View style={styles.flexCenter}></View>
        <TouchableOpacity
          onPress={() => handleStar(item.id)}
          style={styles.flexEnd}
        >
          {item.star === true ? (
            <Entypo name="star" size={hp('4%')} color="#CCCC00" />
          ) : (
            <Entypo name="star-outlined" size={hp('4%')} color="black" />
          )}
        </TouchableOpacity>
      </View>
    );
  }, []);

  const keyExtractor = React.useCallback((item: any) => item.id.toString(), []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        backgroundColor={EStyleSheet.value('$green')}
        translucent={false}
      />
      <View style={styles.headerContainer}>
        <View style={styles.flexStart}>
          <FontAwesome
            name="bars"
            size={hp('2.5%')}
            color={EStyleSheet.value('$black')}
          />
        </View>
        <View style={styles.flexCenter}>
          <Text style={styles.headerTitleText}>Inbox</Text>
        </View>
        <View style={styles.flexEnd}>
          <Entypo
            name="dots-three-vertical"
            size={hp('2.5%')}
            color={EStyleSheet.value('$black')}
          />
        </View>
      </View>
      <FlatList
        data={empData}
        renderItem={renderList}
        keyExtractor={keyExtractor}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={navigateToAddEmployee}
      >
        <Ionicons
          name="add-sharp"
          size={hp('3.5%')}
          color={EStyleSheet.value('$white')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '$backgroundColor',
  },
  headerTitleText: {
    color: '$black',
    fontSize: fonts.fontJumbo,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('2%'),
    backgroundColor: '$green',
  },
  flexStart: {
    flexGrow: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  flexCenter: {
    flexGrow: 1,
    alignItems: 'center',
  },
  flexEnd: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
  cardContainer: {
    flexDirection: 'row',
    margin: hp('1%'),
    marginHorizontal: wp('3%'),
    alignItems: 'center',
    borderRadius: hp('1%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '$white',
    padding: hp('1.5%'),
  },
  circleAvatar: {
    height: hp('7%'),
    width: hp('7%'),
    borderRadius: hp('3.5%'),
    backgroundColor: '$green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '$black',
    fontSize: fonts.fontJumboSecondary,
  },
  margin: {
    marginLeft: wp('6%'),
  },
  nameText: {
    color: '$black',
    fontWeight: 'bold',
    fontSize: fonts.fontLargeSecondary,
  },
  jobTitleText: {
    color: '$textSecondary',
    fontSize: fonts.fontMediumSecondary,
  },
  floatingButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: wp('5%'),
    bottom: hp('5%'),
    width: hp('7.5%'),
    height: hp('7.5%'),
    borderRadius: hp('7.5%') / 2,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 4,
    backgroundColor: '$green',
  },
});
