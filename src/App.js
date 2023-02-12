import logo from "./logo.svg";
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlIsRxOJ-aMXLTCFk1YB2yeDWvQZsOor8",
  authDomain: "developer-portfolio-97fcc.firebaseapp.com",
  projectId: "developer-portfolio-97fcc",
  storageBucket: "developer-portfolio-97fcc.appspot.com",
  messagingSenderId: "12702120675",
  appId: "1:12702120675:web:f320a9e9acdc18a6b9e3d6",
  measurementId: "G-H6CP4EKDJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
              <p>
                  Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
