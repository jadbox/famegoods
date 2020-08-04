const ROLL_API_URL = "https://api.tryroll.com";

class Roll {
  constructor(token) {
    this.authToken = token;
  }

  _getAuthHeaders = () => {
    var authHeaders = new Headers();
    authHeaders.append("Authorization", `Bearer ${this.authToken}`);

    return authHeaders;
  };

  _updateToken = (token) => {
    this.authToken = token;
  };

  fetchUserInfo = async () => {
    var requestOptions = {
      method: "GET",
      headers: this._getAuthHeaders(),
    };

    var response = await fetch(
      `${ROLL_API_URL}/v2/users/session`,
      requestOptions
    );

    if (!response.ok) {
      var message = await response.json();
      console.error("Unable to fetch info: ", response.status, message);
      throw new Error(response.statusText);
    }

    return response.json();
  };

  hasBalance = async (userID, symbol, amount) => {
    const requestOptions = {
      method: "GET",
      headers: this._getAuthHeaders(),
    };

    return new Promise(async (resolve, reject) => {
      try {
        const resp = await fetch(
          `${ROLL_API_URL}/v1/users/${userID}/hasbalance/${symbol}/${amount}`,
          requestOptions
        );

        const body = await resp.json();
        resp.ok ? resolve(body) : reject(body);

      } catch (err) {
        console.error(err);
      }
    });
  };
}
export default Roll;
