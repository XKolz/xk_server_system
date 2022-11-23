// styled components
import {
    StyledTextInput,
    StyledFormArea, 
    StyledFormButton, 
    StyledLabel, 
    Avatar, 
    StyledTitle, 
    colors,
    ButtonGroup,
    ExtraText,
    TextLink,
    CopyrightText
} from './../components/Styles';

import Logo from './../assets/Logo.png';

//formik
import {Formik, Form} from 'formik';
import { TextInput } from '../components/FormLib';
import * as Yup from 'yup';

//Icons
import { FiMail, FiLock, FiUser, FiCalendar } from 'react-icons/fi';

//Loader
//import Loader from 'react-loader-spinner';
//import * as Loader from 'react-loader-spinner';
import { ThreeDots } from 'react-loader-spinner'
;<ThreeDots
  //height="80"
  //width="80"
  radius="9"
  //color="green"
  ariaLabel="loading"
  //wrapperStyle
 // wrapperClass
/>
import {connect} from "redux-thunk";
import {signupUser} from "./../auth/actions/userActions";
import { UseHistory } from "react-router-dom";

const Signup = ({signupUser}) => {
    const history = UseHistory();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size= 
                {30}>
                    Member Signup
                </StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                        dateOfBirth: "",
                        name: "",
                    }}
                    validationSchema={Yup.object({
                            email: Yup.string().email("Invalid email address")
                            .required("Required"),
                            password: Yup.string()
                            .min(8, "Password is too short")
                            .max(30, "Password is too long")
                            .required("Required"),
                            name: Yup.string().required("Required"),
                            dateOfBirth: Yup.date().required("Required"),
                            repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Password must match")
                        })}

                    onSubmit={(values, {setSubmitting, setFieldError}) => {
                        console.log(values);
                        signupUser(values, history, setFieldError, setSubmitting)
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput
                            name="name"
                            type="text"
                            label="Full Name"
                            placeholder="Olga Simpson"
                            icon= {<FiUser />}
                             />
                             <TextInput
                            name="email"
                            type="text"
                            label="Email Address"
                            placeholder="olaga1@gmail.com"
                            icon= {<FiMail />}
                             />
                             <TextInput
                            name="dateOfBirth"
                            type="date"
                            label="Date of Birth"
                            icon= {<FiCalendar />}
                             />

                             <TextInput
                            name="repeatPassword"
                            type="password"
                            label="Repeat Password"
                            placeholder="*************"
                            icon= {<FiLock />}
                             />
                             <TextInput
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="*************"
                            icon= {<FiLock />}
                             />
                             <ButtonGroup>
                               {!isSubmitting && (<StyledFormButton 
                               type="submit">Signup</StyledFormButton>)}
                                
                                {isSubmitting && (
                                    <ThreeDots
                                        //Loader
                                    //type="ThreeDots"
                                    color={colors.theme}
                                    //height={49}
                                    //width={100}
                                    />
                                )}
                             </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    Already have an account? <TextLink to="/login">Login</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All right reserved &copy;2022
            </CopyrightText>
        </div>
    );
};

export default connect(null, {signupUser}) (Signup);