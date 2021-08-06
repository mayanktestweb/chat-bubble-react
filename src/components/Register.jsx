import React from 'react'
import * as yup from 'yup'
import useAuth from '../hooks/useAuth'
import FormikForm from './forms/FormikForm'
import FormPasswordInput from './forms/FormPasswordInput'
import FormTextInput from './forms/FormTextInput'
import SubmitButton from './forms/SubmitButton'

let validationSchema = yup.object().shape({
    name: yup.string().required().min(1),
    email: yup.string().required().email(),
    password: yup.string().required().min(5)
})

const Register = () => {

    let { register } = useAuth()

    let registerUser = async ({ name, email, password }) => {
        try {
            await register({ name, email, password })
        } catch (error) {
            alert(error)
        }
    }

    return (
        <FormikForm
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={({ name, email, password }) => registerUser({ name, email, password })}
        >
            <FormTextInput
                name="name"
                icon="person"
                type="text"
                style={{ margin: '10px 0' }}
                placeholder="Name"
            />

            <FormTextInput
                name="email"
                icon="email"
                type="email"
                style={{ margin: '10px 0' }}
                placeholder="Email"
            />
            <FormPasswordInput
                name="password"
                type="password"
                style={{ margin: '10px 0' }}
                placeholder="Password"
            />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >
                <SubmitButton title="Register" style={{ width: '30%', margin: '10px 0' }} />
            </div>
        </FormikForm>
    )
}

export default Register
