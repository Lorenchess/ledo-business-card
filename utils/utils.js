import { useEffect, useRef } from "react"
import { Animated } from "react-native";
import Toast from 'react-native-toast-message';

export const AnimatedComponent = ({ children, style, animationType, ...props }) => {
   const animationValue= useRef(new Animated.Value(0)).current;

   useEffect(() => {
    Animated.timing(animationValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
    }).start();
   }, [animationValue])

   const animationStyles = {
    opacity: animationValue,
    transform: [
        {
            translateY: animationValue.interpolate({
                inputRange: [0, 1],
                outputRange: animationType === 'fadeInUp' ? [50, 0] : animationType === 'fadeInDown' ? [-50, 0] : [0, 0],
            }),
        }
    ]
   };

   return (
    <Animated.View style={[style, animationStyles]} {...props} >
      { children }
    </Animated.View>
   )
}

export const showToast = ({type, message}) => {
  Toast.show({
    type: type.toLowerCase() === 'success' ? 'success' : 'error',
    text1: message
  })
}

export const logger = (data) => {
    const timestamp = new Date().toISOString();
    const dataType = typeof data;

    const styleHeader = 'color: blue; font-weight: bold;';
    const styleType = 'color: brown;';
    const styleValue = 'color: green;';

    console.log(`%cDebug Log - ${timestamp}`, styleHeader);
    console.log('%cType:', styleType, dataType);

    if (data === null) {
        console.log('%cValue: null', styleValue);
        return;
    }

    switch (dataType) {
        case 'undefined':
        case 'number':
        case 'boolean':
        case 'string':
            console.log('%cValue:', styleValue, data);
            break;
        case 'object':
            if (data instanceof Error) {
                console.error('%cError:', 'color: red;', data.message);
                console.error(data.stack);
            } else if (Array.isArray(data)) {
                console.log('%cArray Length:', styleType, data.length);
                console.table(data); // Using console.table for better array display
            } else {
                // For object, using console.dir for a more interactive display
                console.log('%cObject:', styleType);
                console.dir(data);
            }
            break;
        case 'function':
            console.log('%cFunction:', styleType, data.name || '[anonymous]');
            break;
        default:
            console.log('%cUnrecognized type:', styleType, dataType);
            console.log('%cValue:', styleValue, data);
    }
}