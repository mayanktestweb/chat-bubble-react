import { useFormikContext } from 'formik'
import React from 'react'
import Button from '../Button'


const SubmitButton = ({title="Save", ...otherProps}) => {

    let {handleSubmit} = useFormikContext()

    return (
        <Button onClick={handleSubmit} {...otherProps}>
            {title}
        </Button>
    )
}

export default SubmitButton
