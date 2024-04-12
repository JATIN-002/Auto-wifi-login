// Listen for messages from content scripts
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Check if the message is intended to close a tab and if sender.tab is defined
  if (message.closeTab && sender.tab) {
      // Delay the tab closure by 3 seconds (adjust the time as needed)
      setTimeout(function() {
          // Close the tab that sent the message
          chrome.tabs.remove(sender.tab.id, function() {
              console.log("Tab closed successfully.");
          });
      }, 2000); // 3000 milliseconds = 3 seconds
  } else {
      // Handle the message differently or log an error message
      console.error("Error: Unable to close tab. Invalid sender or tab information.");
  }
});

