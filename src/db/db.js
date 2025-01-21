import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDIf1BBHb8xrWStxEWKGHVC_ZGO8HQI6DQ",
  authDomain: "proyecto-react-b7467.firebaseapp.com",
  projectId: "proyecto-react-b7467",
  storageBucket: "proyecto-react-b7467.firebasestorage.app",
  messagingSenderId: "612127579309",
  appId: "1:612127579309:web:7d4419062602cb0ffbba24"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export const fetchProductFromFirebase = async (id) => {
  try {
    const docRef = doc(db, "products", id); 
    const docSnap = await getDoc(docRef); 

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }; 
    } else {
      console.log("No existe el producto");
      return null; 
    }
  } catch (error) {
    console.error("Error obteniendo el producto desde Firebase:", error);
    return null; 
  }
};


export default db;
