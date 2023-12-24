import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import FileUpload from "./components/FileUpload";
import NavBar from "./components/NavBar";

function App() {
  const [file, setFile] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [isFileSelected, setIsFileSelected] = useState(false);
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <FileUpload
                  file={file}
                  setFile={setFile}
                  isFileUploaded={isFileUploaded}
                  setIsFileUploaded={setIsFileUploaded}
                  isFileSelected={isFileSelected}
                  setIsFileSelected={setIsFileSelected}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
