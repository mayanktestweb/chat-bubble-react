import { useFormikContext } from 'formik'
import React from 'react'
import colors from '../../config/colors'
import PasswordInput from '../PasswordInput'


const FormPasswordInput = ({name, ...otherProps}) => {
    let {values, setFieldValue, errors, touched, setFieldTouched} = useFormikContext()
    return (
        <>
            <PasswordInput
                name={name} 
                value={values[name]} 
                onChange={e => setFieldValue(name, e.target.value)}
                onBlur={() => setFieldTouched(name, true)}
                {...otherProps} 
            />
            {errors[name] && touched[name] &&
                <div style={{
                    color: colors.errorRed,
                    fontSize: 17
                }} >
                    {errors[name]}
                </div>
            }
        </>
    )
}

export default FormPasswordInput
