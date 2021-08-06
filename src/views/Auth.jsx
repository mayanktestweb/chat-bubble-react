import React, { useState, useEffect } from 'react'
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import colors from '../config/colors'

function Auth() {

    const [option, setOption] = useState('login')

    let location = useLocation()

    useEffect(() => {
        setOption(location.pathname.slice(1,))
    }, [location])

    const linkStyle = {
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.2rem'
    }

    return (
        <div
            style={{
                paddingLeft: 5,
                paddingRight: 5
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <div>
                    <Link to="/login"
                        style={{
                            ...linkStyle,
                            color: option === 'login' ? colors.primary : colors.lightText
                        }}
                    >
                        Login
                    </Link>
                </div>
                <div>
                    <Link to="/register"
                        style={{
                            ...linkStyle,
                            color: option === 'register' ? colors.primary : colors.lightText
                        }}
                    >Register</Link>
                </div>
            </div>

            <div>
                <Switch>
                    <Route path="/login" >
                        <Login />
                    </Route>
                    <Route path="/register" >
                        <Register />
                    </Route>
                    <Redirect to="/login" />
                </Switch>
            </div>
        </div>
    )
}

export default Auth
