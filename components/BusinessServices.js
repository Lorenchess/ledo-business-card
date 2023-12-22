import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { AnimatedComponent } from "../utils/utils";
import {Card} from 'react-native-paper'

function BusinessServices( ) {

    const { width } = useWindowDimensions();
  
    return (
      <View style={styles.container}>
        <AnimatedComponent animationType={'fadeInUp'}>
            <View style={styles.animatedContent}>
                <Card>
                    <Card.Content>
                      <Text style={[styles.text, {fontSize: width < 380 ? 13 : 18, fontWeight: width < 380 ? "500" : "bold"}]}>Lecciones Privadas</Text>
                      <Text style={[styles.text, {fontSize: width < 380 ? 13 : 18, fontWeight: width < 380 ? "500" : "bold"}]}>Simultaneas</Text>  
                      <Text style={[styles.text, {fontSize: width < 380 ? 13 : 18, fontWeight: width < 380 ? "500" : "bold"}]}>Conferencias de Club</Text>  
                    </Card.Content>
                </Card>
                
            </View>  
        </AnimatedComponent>
      </View>
    );
}


export default BusinessServices;


const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
    },
   animatedContent: {
    flex: 1,
    flexDirection: 'column',  
    justifyContent: 'space-around' 
   },
   text: {
     textAlign: 'center',
     margin: 4,

   }
})