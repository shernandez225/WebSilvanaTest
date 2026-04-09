/*
  Inicialización de Firebase
  Exporta:
  - db (base de datos)
  - auth (autenticación)
*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXvJVFI_Kap0YTZAFZivxn7gbVM9OVEfY",
  authDomain: "silvanatest-e9bda.firebaseapp.com",
  databaseURL: "https://silvanatest-e9bda-default-rtdb.firebaseio.com",
  projectId: "silvanatest-e9bda",
  storageBucket: "silvanatest-e9bda.firebasestorage.app",
  messagingSenderId: "912881673268",
  appId: "1:912881673268:web:78b92422db720ba45d5661"
};


const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);