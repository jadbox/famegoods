import Roll from './roll';
import OauthClient from './oauth';

// https://app.tryroll.com/error?error=invalid_request&error_description=The+request+is+missing+a+required+parameter%2C+includes+an+invalid+parameter+value%2C+includes+a+parameter+more+than+once%2C+or+is+otherwise+malformed&error_hint=The+%22redirect_uri%22+parameter+does+not+match+any+of+the+OAuth+2.0+Client%27s+pre-registered+redirect+urls.
// https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fmaster.dlatdcmblmjqi.amplifyapp.com%2F
// localhost callback urls
class Main {
  constructor(oauthClient, OauthClient) {

    this.oauthClient = oauthClient;
    this.user = {};

    if (this.oauthClient.hasToken()) {
      this.rollClient = new Roll(this.oauthClient.token);
      this.oauthClient.onRefresh(this.rollClient._updateToken);
    }
  }

  renderUserInfo = () => {
    //this.rollClient
    // .fetchUserInfo()
    // .then((user) => {
    //   this.user = user;
    //   //$("div.user-info").append(`<p>username: @${this.user.username}</p>`);
    var data = {
      "token": localStorage.getItem("token"),
      "refreshToken": localStorage.getItem("refreshToken"),
      "idToken": localStorage.getItem("idToken"),
      "user": this.user,
      "id": localStorage.getItem("state")
    };
    var serverURL = localStorage.getItem("serverURL") + "/rolltoken";
    // $.ajax({
    //   type: "POST",
    //   url: serverURL,
    //   data: data,
    //   success: this.loggedIn(),
    //   dataType: "json"
    // });
    localStorage.clear();

    // })
    // .catch((e) => {
    //   console.error(e);
    // });
  };

  loggedIn = () => {
    console.log('loggedIn');
    // $("body").addClass("logged-in");
    // $("#loggedIn").show();
  }

  checkHasBalance = () => {
    const symbol = localStorage.getItem("symbol"); //$("input.symbol").val();
    const amount = localStorage.getItem("amount"); //$("input.amount").val();
    this.rollClient
      .hasBalance(this.user.userID, symbol.toUpperCase(), amount)
      .then((resp) => {
        // if (resp.hasbalance) {
        //   $("#success").show();
        // } else {
        //   $("#insufficient_funds").show();
        // }
      })
      .catch((err) => {
        console.error(err);
        // $("p.hasBalanceResult").text(
        //   `Error while checking balance: ${err.message}`
        // );
      });
  };

  onClickLogin = () => {
    console.log("onClickLogin main.js...");
    this.oauthClient.initiateLogin();
  };
}
export default Main;
