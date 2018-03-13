
import { Dimensions } from 'react-native';
const window = Dimensions.get('window');
const screenWidth = Math.min(window.width, window.height);
const  sizes={
width:window.width,
height:window.height,
};
export default sizes;
