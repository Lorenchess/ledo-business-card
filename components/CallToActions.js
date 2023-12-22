import { StyleSheet, View } from "react-native"
import { Button } from "./UI/Button"
import { AnimatedComponent } from "../utils/utils"

export const CallToActions = () => {
  return (
    <View style={styles.container}>
        <AnimatedComponent animationType={'fadeInUp'} style={styles.container}>
            <Button style={styles.button} onPress={()=> {console.log('btn1 pressed')}}>
                Contactame
            </Button>
            <Button style={styles.button} onPress={()=> {console.log('btn2 pressed')}}>
                Trallectoria
            </Button>
        </AnimatedComponent>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    
  },
  button: {
    margin: 8
  }
})