import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { validateEmail } from '../utils/helpers';

export default function Contact() {

  // Grouping state as an object
  const [ formState, setFormState ] = useState({ name: '', email: '', message: ''})
  const [ userMessage, setUserMessage ] = useState('');


  // onBlur on each input element
  // calls handleInputCHange to validate
  function handleInputChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value});
  }

  function handleValidation(e) {
    // Check for a good email
    if (e.target.name === 'email') {
      if (!validateEmail(e.target.value)) {
        setUserMessage('Please enter a valid email address');
      } else {
        setUserMessage('')
      }
    } else {
      if (!e.target.value.length) {
        setUserMessage('Please enter something here.')
      } else {
        setUserMessage('')
      }
    }
    // Check that name and message have some input
    // Alert them if nothing is filled properly
  }

  function handleSubmit(e) {
    e.preventDefault()
    setUserMessage('email sent');
    setFormState({ name: '', email: '', message: ''})
  }
  
  return (
   <>
    <div className="row">
    <h2>Contact Me</h2>

    <Form>

    <Form.Group className="mb-3" controlId="name">
        <Form.Control type="input" placeholder="Name" value={formState.name} name='name' onChange={handleInputChange} onBlur={handleValidation}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" value={formState.email} name='email' onChange={handleInputChange} onBlur={handleValidation} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Control as="textarea" placeholder="Message" value={formState.message} name='message' onChange={handleInputChange} onBlur={handleValidation} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      {userMessage && <p>{userMessage}</p>}
    </Form>

    </div>
    
   </>
  )
}