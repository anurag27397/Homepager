function getUserInfo(interactive) {
    xhrWithAuth('GET',
                'https://www.googleapis.com/plus/v1/people/me',
                interactive,
                onUserInfoFetched);
  }

   function onUserInfoFetched(error, status, response) {
    if (!error && status == 200) {
      changeState(STATE_AUTHTOKEN_ACQUIRED);
      sampleSupport.log(response);
      var user_info = JSON.parse(response);
      populateUserInfo(user_info);
    } else {
      changeState(STATE_START);
    }
  }

   function populateUserInfo(user_info) {
    user_info_div.innerHTML = "Hello " + user_info.displayName;
}
    