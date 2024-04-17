import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCwb4K_KkBi4CPqI51hebSAlhjTIOdXupo',
  authDomain: 'mytodolist-4fe7d.firebaseapp.com',
  projectId: 'mytodolist-4fe7d',
  storageBucket: 'mytodolist-4fe7d.appspot.com',
  messagingSenderId: '464140890566',
  appId: '1:464140890566:web:20c18178215f2450be02c7',
  measurementId: 'G-VKM84J65QM'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const analytics = getAnalytics(app)

export default {
  app,
  analytics,
  db
}
