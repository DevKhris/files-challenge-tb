import Alert from "react-bootstrap/Alert";
import { useEffect, useState, useMemo } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";

function App() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8080/files/data`)
      .then((response) => response.json())
      .then((data) => {
        setFiles(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <Navbar color="" expand="lg" className="bg-danger">
        <Container>
          <Navbar.Brand className="text-white" href="#home">
            React Test App
          </Navbar.Brand>
        </Container>
      </Navbar>
      <main>
        <Container>
          {error && <Alert className="mt-5 alert-danger">{error}</Alert>}
          <Table responsive className="mt-5">
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {files &&
                files.map((file) => {
                  return (
                    <tr>
                      <td>{file.file}</td>
                      <td>{file.text}</td>
                      <td>{file.number}</td>
                      <td>{file.hex}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Container>
      </main>
    </div>
  );
}

export default App;

