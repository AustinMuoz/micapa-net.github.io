// OneSignal is defined as an array here and uses push calls to support OneSignalSDK.js being loaded async.
var OneSignal = OneSignal || [];

OneSignal.push(["init", {
  appId: "YOUR_APP_ID",
  // Your other init settings
}]);

//Another way to initialize OneSignal
window.OneSignal = window.OneSignal || [];
  
OneSignal.push(function() {
  OneSignal.init({
    appId: "YOUR_APP_ID",
    // Your other init settings
  });
});