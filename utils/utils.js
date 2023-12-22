import { useEffect, useRef } from "react"
import { Animated } from "react-native"

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