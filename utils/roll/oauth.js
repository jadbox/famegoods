const AUTHORIZATION_GRANT = "authorization_code";
// const REFRESH_GRANT = "refresh_token";

function toQueryParams(params) {
  const esc = encodeURIComponent;

  return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
}

// TODO: Implement refresh token

class OauthClient {
  constructor(issuerURL, clientID, scopes) {
    console.log("Initializing oauth client...");

    this.issuerURL = issuerURL;
    this.clientID = clientID;
    this.scopes = scopes;
    this.redirectURL = "http://localhost:3000";

    this.refreshSubscribers = [];
    this.syncToken();

    // this.readCodeFromParams();
    // if (this.hasCode()) {
    //   this.exchangeCodeForToken();
    // }

    // this.syncOrUpdateStateAndNonce();
  }

  // syncOrUpdateStateAndNonce = () => {
  //   if (!this.hasToken() && !this.hasCode()) {
  //     // var urlParams = new URLSearchParams(location.search);
  //     // localStorage.setItem("state", urlParams.get('id'));
  //     // this.nonce = crypto.getRandomValues(new Uint8Array(4)).join('');
  //     // localStorage.setItem("nonce", this.nonce);
  //   }
  //   this.state = localStorage.getItem("state");
  //   this.nonce = localStorage.getItem("nonce");
  // }

  hasToken = () => {
    // return !_.isEmpty(this.token);
    return false;
  }

  hasCode = () => {
    // return !_.isEmpty(this.code);
    return false;
  }

  getOauthLoginURL = () => {
    var params = {
      client_id: this.clientID,
      redirect_uri: this.redirectURL,
      scopes: this.scopes,
      response_type: "code",
      response_mode: "form_post",
      state: this.state,
      nonce: this.nonce
    };

    return `${this.issuerURL}/auth?${toQueryParams(params)}`;
  };

  initiateLogin = () => {
    console.log("Initiating login...")
    let loginURL = this.getOauthLoginURL();
    window.location.href = loginURL;
  }

  syncToken = () => {
    this.token = localStorage.getItem("token");
    this.refreshToken = localStorage.getItem("refreshToken");
    this.idToken = localStorage.getItem("idToken");
  }

  updateTokenAndReload = (data) => {
    console.log("Token: ", data);

    this.token = data["access_token"];
    localStorage.setItem("token", this.token);

    this.refreshToken = data["refresh_token"];
    localStorage.setItem("refreshToken", this.refreshToken);

    this.idToken = data["id_token"];
    localStorage.setItem("idToken", this.idToken);
    // console.log('userID', this.user.userID);

    // data["id"] = localStorage.getItem("state");
    // this.data["symbol"] = localStorage.getItem("symbol");
    // this.data["amount"] = localStorage.getItem("amount");

    //uibuilder.send({ topic: "roll", payload: data });
    window.location.href = "https://roll.abridged.io"; //window.location.origin;
  }

  exchangeCodeForToken = () => {
    fetch(`${this.issuerURL}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: toQueryParams({
        code: this.code,
        grant_type: AUTHORIZATION_GRANT,
        redirect_uri: this.redirectURL,
        client_id: this.clientID
      })
    })
      .then(response => response.json())
      .then(this.updateTokenAndReload)
      .catch(error => console.error('error: ', error));
  }

  onRefresh = (fn) => {
    // this.refreshSubscribers = _.concat(this.refreshSubscribers, fn)
  }
}
export default OauthClient;
