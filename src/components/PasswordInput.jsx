import React, {useState} from 'react'

const PasswordInput = ({style, ...otherProps}) => {
   const [show, setShow] = useState(false)
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
            fontSize: '1.3rem',
            flexWrap: 'nowrap'
        }, ...style}}>
            
            <span className="material-icons" style={{fontSize: 'inherit'}} >lock</span>
            
            
            <input 
                style={{
                    height: 40,
                    flexGrow: 1,
                    fontSize: 'inherit',
                    borderWidth: 0,
                    borderRadius: 100,
                    backgroundColor: 'inherit',
                    paddingLeft: 15,
                    color: 'inherit',
                    outline: 'none',
                    maxWidth: '80%',
                    borderStyle: 'none'
                }} 
                
                {...otherProps} 
                type={show ? 'text' : 'password'}
            />

            <span 
                className="material-icons" 
                style={{
                    fontSize: 'inherit',
                    marginRight: 15,
                    flexShrink: 0
                }} 
                onClick={() => setShow(!show)} >
                    {show ? 'visibility' : 'visibility_off'}
            </span>
        </div>
    )
}

export default PasswordInput
