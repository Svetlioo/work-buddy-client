/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./FileUpload.module.css";
import CollaborationInfo from "./CollaborationInfo";

function FileUpload({
  file,
  setFile,
  isFileUploaded,
  setIsFileUploaded,
  isFileSelected,
  setIsFileSelected,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [hasHeader, setHasHeader] = useState(false);
  const [storeFile, setStoreFile] = useState(false);
  const [longest, setLongest] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setIsDragOver(false);
    setIsFileSelected(true);
    setIsFileUploaded(false);
    setLongest(null);
  };

  const onDragOver = () => {
    setIsDragOver(true);
    setIsFileSelected(true);
  };

  const onDragLeave = () => {
    setIsDragOver(false);
    setIsFileSelected(false);
  };

  const onRemoveFile = () => {
    setFile(null);
    setIsFileSelected(false);
    setIsFileUploaded(false);
    setLongest(null);
    toast.success("File removed successfully!");
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDragOver,
    onDragLeave,
  });

  const handleUpload = async (file) => {
    if (!file) {
      toast.error("No file selected");
      return;
    }

    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("hasHeader", hasHeader.toString());
      formData.append("storeFile", storeFile.toString());

      const response = await fetch("http://localhost:8080/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`File upload failed with status ${response.status}`);
      }

      const responseData = await response.json();

      if (responseData) {
        setIsFileUploaded(true);
        toast.success("File uploaded successfully!");
        console.log("Uploaded Data:", responseData);
      } else {
        throw new Error(
          "File upload failed. Server response: " + responseData.message
        );
      }
    } catch (error) {
      toast.error("Error uploading file");
      console.error("Upload Error:", error);
    } finally {
      setIsLoading(false);
      setIsFileSelected(false);
      setHasHeader(false);
      setStoreFile(false);
    }
  };

  const fetchLongestCollaboration = async () => {
    try {
      const longestCollaborationResponse = await fetch(
        "http://localhost:8080/api/collaboration/longest"
      );
      const longestCollaborationData =
        await longestCollaborationResponse.json();
      console.log("Longest Collaboration Data:", longestCollaborationData);
      setLongest(longestCollaborationData);
    } catch (error) {
      console.error("Error fetching longest collaboration data:", error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Upload CSV File</h1>
        <div
          {...getRootProps()}
          className={`${styles.dropzone} ${
            isDragOver ? styles["drag-over"] : ""
          } ${isFileSelected ? styles["file-selected"] : ""}`}
        >
          <input {...getInputProps()} />
          <p>
            {isFileSelected
              ? `File ${
                  file ? `"${file?.name}"` : ""
                } has been selected successfully`
              : "Drag & drop a file here, or click to select a file"}
          </p>
        </div>
        {file && (
          <div className={styles.preview}>
            <p>
              {isFileUploaded ? "Uploaded" : "Selected"} File: {file.name}{" "}
              <button className={styles["close-button"]} onClick={onRemoveFile}>
                X
              </button>
            </p>

            {!isFileUploaded && file && (
              <button
                disabled={isLoading}
                onClick={() => {
                  if (file && !isFileUploaded && isFileSelected) {
                    handleUpload(file);
                  }
                }}
              >
                Upload
              </button>
            )}
          </div>
        )}
      </div>
      {isFileSelected && file && (
        <div className={styles["checkbox-container"]}>
          <label>
            <input
              type="checkbox"
              checked={hasHeader}
              onChange={() => setHasHeader(!hasHeader)}
            />
            Has Header
          </label>
          <label>
            <input
              type="checkbox"
              checked={storeFile}
              onChange={() => setStoreFile(!storeFile)}
            />
            Store File
          </label>
        </div>
      )}
      {!longest && isFileUploaded && (
        <button
          className={styles["longest-button"]}
          onClick={fetchLongestCollaboration}
        >
          Press to get the longest
        </button>
      )}
      {longest && <CollaborationInfo collaborationData={longest} />}
    </>
  );
}

export default FileUpload;
