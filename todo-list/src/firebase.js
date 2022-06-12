// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9otGr5P6aYSI12GPTqGYTYfBCK3dQ9cA",
  authDomain: "todolist-project-ee7a6.firebaseapp.com",
  projectId: "todolist-project-ee7a6",
  storageBucket: "todolist-project-ee7a6.appspot.com",
  messagingSenderId: "437824043126",
  appId: "1:437824043126:web:aa4e424162800f12bbc757",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getAllItems() {
  const querySnapshot = await getDocs(collection(db, "todos"));

  let out = [];
  querySnapshot.forEach((doc) => {
    out.push({ text: doc.data().text, done: doc.data().done, id: doc.id });
  });
  return out;
}

export async function updateDoneFirebase(id, value) {
  const docRef = doc(db, "todos", id);
  await updateDoc(docRef, {
    done: value,
  });
}

export async function deleteFirebase(id) {
  await deleteDoc(doc(db, "todos", id));
}

export async function addTodoFirebase(text) {
  const docRef = await addDoc(collection(db, "todos"), {
    text,
    done: false,
  });
  return docRef.id;
}
