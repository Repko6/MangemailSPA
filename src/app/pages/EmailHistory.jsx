import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";

function EmailHistory() {
  const [emailHistories, setEmailHistories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    await fetchEmailHistories();
  }, []);

  async function fetchEmailHistories() {
    try {
      setIsLoading(true);
      const response = await axios.get('https://localhost:44398/api/email-history');
      setEmailHistories(response.data)
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>

      <Table responsive variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>From Email Address</th>
            <th>To Email Address</th>
            <th>CC Email Address</th>
            <th>Subject</th>
            <th>Content</th>
            <th>Importance</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ?
          <tr>
            <Spinner animation="grow" />
            </tr>
            :
            <>
              {emailHistories.map((element, index) => (
                <tr key={element.id}>
                  <td>{index+1}</td>
                  <td>{element.fromEmailAddress}</td>
                  <td>{element.toEmailAddress}</td>
                  <td>{element.ccEmailAddress}</td>
                  <td>{element.subject}</td>
                  <td>{element.content}</td>
                  <td>{element.importance}</td>
                  <td>{element.dateCreated}</td>
                </tr>
              ))}
            </>}
        </tbody>
      </Table>
    </>
  );
}

export default EmailHistory;