import React from 'react'
import colors from '../config/colors'
import Icon from './Icon'


const ImageListItem = ({image, icon, iconStyle, title, subtitle, LeftComponent, onClick}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            backgroundColor: 'white',
            maxHeight: 70
        }} onClick={onClick} >
            {image && <img src={image} alt="" style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                borderWidth: 1,
                borderColor: colors.lightText,
                borderStyle: 'solid'
            }} /> }

            {icon && <Icon name={icon} style={iconStyle} />}

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                height: '100%',
                paddingLeft: 10,
                flex: 1
            }}>
                <div
                    style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: colors.darkText
                    }}
                >
                    {title}
                </div>
                {subtitle && 
                    <div style={{
                        fontSize: '1.0rem',
                        color: colors.lightText
                    }} >{subtitle}</div>
                }
            </div>
            {LeftComponent}
        </div>
    )
}

export default ImageListItem
