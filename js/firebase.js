// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";

/* Configuración del proyecto Firebase */
const firebaseConfig = {
  apiKey: "AIzaSyDXvJVFI_Kap0YTZAFZivxn7gbVM9OVEfY",
  authDomain: "silvanatest-e9bda.firebaseapp.com",
  databaseURL: "https://silvanatest-e9bda-default-rtdb.firebaseio.com",
  projectId: "silvanatest-e9bda",
  storageBucket: "silvanatest-e9bda.firebasestorage.app",
  messagingSenderId: "912881673268",
  appId: "1:912881673268:web:78b92422db720ba45d5661"
};
/* Inicialización */
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);