import React from 'react'
import OauthClient from '../utils/roll/oauth';
import Main from '../utils/roll/main';

class LoginWithRoll extends React.Component {
    constructor(props) {
        super(props);
        console.log('props', props)
        this.state = {};
    }
    componentDidMount() {
        this.readCallerParams();
    }

    componentWillUnmount() {
    }

    handleClick() {
        console.log('Login with roll...');
        localStorage.clear();
        // add check for required parameters?
        const issuerURL = "https://oauth.tryroll.com/oauth2";
        const clientID = "collabland";
        const scopes = ["offline", "openid", "base", "read-tx"];
        const client = new OauthClient(issuerURL, clientID, scopes);
        const app = new Main(client)
        app.onClickLogin();
    }

    readCallerParams() {
        console.log('readCallerParams');
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code) {
            // callback from roll auth
            console.log('callback from roll auth');
        } else {
            console.log('callback from node-red auth');
            const symbol = urlParams.get('symbol');
            if (symbol !== null) {
                localStorage.setItem("symbol", symbol);
            }

            const amount = urlParams.get('amount');
            if (amount !== null) {
                localStorage.setItem("amount", amount);
            }

            const serverURL = urlParams.get('serverURL');
            if (serverURL !== null) {
                localStorage.setItem("serverURL", serverURL);
            }
            const id = urlParams.get('id');
            if (id !== null) {
                localStorage.setItem("state", id);
            }
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)} className="bg-blue-500 rounded-lg p-3 text-white text-center" >
                    Sign to Roll
                </button>

            </div>
        );
    }
}


// const readCodeFromParams = () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     // const code = urlParams.get('code')
//     // this.code = code;

//     const symbol = urlParams.get('symbol');
//     if (symbol !== null) {
//         localStorage.setItem("symbol", symbol);
//     }

//     const amount = urlParams.get('amount');
//     if (amount !== null) {
//         localStorage.setItem("amount", amount);
//     }

//     const serverURL = urlParams.get('serverURL');
//     if (serverURL !== null) {
//         localStorage.setItem("serverURL", serverURL);
//     }
//     const id = urlParams.get('id');
//     if (id !== null) {
//         localStorage.setItem("state", id);
//     }
// }

// async function login() {
//     localStorage.clear();
//     readCodeFromParams();
//     // add check for required parameters?
//     console.log('Login with roll')
//     const issuerURL = "https://oauth.tryroll.com/oauth2";
//     const clientID = "collabland";
//     const scopes = ["offline", "openid", "base", "read-tx"];
//     const client = new OauthClient(issuerURL, clientID, scopes);
//     const app = new Main(client)
//     app.onClickLogin();
// }

// const Login = () => (
//     <button className="loginButtonRoll" onClick={login}>
//         Log in with Roll
//     </button>
// )
export default LoginWithRoll;
