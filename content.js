
// Fill in credentials and submit form
chrome.storage.sync.get(['username', 'password'], function(data) {
    if (data.username && data.password) {
        console.log('Username:', data.username);
        console.log('Password:', data.password);
        document.querySelector('div.fel input[name="username"]').value = data.username;
        document.querySelector('div.fel input[name="password"]').value = data.password;
        console.log('Form submitted.');
        document.querySelector('form').submit();

        // Send a message to the background script to request closing the tab
        chrome.runtime.sendMessage({ closeTab: true });
    }
});

  