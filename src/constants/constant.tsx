import { Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const ICON_SIZE = hp('3.2%');

// ---------Fontsize----------
const fonts = {
  headerFontSize: '1rem',
  headerHeight: hp('7%'),
  headerInputFontSize: hp('2.1%'),
  fontTiny: '0.2rem',
  fontSmall: '0.4rem',
  fontSmallSecondary: '0.5rem',
  fontMedium: '0.8rem',
  fontMediumSecondary: '0.9rem',
  fontLarge: '1rem',
  fontLargeSecondary: '1.1rem',
  fontJumbo: '1.8rem',
  fontJumboSecondary: '1.5rem',
};
// ---------Fontsize----------

export { DEVICE_WIDTH, DEVICE_HEIGHT, wp, hp, fonts, ICON_SIZE };
