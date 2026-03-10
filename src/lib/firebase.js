import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyBXcQn8yppQXRw1T3p5AI60MKzrvH4BwqU',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'receta-3e555.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'receta-3e555',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'receta-3e555.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '1054203937793',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:1054203937793:web:2eb6830824b7da864aec00',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-QJ564FHV10',
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

export const db = getFirestore(app)
