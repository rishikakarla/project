// signin.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBWqK7NTO31AyxdMmHjsJ5_Pq-qt6a23yI",
    authDomain: "rishi-c58e3.firebaseapp.com",
    projectId: "rishi-c58e3",
    storageBucket: "rishi-c58e3.appspot.com",
    messagingSenderId: "804061211577",
    appId: "1:804061211577:web:5cbb74551fdc9647086468"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signinForm = document.getElementById('signin-form');
const signinEmail = document.getElementById('signin-email');
const signinPassword = document.getElementById('signin-password');
const signinMessage = document.getElementById('signin-message');

signinForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const email = signinEmail.value;
    const password = signinPassword.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Redirect to dashboard upon successful sign-in
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            signinMessage.textContent = "Signin error: " + errorMessage;
            console.error("Signin error:", errorMessage);
        });
});