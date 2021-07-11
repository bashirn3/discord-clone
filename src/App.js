import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { selectUser } from './features/userSlice';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux'
import { auth } from './firebase';
import { login, logout } from './features/userSlice';



function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        console.log('user is ', authUser)
        if (authUser) {
          //the user is logged in
          dispatch(login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          }))
        } else {
          //the user is logged out
          dispatch(logout());
        }
      })
    }, [dispatch])

    return (
      <div className="app">
        {user ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ) : <Login />}
      </div>
    );
  }

export default App;
