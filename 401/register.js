// signup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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

const signupForm = document.getElementById('signup-form');
const signupFirstName = document.getElementById('signup-firstname');
const signupLastName = document.getElementById('signup-lastname');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupMessage = document.getElementById('signup-message');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const email = signupEmail.value;
    const password = signupPassword.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            signupMessage.textContent = "Signup successful: " + user.email;
            console.log("Signup successful:", user);
            // Optionally, redirect the user to another page after signup
        })
        .catch((error) => {
            const errorMessage = error.message;
            signupMessage.textContent = "Signup error: " + errorMessage;
            console.error("Signup error:", errorMessage);
        });
});