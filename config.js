import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyC7AZ-VcI3zi8IHqGot2kKJ1AibdgiFu5o",
	authDomain: "story-telling-app-d6ed5.firebaseapp.com",
	projectId: "story-telling-app-d6ed5",
	storageBucket: "story-telling-app-d6ed5.appspot.com",
	messagingSenderId: "947078897064",
	appId: "1:947078897064:web:30c5cb12f65aa05e7e119d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
