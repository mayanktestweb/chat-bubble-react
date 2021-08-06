import React from 'react'

const Icon = ({ name, style, ...otherProps }) => {
    return (
        <div
            style={{
                ...{
                    display: 'flex',
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: 'tomato',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 25
                }, ...style
            }}
            {...otherProps}
        >
            <span className="material-icons" style={{ color: 'white', fontSize: 'inherit' }}>
                {name}
            </span>
        </div>
    )
}

export default Icon
