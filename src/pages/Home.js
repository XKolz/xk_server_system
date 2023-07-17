import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup } 
from './../components/Styles';

//Logo
import Logo from "./../assets/Logo.png";

const Home = () => {
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
            }}>
                <Avatar image={Logo} />
            </div>
            <StyledTitle size={37}> Peace of Mind to Communicate Freely
            </StyledTitle>
            <StyledSubTitle size={27}>
            Get help with code & applications from anonymous engineers.
            </StyledSubTitle>

            <ButtonGroup>
            <StyledButton to="/login" style={{ background: "", color: "slategray", fontWeight: "bold" }}> Login </StyledButton>
            <StyledButton to="/signup" style={{ background: "", color: "slategray", fontWeight: "bold" }}>Signup</StyledButton>
            </ButtonGroup>
        </div>    
    );
}
export default Home;