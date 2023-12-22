import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import emailjs from '@emailjs/browser';
import Config from 'react-native-config';
import { logger, showToast } from '../utils/utils';
import { ContactFormSchema } from './UI/ContactFormSchema';


export const ContactForm = (props) => {

    const sendEmail = (values) => {

        const serviceId = Config.EMAILJS_SERVICE_ID;
        const templateId = Config.EMAILJS_TEMPLATE_ID;
        const publicKey = Config.EMAILJS_PUBLIC_KEY;


        const templateParameters = {
            from_name: values.name,
            user_email: values.email,
            user_phone: values.phone,
            to_name: "Roberto Gomez Ledo",
            message: values.message
        }

        emailjs.send(serviceId, templateId, templateParameters, publicKey)
          .then(response => {
            logger(response)
            showToast("success", "El mensaje fue enviado satisfactoriamente! Por favor revise su correo electronico.")
          },
          (error) => {
            logger(error)
            showToast("error", "Ocurrio un error, su mensaje no pudo ser enviado. Intente otra vez o contacte directamente: robertogomezledo@yahoo.com")
          })
          
    }

    return (
        <Formik
            initialValues={{ name: '', email: '', phone: '', message: '',  }}
            validationSchema={ContactFormSchema}
            onSubmit={(values, { resetForm }) => {
                sendEmail(values)
                resetForm()
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        placeholder="Your Name"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder="Your Email"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        value={values.phone}
                        placeholder="Your Phone"
                        keyboardType="phone-pad"
                    />
                    <TextInput
                        style={[styles.input, styles.multilineInput]}
                        onChangeText={handleChange('message')}
                        onBlur={handleBlur('message')}
                        value={values.message}
                        placeholder="Your Message"
                        multiline
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
        
    )
    
}

const styles = StyleSheet.create({
    formContainer: {
      padding: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    multilineInput: {
      height: 100,
      textAlignVertical: 'top',
    },
  });