importScripts("https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.2/firebase-messaging.js");
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts("https://www.gstatic.com/firebasejs/8.6.2/firebase-analytics.js");

firebase.initializeApp({
  apiKey: "AIzaSyCTJ-g_pVOPW1ZOyOYzs2X2s520KounYAg",
  authDomain: "maps-notif.firebaseapp.com",
  databaseURL: "https://maps-notif.firebaseio.com",
  projectId: "maps-notif",
  storageBucket: "maps-notif.appspot.com",
  messagingSenderId: "734068836291",
  appId: "1:734068836291:web:ed25910189b1e16368df76",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notification = JSON.parse(payload.data.notification);
  const notificationTitle = notification.title;

  return self.registration.showNotification(notificationTitle, notification);
});
