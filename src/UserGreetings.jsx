import propTypes from 'prop-types'

function UserGreetings(props) {

    //OTHER WAY OF DOING TERNARY OPERATION
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please Login to Continue</h2>

    return (props.isLoggedIn ? welcomeMessage : loginPrompt)
    // if (props.isLoggedIn) {
    //     return <h2 className="welcome-message">Welcome {props.username}</h2>
    // }
    // else {
    //     return <h2 className="login-prompt">Please login to Continue</h2>
    // }

    // return(props.isLoggedIn ? <h2>Welcome {props.username}</h2>:<h2>Please login to Continue</h2>)


}

UserGreetings.propTypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
}

UserGreetings.defaultProps = {
    isLoggedIn: false,
    username: 'Guest',
}
export default UserGreetings