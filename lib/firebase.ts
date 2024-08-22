import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyBNb5ZUfTXPZJz8m0jxnIyns7k7Tt4xJfc',
	authDomain: 'udemy-47d37.firebaseapp.com',
	projectId: 'udemy-47d37',
	storageBucket: 'udemy-47d37.appspot.com',
	messagingSenderId: '803575676702',
	appId: '1:803575676702:web:c85fb1a1201132ff59130f',
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export { storage }
