import './App.css'
import './mystyle.css';
import TextInput from './components/TextInput';
import useAuth from './hooks/useAuth';
import Auth from './views/Auth';
import MainScreen from './views/MainScreen';
import UserContext from './providers/UserProvider';
import React, { useEffect, useState } from 'react';
import { getUserById } from './apis/authApis';
import jwtDecode from 'jwt-decode';
import SocketContext, { socket } from './providers/SocketProvider';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    let token = localStorage.getItem('token')
    //console.log(token)

    if (token) {
      (async () => {
        let { _id } = jwtDecode(token)
        let res = await getUserById({ _id })
        setUser(res)
      })();
    }

  }, [])


  useEffect(() => {
    if (user && socket.connected) {
      console.log('trying to register user')
      socket.emit('register_user', user)
    }
  }, [user, socket])

  return (
    <UserContext.Provider value={{ user, setUser }} >
      <SocketContext.Provider value={socket} >
        <Provider store={store} >
          <div className="flex_div">
            {user !== null ? <MainScreen /> : <Auth />}
          </div>
        </Provider>
      </SocketContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
