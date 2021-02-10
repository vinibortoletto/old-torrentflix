import React, { useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { useHistory, useLocation } from 'react-router-dom';
import { auth } from '../helpers/firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const history = useHistory();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState();
  const [userEmail, setUserEmail] = useState();
  const [loading, setLoading] = useState(false);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  async function loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
    history.push('/minha-conta');
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateDisplayName(name) {
    const displayName = name;
    return auth.currentUser.updateProfile({ displayName });
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function getEmailFromLocalStorage() {
    const localEmail = JSON.parse(localStorage.getItem('email'));
    const inputElmt = document.getElementById('email');
    const labelElmt = inputElmt.nextSibling;

    if (localEmail) {
      inputElmt.value = localEmail;
      labelElmt.classList.add('active');
      setUserEmail(localEmail);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    loading,
    setLoading,
    currentUser,
    userEmail,
    setUserEmail,
    signup,
    getEmailFromLocalStorage,
    login,
    loginGoogle,
    logout,
    resetPassword,
    updateDisplayName,
    updateEmail,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
