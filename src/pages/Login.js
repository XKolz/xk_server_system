//auth & redux
//import;
import {connect} from "react-redux";
import {loginUser} from "./../auth/actions/userActions";
//import {useHistory} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// styled components
import {
    //StyledTextInput,
    StyledFormArea, 
    StyledFormButton, 
    //StyledLabel, 
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



const Login = ({loginUser}) => {
    const navigate = useNavigate();
    //const history = useHistory();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size= 
                {30} style={{ background: "", color: "white", fontWeight: "bold" }}>
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
                        loginUser(values, navigate, setFieldError, setSubmitting)
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput
                            name="email"
                            type="text"
                            label={<span style={{ color: 'white' }}>Email Address</span>}
                            placeholder="olaa69@gmail.com"
                            icon= {<FiMail />}
                             />

                             <TextInput
                            name="password"
                            type="password"
                            label={<span style={{ color: 'white' }}>Password</span>}
                            placeholder="*************"
                            icon= {<FiLock />}
                             />
                             <ExtraText > <TextLink to="#" style={{ background: "", color: "white", fontWeight: "bold",display: 'flex', justifyContent: 'flex-end', marginTop: '-15px', }}>Forgot Password?</TextLink>
                </ExtraText>
                             
                             <ButtonGroup>
                               {!isSubmitting && (<StyledFormButton 
                               type="submit" style={{ background: "", color: "white", fontWeight: "bold" }} >Login</StyledFormButton>)}
                                
                                {isSubmitting && (
                                    <ThreeDots
                                        //Loader
                                    //type="ThreeDots"
                                    color={colors.green}
                                    //height={49}
                                    //width={100}
                                    />
                                )}
                             </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText style={{ background: "", color: "white", fontWeight: "" }}>
                    New here? <TextLink to="/signup" style={{ background: "", color: "white", fontWeight: "bold" }}>Signup</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText style={{ background: "", color: "white", fontWeight: "bold" }}>
                All right reserved &copy;2023
            </CopyrightText>
        </div>
    );
};
//export default Login;
export default  connect(null, {loginUser})(Login);