import axios from "axios";
import { sessionService } from "redux-react-session";

export const loginUser = (credentials, navigate, setFieldError, setSubmitting) => {
  // Make checks and get some data

  return () => {
  axios.post("https://loginserver011.onrender.com/user/signin", credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const { data } = response;

      if (data.status === "FAILED") {
        const { message } = data;

        // check for specific input error
        if (message.includes("credentials")) {
          setFieldError("email", message);
          setFieldError("password", message);
        } else if (message.includes("password")) {
          setFieldError("password", message);
        }
      } else if (data.status === "SUCCESS") {
        const userData = data.data[0];

        const token = userData._id;

        sessionService
          .saveSession(token)
          .then(() => {
            sessionService
              .saveUser(userData)
              .then(() => {
                navigate("/dashboard");
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      }

      // complete submission
      setSubmitting(false);
    })
    .catch((err) => console.error(err));
  }
};

export const signupUser = (credentials, navigate, setFieldError, setSubmitting
  ) => {
    return (dispatch) => {
  // Implementation for signupUser function
  axios.post("https://loginserver011.onrender.com/user/signup", credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      const {data} = response;
      if (data.status === "FAILED") {
        const {message} =data;

        //Check for a specfic error
        if (message.includes("name")){
          setFieldError("name", message);
        } else if (message.includes("email")){
          setFieldError("email", message);
        } else if (message.includes("date")) {
          setFieldError("dateOfBirth", message);
        } else if (message.includes("password")) {
          setFieldError("password", message)
        }

        //complete submission
        setSubmitting(false);

      } else if (data.status === "SUCCESS") {
        //Login user after successful signup
        const {email, password} =credentials;

        dispatch(
          loginUser({email, password}, navigate, setFieldError, setSubmitting)
    );
      }
    }).catch(err => console.error(err))
  }
};

export const logoutUser = (navigate) => {
  return () => {
    //console.log("Logging out...");
    sessionService.deleteSession();
    sessionService.deleteUser();
    navigate("/");
  }
  // Implementation for logoutUser function
};
