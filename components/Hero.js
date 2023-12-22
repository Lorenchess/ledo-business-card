import { View, Image, StyleSheet, useWindowDimensions } from "react-native";
import { GlobalStyles } from "../constants/styles";
import BusinessServices from "./BusinessServices";
import { AnimatedComponent } from "../utils/utils";
import { CallToActions } from "./CallToActions";

function Hero() {

    const { width } = useWindowDimensions();

    return (
        <>
           <View style={[styles.subContainers, {marginTop: 50}]}>
                <AnimatedComponent animationType={'fadeInDown'} style={{
                    ...styles.imageContainer,
                    width: width< 380 ? 135 : 215,
                    height: width< 380 ? 150 : 235,
                }}>
                <Image 
                    source={require('../assets/images/ledo-no-bg.png')}
                    style={styles.image}
                />  
                </AnimatedComponent>
           </View>
           <View style={[styles.subContainers, {marginVertical: width < 380 ? 10 : 20}]}>
              <BusinessServices /> 
           </View>
               
            <View style={styles.callToActions}>
              <CallToActions />    
            </View>
        </>
        
    )
}

export default Hero;


const styles= StyleSheet.create({
    
    rootContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center'
      },
      subContainers: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center'
      },
      imageContainer: {

        borderRadius: 150,
        borderWidth: 1,
        borderColor: 'transparent',
        overflow: 'hidden',
        margin: 36,
      },
      image: {
        width: '100%',
        height: '100%',
      },
      callToActions: {
        flex: 1,
      },
      summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
      },
      highlight: {
        fontFamily: 'open-sans-bold',
        color: GlobalStyles.colors.primaryDark,
      },
});
