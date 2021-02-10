import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import CancelIcon from "@material-ui/icons/Cancel";
import Upload from "../../assets/images/draganddropfiles/upload.svg";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
  justifyContent: "center",
  alignItems: "center",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const DragandDropFiles = (props) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        [...files, ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )]
      );
    },
  });

  const remove = (file) => {
    const newFiles = [...files]; // make a var for the new array // remove the file from the array
    setFiles(newFiles.filter((notuse,i)=>i!=file)); // update the state
    console.log(file);
  };

  const thumbs = files.map((file, i) => (
    <div style={{ display: "grid" }}>
      <div style={thumb} key={file.name}>
        <CancelIcon
          style={{
            position: "absolute",
            paddingLeft: "4.4rem",
            height: "1.2rem",
          }}
          fontSize="small"
          onClick={() => remove(i)}
        />
        <div style={thumbInner}>
          <img alt={file.name} src={file.preview} style={img} />
        </div>
      </div>
      <p
        style={{
          marginTop: "-0.3rem",
          width: "12ch",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {file.name}
      </p>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
      <div
        style={{
          textAlign: "center",
          border: "2px dashed #E7C68E",
          padding: "2rem 0",
        }}
        {...getRootProps({ className: "dropzone" })}
      >
        <input {...getInputProps()} />
        <img src={Upload} />
        <p>Drag & Drop File here</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
};

export { DragandDropFiles };
