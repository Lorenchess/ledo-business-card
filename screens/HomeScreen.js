import { StyleSheet, Text, View, ImageBackground,Dimensions } from "react-native";
import Hero from "../components/Hero";

function HomeScreen() {

  

  return (
    <ImageBackground
      source={require('../assets/images/background-layer.png')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.heroContainer}>
        <Hero />
      </View>
        

    </ImageBackground>
    
  )
  
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,

  },
  backgroundImage: {
    opacity: 0.30
  },
  heroContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});