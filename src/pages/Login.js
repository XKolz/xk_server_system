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
} from "./../components/Styles";

import Logo from "./../assets/Logo.png";

//formik
import {Formik, Form} from "formik";
import { TextInput } from '../components/FormLib';
import * as Yup from 'yup';

//Icons
import { FiMail, FiLock } from 'react-icons/fi';

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
/>

//auth & redux
import {connect} from "redux-thunk";
import {loginUser} from "./../auth/actions/userActions";
import { UseHistory } from "react-router-dom";


const Login = ({loginUser}) => {
    const history = UseHistory();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size= 
                {30}>
                    Member Login
                </StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={Yup.object({
                            email: Yup.string().email("Invalid email address")
                            .required("Required"),
                            password: Yup.string()
                            .min(8, "Password is too short")
                            .max(30, "Password is too long")
                            .required("Required")
                        })}

                    onSubmit={(values, {setSubmitting, setFieldError}) => {
                        //console.log(values);
                        loginUser(values, history, setFieldError, setSubmitting)
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput
                            name="email"
                            type="text"
                            label="Email Address"
                            placeholder="olaga1@gmail.com"
                            icon= {<FiMail />}
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
                               type="submit">Login</StyledFormButton>)}
                                
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
                    New here? <TextLink to="/signup">Signup</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All right reserved &copy;2022
            </CopyrightText>
        </div>
    );
};

export default  connect(null, {loginUser})(Login);