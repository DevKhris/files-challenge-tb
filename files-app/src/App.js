import Alert from "react-bootstrap/Alert";
import { useEffect, useState, useMemo, useRef, Suspense } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function App() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const originalFiles = useRef();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/files/data`)
      .then((response) => response.json())
      .then((data) => {
        originalFiles.current = data;
        setFiles(data);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  const visibleFiles = useMemo(() => {
    return files !== null ? files : originalFiles;
  }, [files, originalFiles]);

  const handleInputChange = (e) => {
    const fileName = e.target.value;
    setLoading(true);
    fetch(`http://localhost:8080/files/data?fileName=${fileName}`)
      .then((response) => response.json())
      .then((data) => {
        setFiles(data);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  };

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
          {error && <Alert className="my-5 alert-danger">{error}</Alert>}
          <Form>
            <Form.Group>
              <Form.Control
                className="mt-5"
                placeholder="Search a file"
                type="text"
                aria-describedby="searchBlock"
                data-testid="search-id"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
          {loading && <p className="my-3 text-center">Loading...</p>}
          <Suspense>
            <Table responsive className="my-5" striped>
              <thead>
                <tr>
                  <th>File Name</th>
                  <th>Text</th>
                  <th>Number</th>
                  <th>Hex</th>
                </tr>
              </thead>

              <tbody>
                {visibleFiles &&
                  visibleFiles.map((file) => {
                    return (
                      <tr key={file.hex}>
                        <td>{file.file}</td>
                        <td>{file.text}</td>
                        <td>{file.number}</td>
                        <td>{file.hex}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Suspense>
        </Container>
      </main>
    </div>
  );
}

export default App;

