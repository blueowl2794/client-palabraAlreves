import {React} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './search.css';

const Search = ({handleSubmit, handleChange, text}) => {
  return (
    <div className="search">
        <Form onSubmit={handleSubmit} className="form">
            <Form.Group  className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Insert Text (only letters and numbers)" pattern="[A-Za-z0-9\s\n\r\t\f]{1,1000}" name={"text"} value={text} onChange={handleChange} />
            </Form.Group>

            <Button className="btn" variant="primary" type="submit">
                Send
            </Button>
        </Form>

    </div>
  )
}

export default Search
