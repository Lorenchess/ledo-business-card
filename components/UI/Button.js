import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native"
import { GlobalStyles } from "../../constants/styles"

export const Button = ({children, onPress, style}) => {

    const { width } = useWindowDimensions();

    return (
      <View style={style}>
        <Pressable onPress={onPress} style={({pressed}) => pressed && StyleSheet.pressed}>
            <View style={styles.button}>
                <Text style={[styles.buttonText, {fontSize: width < 380 ? 14 : 20, fontWeight: "bold"}]}>
                    {children}
                </Text>
            </View>
        </Pressable>
      </View>
    )

}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        padding: 8,
        borderWidth: 1.5,
        borderColor: GlobalStyles.colors.colorDarker,
        backgroundColor: '#ddf6fb',
        // margin: 4
      },
      flat: {
        backgroundColor: 'transparent',
      },
      buttonText: {
        color: GlobalStyles.colors.colorDarker,
        textAlign: 'center',
      },

      pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primaryColor,
        borderRadius: 4,
      },
})