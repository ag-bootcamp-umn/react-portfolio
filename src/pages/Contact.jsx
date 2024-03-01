import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  
  return (
   <>
    <div className="row">
    <h2>Contact Me</h2>

    <Form>

    <Form.Group className="mb-3" controlId="name">
        <Form.Control type="input" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Control as="textarea" placeholder="Message"/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
    
   </>
  )
}