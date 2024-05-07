document.addEventListener("DOMContentLoaded", function() {
  // Dark Mode 
  const darkModeToggle = document.querySelector("#darkModeToggle");
  darkModeToggle.addEventListener("change", function() {
    document.body.classList.toggle("dark-mode", darkModeToggle.checked);
  });

  // Notification js
  const notificationToggle = document.querySelector("#notificationToggle");
  notificationToggle.addEventListener("change", function() {
    if (notificationToggle.checked) {
      alert("Notifications enabled!");
    } else {
      alert("Notifications disabled!");
    }
  });

  // fucntionlity add for data  saving mode
  document.getElementById("dataSavingToggle").addEventListener("click", function() {
    document.body.classList.toggle("data-saving-mode");
    var dataSavingStatus = document.getElementById("dataSavingStatus");
    if (document.body.classList.contains("data-saving-mode")) {
      dataSavingStatus.textContent = "ON";
  
    } else {
      dataSavingStatus.textContent = "OFF";
    
    }
  });
  
});
