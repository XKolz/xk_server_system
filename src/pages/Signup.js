//auth & redux
import {connect} from "react-redux";
import {signupUser} from "./../auth/actions/userActions";
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
//import {connect} from "react-redux";
//import {signupUser} from "./../auth/actions/userActions";
//import { useHistory } from "react-router-dom";

const Signup = ({signupUser}) => {
    const navigate = useNavigate();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size= 
                {30} style={{ background: "", color: "white", fontWeight: "bold" }}>
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
                        //console.log(values);
                        signupUser(values, navigate, setFieldError, setSubmitting)
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput
                            name="name"
                            type="text"
                            label={<span style={{ color: 'white' }}>Full Name</span>}
                            placeholder="Olaa Simpson"
                            icon= {<FiUser />}
                             />
                             <TextInput
                            name="email"
                            type="text"
                            label={<span style={{ color: 'white' }}>Email Address</span>}
                            placeholder="olaa69@gmail.com"
                            icon= {<FiMail />}
                             />
                             <TextInput
                            name="dateOfBirth"
                            type="date"
                            label={<span style={{ color: 'white' }}>Date of Birth</span>}
                            icon= {<FiCalendar />}
                             />

                             <TextInput
                            name="repeatPassword"
                            type="password"
                            label={<span style={{ color: 'white' }}>Password</span>}
                            placeholder="*************"
                            icon= {<FiLock />}
                             />
                             <TextInput
                            name="password"
                            type="password"
                            label={<span style={{ color: 'white' }}>Repeat Password</span>}
                            placeholder="*************"
                            icon= {<FiLock />}
                             />
                             <ButtonGroup>
                               {!isSubmitting && (<StyledFormButton 
                               type="submit" style={{ background: "", color: "white", fontWeight: "bold" }}>Signup</StyledFormButton>)}
                                
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
                    Already have an account? <TextLink to="/login" style={{ background: "", color: "white", fontWeight: "bold" }}>Login</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText style={{ background: "", color: "white", fontWeight: "bold" }}>
                All right reserved &copy;2023
            </CopyrightText>
        </div>
    );
};
//export default Signup;
export default connect(null, {signupUser}) (Signup);