import React from 'react'

const TextInput = ({icon, style, ...otherProps}) => {

    return (
        <div style={{...{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            borderRadius: 100,
            padding: 5,
            paddingLeft: 15,
            backgroundColor: '#ddd',
            boxSizing: 'border-box',
            alignItems: 'center',
            color: '#777',
            fontSize: '1.3rem'
        }, ...style}}>
            {icon &&
                <span className="material-icons" style={{fontSize: 'inherit'}} >{icon}</span>
            }
            <input 
                style={{
                    height: 40,
                    fontSize: 'inherit',
                    borderWidth: 0,
                    borderRadius: 100,
                    backgroundColor: 'inherit',
                    paddingLeft: 15,
                    color: 'inherit',
                    outline: 'none',
                    flex: 1
                }} 
                
                {...otherProps} 
            />
        </div>
    )
}

export default TextInput
