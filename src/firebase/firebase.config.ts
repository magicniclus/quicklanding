import { initializeApp, FirebaseApp, getApps } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getDatabase, Database } from "firebase/database";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: "quicklanding-796e2.firebaseapp.com",
  databaseURL: "https://quicklanding-796e2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quicklanding-796e2",
  storageBucket: "quicklanding-796e2.appspot.com",
  messagingSenderId: "818797538618",
  appId: "1:818797538618:web:480c35533b610e88eb3403"
};

// Vérifier si Firebase a déjà été initialisé
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Obtenir une référence aux services d'authentification et de base de données
const auth: Auth = getAuth(app);
const database: Database = getDatabase(app);

export { app, auth, database };
