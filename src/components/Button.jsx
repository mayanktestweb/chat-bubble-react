import React from 'react'
import colors from '../config/colors'

const Button = ({icon, outlined, onClick, children, color=colors.primary, style, ...otherProps}) => {

    let solidStyle = {
        padding: 10,
        borderRadius: 100,
        backgroundColor: color,
        color: 'white',
        boxSizing: 'border-box',
        textTransform: 'uppercase',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer'
    }

    let outlinedStyle = {
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'white',
        color: color,
        borderWidth: 2,
        fontWeight: 'bold',
        borderColor: color,
        borderStyle: 'solid',
        boxSizing: 'border-box',
        textTransform: 'uppercase',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer'
    }

    return (
        <div 
            style={outlined ? {...outlinedStyle, ...style} : {...solidStyle, ...style}} 
            onClick={onClick}
            {...otherProps} 
        >
            {icon &&
                <span 
                    className="material-icons" 
                    style={{
                        fontSize: 'inherit', 
                        color: 'inherit'
                    }} >
                        {icon}
                </span>
            }
            <div style={{
                flex: 1,
                textAlign: 'center'
            }}>
                {children}
            </div>
        </div>
    )
}

export default Button
