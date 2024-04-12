document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById('loginButton');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
  
    // Load stored credentials
    chrome.storage.sync.get(['username', 'password'], function(data) {
      if (data.username && data.password) {
        usernameInput.value = data.username;
        passwordInput.value = data.password;
      }
    });
  
    loginButton.addEventListener('click', function () {
      var username = usernameInput.value;
      var password = passwordInput.value;
      
      // Store credentials
      chrome.storage.sync.set({ 'username': username, 'password': password });
      // new tab
      chrome.tabs.create({url: 'http://www.msftconnecttest.com/redirect'});
    });
});

  