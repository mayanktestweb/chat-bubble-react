import React from 'react'
import * as yup from 'yup'
import useAuth from '../hooks/useAuth'
import FormikForm from './forms/FormikForm'
import FormPasswordInput from './forms/FormPasswordInput'
import FormTextInput from './forms/FormTextInput'
import SubmitButton from './forms/SubmitButton'

let validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(5)
})

const Login = () => {

    let { login } = useAuth()

    let loginUser = async ({ email, password }) => {
        try {
            await login({ email, password })
        } catch (error) {
            alert(error)
        }
    }

    return (
        <FormikForm
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={({ email, password }) => loginUser({ email, password })}
        >
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
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }} >
                <SubmitButton className="hover_effect" title="Login" style={{ width: '30%', margin: '10px 0' }} />
            </div>
        </FormikForm>
    )
}

export default Login
