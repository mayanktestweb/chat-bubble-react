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

  return (
    <UserContext.Provider value={{ user, setUser }} >
      <div className="flex_div">
        {user !== null ? <MainScreen /> : <Auth />}
      </div>
    </UserContext.Provider>
  );
}

export default App;
