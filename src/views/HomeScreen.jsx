import React from 'react'
import consts from '../config/consts'
import useAuth from '../hooks/useAuth'
import ImageListItem from '../components/ImageListItem'

const HomeScreen = () => {

    let { user, logout } = useAuth()

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh'
            }}
        >
            <ImageListItem
                image={consts.BASE_URL + "/" + user.image}
                title={user.name}
                LeftComponent={<span className="material-icons hover_effect" onClick={logout} >logout</span>}
            />
            <div
                style={{
                    padding: '0 5',
                    flexGrow: 1,
                    overflowY: 'scroll',
                    scrollbarWidth: 'thin',
                    border: '1px solid gray',
                }}
            >
                <h4>Online Friends</h4>


            </div>
        </div>
    )
}

export default HomeScreen
