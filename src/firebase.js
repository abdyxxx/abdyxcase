import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const API_KEY = 'AIzaSyCrTifykvU052tMSiQBH8McePEXhmvGmyQ'

const firebaseConfig = {
    apiKey: "AIzaSyCrTifykvU052tMSiQBH8McePEXhmvGmyQ",
    authDomain: "abdyxcase.firebaseapp.com",
    databaseURL: "https://abdyxcase-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "abdyxcase",
    storageBucket: "abdyxcase.appspot.com",
    messagingSenderId: "1061682472819",
    appId: "1:1061682472819:web:cc58c62c5530f5d987c706"
};

const firebaseApp = initializeApp(firebaseConfig)

let db = getFirestore(firebaseApp);

async function getItems() {
    let products = [];
    let madeCases = [];
    try {
        const querySnapshot = await getDocs(collection(db, "items"));
        querySnapshot.forEach((doc) => {
            let data = doc.data()
            products = [...products, {...data, id: doc.id}]
        });
        const querySnapshot2 = await getDocs(collection(db, "madeCases"));
        querySnapshot2.forEach((doc) => {
            let data = doc.data()
            madeCases = [...madeCases, {...data, id: doc.id + ' made'}]
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }

    return {
        products,
        madeCases
    }
}

export default getItems;