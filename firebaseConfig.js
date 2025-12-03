import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';           // ← OVO JE DODATO
import { getFirestore } from 'firebase/firestore'; // ← I OVO JE DODATO

const firebaseConfig = {
  apiKey: "AIzaSyDnOGRdTSWp1iFf6XzDZTzPXUxu8h2n1A8",
  authDomain: "parkingpapak-3bb62.firebaseapp.com",
  projectId: "parkingpapak-3bb62",
  storageBucket: "parkingpapak-3bb62.firebasestorage.app",
  messagingSenderId: "93806796802",
  appId: "1:93806796802:web:b25fc460a200517ce6071b"
};

//  inicijalizacija
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);        // za login/register
export const db = getFirestore(app);     // za čuvanje prijava, bodova, profila


export default app;