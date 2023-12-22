import { StyleSheet, Text, TextInput, View } from "react-native"
import { GlobalStyles } from "../../constants/styles"

export const Input = ({label, style, textInputConfig}) => {

    const inputStyles = [styles.input]

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.label} {...textInputConfig}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
      },
      label: {
        fontSize: 12,
        color: GlobalStyles.colors.primaryColor,
        marginBottom: 4,
      },
      input: {
        backgroundColor: GlobalStyles.colors.colorSecondary,
        color: GlobalStyles.colors.colorDarker,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
      },
      inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
      }
})