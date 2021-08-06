import { useFormikContext } from 'formik'
import React from 'react'
import colors from '../../config/colors'
import AppTextArea from '../AppTextArea'


const FormTextArea = ({name, ...otherProps}) => {

    let {values, setFieldValue, setFieldTouched, touched, errors} = useFormikContext()

    return (
        <>
            <AppTextArea 
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

export default FormTextArea
