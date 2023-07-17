import { connect } from 'react-redux';
import { logoutUser } from '../auth/actions/userActions';
import { useNavigate } from 'react-router-dom';

import { 
    StyledTitle, 
    //StyledSubTitle, 
    Avatar, 
    //StyledButton,
    Button, 
    ButtonGroup,
    StyledFormArea, 
    colors,
    ExtraText
} 
from '../components/Styles';

//Logo
import Logo from "./../assets/Logo.png";

//auth & redux 


const Dashboard = ({logoutUser, user}) => {
    const navigate = useNavigate();

    // const handleLogout = () => {
    //     logoutUser(navigate);
    //   };

    

    return (
        <div>
            <div style ={{
                position: "absolute",
                top: 0,
                left: 0,
                background: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start",
            }}
            >
                <Avatar image={Logo} />
            </div>
            <StyledFormArea bg={colors.dark2}>
            <StyledTitle size={65}>Welcome, {user.name}</StyledTitle>
            <ExtraText color={colors.light1} style={{ background: "", color: "white", fontWeight: "bold" }} >{user.email}</ExtraText>
            <ExtraText color={colors.light1} style={{ background: "", color: "white", fontWeight: "bold" }}>
                {new Date(user.dateOfBirth).toLocaleDateString()}</ExtraText>
            <ButtonGroup>
            <Button style={{ background: "", color: "slategray", fontWeight: "bold" }} 
            to="#" onClick={() => logoutUser(navigate)}>Logout</Button>
            {/* <Button style={{ background: "" }} to="#" onClick={() => logoutUser(navigate)}>Logout</Button> */}
            {/* <Button className="login-button">Login</Button> */}
            {/* <StyledButton to="#" onClick={() => logoutUser(navigate)}>Logout</StyledButton> */}
            {/* <StyledButton onClick={handleLogout}>Logout</StyledButton> */}
            {/* <button onClick={handleLogout}>Logout</button> */}
            {/* <StyledButton onClick={logoutUser}>Logout</StyledButton> */}
            </ButtonGroup>

            </StyledFormArea>
            
        </div>    
    );
}
const mapStateToProps = ({session}) => ({
   user: session.user
})

//export default connect(null, {logoutUser})(Dashboard);
export default connect(mapStateToProps, {logoutUser})(Dashboard);