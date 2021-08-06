import React from 'react'

const AppTextArea = ({onChange, style, ...otherProps}) => {
    return (
        <textarea
            onChange={onChange}
            style={{...{
                padding: 10,
                minHeight: 80,
                borderStyle: 'none',
                resize: 'none',
                backgroundColor: '#ddd',
                borderRadius: 20,
                outline: 'none',
                fontSize: '1.3rem',
                color: '#777',
                fontFamily: 'inherit',
                width: '100%',
                boxSizing: 'border-box'
            }, ...style}}
            {...otherProps}
        ></textarea>
    )
}

export default AppTextArea
