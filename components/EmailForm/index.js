import React from 'react'
import {useState, useEffect} from 'react'
import { Form, FormInput, FormContainer, FormButton } from './FormStyles'

const EmailForm = () => {

    const [formData, setFormData] = useState({
        email: '',
    })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({
            ...formData, 
            [name]: value
        })
    }

    const [errors, setErrors] = useState({})
    const validate = (formData) => {
        let formErrors = {}
        if(!formData.email){
            formErrors.email = 'Email required'
        } 
        return formErrors
    }

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = e => {
        setErrors(validate(formData))
        setIsSubmitted(true)
        e.preventDefault();

    }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
      }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitted){

            fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({ 'form-name': 'contact-form', ...formData })
            })
            .then(() => alert('Success!'))
            .then(() => setIsSubmitted(false))
            .then(() => setFormData({email: ''}))
            .catch(error => alert(error))
        }
    }, [errors, formData, isSubmitted])

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit} method="POST" data-netlify="true" >
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'/>
                    <input type="hidden" name="newsletter" value="newsletter-form" />
                    <FormInput 
                        type='email' 
                        name='email' 
                        id='email' 
                        className='form-input' 
                        placeholder='Enter Your Email'
                        value={formData.email} 
                        onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <FormButton type='submit' className='form-input-btn'>
                    Send
                </FormButton>
            </Form>
        </FormContainer>

    )
}

export default EmailForm

