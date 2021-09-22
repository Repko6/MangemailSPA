import { Button, Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function EmailAdd() {
  const [importanceTypes, setImportanceTypes] = useState([]);

  useEffect(async () => {
    await fetchImportanceTypes();
  }, []);

  async function fetchImportanceTypes() {
    try {
      const response = await axios.get('https://localhost:44398/api/importance-type');
      setImportanceTypes(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formEmailAddress">
            <Form.Label>From email address</Form.Label>
            <Form.Control type="email" placeholder="From email address"/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="toEmailAddress">
            <Form.Label>To email address</Form.Label>
            <Form.Control type="email" placeholder="To email address" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="ccEmailAddress">
            <Form.Label>CC email address</Form.Label>
            <Form.Control type="text" placeholder="CC email address" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Group className="mb-3" controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={10} placeholder="Content" />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <div key={`inline-radio`} className="mb-3">
            <Form.Label>Importance</Form.Label>
            <br />
            {importanceTypes.map((element, index) => (
              <Form.Check className="form-label" inline label={element.name} name="importanceTypeId" type="radio" id={`inline-radio-${index}`} />
            ))}
          </div>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EmailAdd;