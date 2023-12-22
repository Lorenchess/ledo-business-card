import * as yup from 'yup';


export const ContactFormSchema = () => yup.object.shape({
  name: yup.string()
  .min(2, "Name must be at least 2 characters")
  .max(20, "Name must be less than 20 characters")
  .required('Your Name is required'),
  email: yup.string()
  .email('Invalid email format')
  .required("Email is requiered"),
  phone: yup.string().test(
    "is-valid-phone", "Invalid phone number",
     (value) => {
        const spanishRegex = /^(?:(?:\+|00)34)?[6789]\d{8}$/;
        const internationalRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/; 
        if(value) {
            if(spanishRegex.test(value)) {
                return true;
            }
            return internationalRegex.test(value);
        }

        return false;
     }
  ),
  message: yup.string()
  .min(2, "Message must be at least 2 characters")
  .max(500, "Message must be less than 500 characters")
  .required("Message is required")
})