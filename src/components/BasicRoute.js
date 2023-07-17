//Dashboard can't be accessed unless logged in

import {Route, Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
//import { BrowserRouter as Router, Switch } from 'react-router-dom';

const BasicRoute = ({children, authenticated, ...rest}) => {
    return (
        <Route
            {...rest}
            render={
                ({location}) => !authenticated ? (children) : (
                    <Navigate
                        to={{
                            pathname: "/dashboard",
                            state: {from: location}
                        }}
                    
                    
                    />
                )
            }
        />
    )

}

const mapStateToPros = ({session}) => ({
    authenticated: session.authenticated,
})

export default connect(mapStateToPros)(BasicRoute);